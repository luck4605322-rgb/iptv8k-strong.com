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
        width={232}
        height={246}
        priority
        className="-my-2 h-14 w-auto shrink-0 object-contain"
      />

      {showWordmark && (
        <span className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
          <span className="brand-gold">STRONG</span>

          {/* 8K inside a retro TV frame */}
          <span className="tv-frame relative inline-flex flex-col items-center leading-none">
            <span aria-hidden className="flex h-2 items-end justify-center gap-1.5">
              <span className="tv-antenna h-2 origin-bottom -rotate-[28deg]" />
              <span className="tv-antenna h-2 origin-bottom rotate-[28deg]" />
            </span>
            <span className="tv-body p-[3px]">
              <span className="tv-screen tv-8k block px-1.5 py-0.5 text-lg font-extrabold leading-none">
                8K
              </span>
            </span>
            <span aria-hidden className="mt-[1px] flex w-full items-center justify-between px-1">
              <span className="tv-foot" />
              <span className="tv-foot" />
            </span>
          </span>
        </span>
      )}
    </span>
  )
}
