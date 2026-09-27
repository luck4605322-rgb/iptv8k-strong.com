import { trialConfig } from "@/lib/trial-config"

export type LiveCategory = { category_id: string; category_name: string }

export type LiveStream = {
  stream_id: number
  name: string
  stream_icon?: string
  category_id: string
}

function apiUrl(action?: string) {
  const params = new URLSearchParams({ username: trialConfig.username, password: trialConfig.password })
  if (action) params.set("action", action)
  return `${trialConfig.server}/player_api.php?${params.toString()}`
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Request failed with ${res.status}`)
  return res.json() as Promise<T>
}

export async function fetchLiveCatalog() {
  const [categories, streams] = await Promise.all([
    fetchJson<LiveCategory[]>(apiUrl("get_live_categories")),
    fetchJson<LiveStream[]>(apiUrl("get_live_streams")),
  ])
  return {
    categories: Array.isArray(categories) ? categories : [],
    streams: Array.isArray(streams) ? streams : [],
  }
}

export function liveStreamUrl(streamId: number) {
  const user = encodeURIComponent(trialConfig.username)
  const pass = encodeURIComponent(trialConfig.password)
  return `${trialConfig.server}/live/${user}/${pass}/${streamId}.m3u8`
}
