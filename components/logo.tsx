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
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-label="STRONG 8K"
        className="h-10 w-10 shrink-0 drop-shadow-[0_2px_8px_oklch(0.8_0.14_82/0.35)]"
      >
        <defs>
          <linearGradient id="strong8k-gold" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="oklch(0.9 0.11 92)" />
            <stop offset="0.5" stopColor="oklch(0.8 0.14 82)" />
            <stop offset="1" stopColor="oklch(0.66 0.14 66)" />
          </linearGradient>
        </defs>

        {/* Rounded badge */}
        <rect x="3" y="3" width="42" height="42" rx="13" fill="url(#strong8k-gold)" />
        <rect
          x="3.75"
          y="3.75"
          width="40.5"
          height="40.5"
          rx="12.25"
          fill="none"
          stroke="oklch(1 0 0 / 0.28)"
          strokeWidth="1.5"
        />

        {/* Broadcast arcs + play triangle, in the dark brand foreground color */}
        <g fill="none" stroke="oklch(0.18 0.02 70)" strokeWidth="2.6" strokeLinecap="round">
          <path d="M17 15.5a13 13 0 0 1 0 17" opacity="0.55" />
          <path d="M31 15.5a13 13 0 0 0 0 17" opacity="0.55" />
        </g>
        <path d="M20.5 17.5 33 24l-12.5 6.5z" fill="oklch(0.18 0.02 70)" />
      </svg>

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
