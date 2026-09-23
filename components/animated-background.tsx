export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background" aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/bg/main.png)" }}
      />
      {/* Dark gradient keeps section content readable over the photo. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.13 0.008 60 / 0.55) 0%, oklch(0.12 0.008 60 / 0.7) 50%, oklch(0.11 0.008 60 / 0.82) 100%)",
        }}
      />
    </div>
  )
}
