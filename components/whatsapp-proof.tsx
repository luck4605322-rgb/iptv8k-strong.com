import { Check, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react"
import { getSocialHeadings, whatsappChats, type WhatsAppChat } from "@/lib/social-proof"
import type { Locale } from "@/lib/i18n"

// A mock WhatsApp chat "screenshot". Uses WhatsApp's own brand colors on
// purpose so it reads as a genuine screenshot, independent of the site theme.
function ChatCard({ chat, onlineLabel }: { chat: WhatsAppChat; onlineLabel: string }) {
  return (
    <div className="w-[300px] shrink-0 overflow-hidden rounded-2xl border border-border shadow-xl sm:w-[320px]">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5" style={{ backgroundColor: "#075E54" }}>
        <ArrowLeft className="h-4 w-4 shrink-0 text-white/80" aria-hidden="true" />
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base"
          style={{ backgroundColor: "#128C7E" }}
          aria-hidden="true"
        >
          {chat.flag}
        </span>
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="truncate text-sm font-semibold text-white">{chat.name}</span>
          <span className="text-[11px] text-white/70">{onlineLabel}</span>
        </div>
        <div className="ml-auto flex items-center gap-3 text-white/80">
          <Video className="h-4 w-4" aria-hidden="true" />
          <Phone className="h-4 w-4" aria-hidden="true" />
          <MoreVertical className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2 px-3 py-4" style={{ backgroundColor: "#ECE5DD" }}>
        {chat.messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[80%] rounded-lg px-2.5 py-1.5 text-[13px] leading-snug shadow-sm"
              style={{ backgroundColor: m.from === "me" ? "#DCF8C6" : "#FFFFFF", color: "#111B21" }}
            >
              <p className="text-pretty">{m.text}</p>
              <span className="mt-0.5 flex items-center justify-end gap-0.5 text-[10px] text-black/45">
                {m.time}
                {m.from === "me" && <Check className="h-3 w-3" style={{ color: "#34B7F1" }} aria-hidden="true" />}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WhatsAppProof({ lang }: { lang: Locale }) {
  const t = getSocialHeadings(lang).whatsapp
  const onlineLabel = "online"
  // Repeat the small set of chats so the loop is long enough to feel continuous.
  const loop = [...whatsappChats, ...whatsappChats]

  return (
    <section id="whatsapp" className="border-y border-border bg-background/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t.title}
            <span className="text-primary"> {t.accent}</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>
      </div>

      <div className="marquee-wrap relative mt-12 overflow-hidden">
        <div className="marquee marquee-left items-start gap-4 py-1" style={{ ["--marquee-duration" as string]: "70s" }}>
          {loop.map((c, i) => (
            <ChatCard key={`a-${c.name}-${i}`} chat={c} onlineLabel={onlineLabel} />
          ))}
          {loop.map((c, i) => (
            <div key={`b-${c.name}-${i}`} aria-hidden="true">
              <ChatCard chat={c} onlineLabel={onlineLabel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
