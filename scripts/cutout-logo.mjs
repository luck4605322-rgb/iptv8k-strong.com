import { PNG } from "pngjs"
import { readFileSync, writeFileSync } from "node:fs"

const src = "public/logo-source.png"
const out = "public/logo-badge.png"

const png = PNG.sync.read(readFileSync(src))
const { width: w, height: h, data } = png

const idx = (x, y) => (y * w + x) * 4

// Sample background color from the four corners
const samples = [
  idx(0, 0),
  idx(w - 1, 0),
  idx(0, h - 1),
  idx(w - 1, h - 1),
  idx(Math.floor(w / 2), 0),
  idx(Math.floor(w / 2), h - 1),
]
let br = 0, bg = 0, bb = 0
for (const s of samples) {
  br += data[s]
  bg += data[s + 1]
  bb += data[s + 2]
}
br /= samples.length
bg /= samples.length
bb /= samples.length
console.log("[v0] bg color:", Math.round(br), Math.round(bg), Math.round(bb))

const dist = (i) => {
  const dr = data[i] - br
  const dg = data[i + 1] - bg
  const db = data[i + 2] - bb
  return Math.sqrt(dr * dr + dg * dg + db * db)
}

// Flood fill from edges: mark background pixels connected to the border
const TOL = 60 // color distance considered "background"
const visited = new Uint8Array(w * h)
const stack = []
const pushIf = (x, y) => {
  if (x < 0 || y < 0 || x >= w || y >= h) return
  const p = y * w + x
  if (visited[p]) return
  if (dist(p * 4) <= TOL) {
    visited[p] = 1
    stack.push(x, y)
  }
}
for (let x = 0; x < w; x++) {
  pushIf(x, 0)
  pushIf(x, h - 1)
}
for (let y = 0; y < h; y++) {
  pushIf(0, y)
  pushIf(w - 1, y)
}
while (stack.length) {
  const y = stack.pop()
  const x = stack.pop()
  pushIf(x + 1, y)
  pushIf(x - 1, y)
  pushIf(x, y + 1)
  pushIf(x, y - 1)
}

// Apply transparency to flood-filled background pixels
let cleared = 0
for (let p = 0; p < w * h; p++) {
  if (visited[p]) {
    data[p * 4 + 3] = 0
    cleared++
  }
}

// Feather: soften alpha for pixels adjacent to transparent ones to avoid hard edges
const alphaCopy = new Uint8Array(w * h)
for (let p = 0; p < w * h; p++) alphaCopy[p] = data[p * 4 + 3]
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const p = y * w + x
    if (alphaCopy[p] === 0) continue
    // count transparent neighbors
    let transparentN = 0
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx, ny = y + dy
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue
        if (alphaCopy[ny * w + nx] === 0) transparentN++
      }
    }
    if (transparentN >= 5) data[p * 4 + 3] = 128
  }
}

console.log("[v0] cleared", cleared, "of", w * h, "pixels")
writeFileSync(out, PNG.sync.write(png))
console.log("[v0] wrote", out, w + "x" + h)
