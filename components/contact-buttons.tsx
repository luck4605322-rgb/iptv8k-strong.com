import { MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contact } from "@/lib/contact"

export function ContactButtons({
  size = "lg",
  className = "",
}: {
  size?: "default" | "sm" | "lg"
  className?: string
}) {
  return (
    <div className={`flex flex-col justify-center gap-3 sm:flex-row ${className}`}>
      <Button asChild size={size} className="btn-gradient gap-2 text-base font-semibold">
        <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-5 w-5" />
          WhatsApp {contact.whatsappNumber}
        </a>
      </Button>
      <Button asChild size={size} variant="outline" className="btn-gradient-outline gap-2 border-primary/60 text-base font-semibold">
        <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer">
          <Send className="h-4 w-4" />
          Telegram {contact.telegramHandle}
        </a>
      </Button>
    </div>
  )
}
