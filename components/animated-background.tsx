const SCENES = ["/bg/scene-1.png", "/bg/scene-2.png", "/bg/scene-3.png"]

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background" aria-hidden="true">
      {SCENES.map((src) => (
        <div key={src} className="bg-slide" style={{ backgroundImage: `url(${src})` }} />
      ))}
      {/* Dark gradient keeps section content readable over the moving photos. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.14 0.008 60 / 0.82) 0%, oklch(0.13 0.008 60 / 0.9) 50%, oklch(0.12 0.008 60 / 0.95) 100%)",
        }}
      />
    </div>
  )
}
