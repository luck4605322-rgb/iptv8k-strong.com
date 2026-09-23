import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logo-badge.png"
        alt="STRONG 8K"
        width={48}
        height={48}
        priority
        className="h-11 w-11 shrink-0 object-contain drop-shadow-[0_2px_10px_oklch(0.62_0.24_0/0.4)]"
      />

      {showWordmark && (
        <span className="flex items-baseline gap-1.5 font-display text-2xl font-extrabold tracking-tight">
          <span className="text-foreground">STRONG</span>
          <span className="rounded-md bg-primary px-1.5 py-0.5 text-xl leading-none text-primary-foreground">
            8K
          </span>
        </span>
      )}
    </span>
  )
}
