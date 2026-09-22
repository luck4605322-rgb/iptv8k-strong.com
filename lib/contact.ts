// Central contact details. Update here to change everywhere.
export const contact = {
  whatsappNumber: "+8618573887383",
  // wa.me requires the number without "+" or spaces
  whatsappUrl: "https://wa.me/8618573887383",
  telegramHandle: "@IPTVstrong8k_admin",
  telegramUrl: "https://t.me/IPTVstrong8k_admin",
} as const

// Build a WhatsApp link with a prefilled order message.
export function whatsappWith(message: string) {
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`
}
