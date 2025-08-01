"use client"

interface GradientBlurProps {
  mousePosition: { x: number; y: number }
}

export function GradientBlur({ mousePosition }: GradientBlurProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Mouse follower gradient */}
      <div
        className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Static gradient blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-white/2 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
