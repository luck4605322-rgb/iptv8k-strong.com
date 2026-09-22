import { Button } from "@/components/ui/button"
import { contact } from "@/lib/contact"
import { WhatsAppIcon, TelegramIcon } from "@/components/brand-icons"

export function ContactButtons({
  size = "lg",
  className = "",
}: {
  size?: "default" | "sm" | "lg"
  className?: string
}) {
  return (
    <div className={`flex flex-col justify-center gap-3 sm:flex-row ${className}`}>
      <Button asChild size={size} className="btn-gradient h-12 gap-2.5 px-6 text-base font-semibold [&_svg]:size-6">
        <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${contact.whatsappNumber}`}>
          <WhatsAppIcon />
          WhatsApp
        </a>
      </Button>
      <Button asChild size={size} variant="outline" className="btn-gradient-outline h-12 gap-2.5 border-primary/60 px-6 text-base font-semibold [&_svg]:size-6">
        <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Telegram ${contact.telegramHandle}`}>
          <TelegramIcon />
          Telegram
        </a>
      </Button>
    </div>
  )
}
