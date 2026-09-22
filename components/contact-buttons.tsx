import { contact } from "@/lib/contact"
import { WhatsAppIcon, TelegramIcon } from "@/components/brand-icons"

export function ContactButtons({
  className = "",
}: {
  className?: string
}) {
  return (
    <div className={`flex flex-col justify-center gap-3 sm:flex-row ${className}`}>
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${contact.whatsappNumber}`}
        className="btn-gradient inline-flex h-12 flex-row items-center justify-center gap-2.5 rounded-lg px-6 text-base font-semibold transition-transform hover:scale-[1.02]"
      >
        <WhatsAppIcon className="size-6 shrink-0" />
        <span>WhatsApp</span>
      </a>
      <a
        href={contact.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Telegram ${contact.telegramHandle}`}
        className="btn-gradient-outline inline-flex h-12 flex-row items-center justify-center gap-2.5 rounded-lg border border-primary/60 px-6 text-base font-semibold transition-transform hover:scale-[1.02]"
      >
        <TelegramIcon className="size-6 shrink-0" />
        <span>Telegram</span>
      </a>
    </div>
  )
}
