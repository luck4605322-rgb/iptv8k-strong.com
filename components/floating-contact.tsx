import { MessageCircle, Send } from "lucide-react"
import { contact } from "@/lib/contact"

export function FloatingContact() {
  return (
    <>
      {/* WhatsApp — fixed to the left edge, vertically centered */}
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${contact.whatsappNumber}`}
        className="group fixed left-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg shadow-black/40 ring-1 ring-white/20 transition-transform hover:scale-110 sm:h-14 sm:w-14"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 md:block">
          WhatsApp
        </span>
      </a>

      {/* Telegram — fixed to the right edge, vertically centered */}
      <a
        href={contact.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Telegram ${contact.telegramHandle}`}
        className="group fixed right-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg shadow-black/40 ring-1 ring-white/20 transition-transform hover:scale-110 sm:h-14 sm:w-14"
        style={{ backgroundColor: "#229ED9" }}
      >
        <Send className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Telegram
        </span>
      </a>
    </>
  )
}
