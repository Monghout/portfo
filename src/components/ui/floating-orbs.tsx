"use client"

import { useEffect, useState } from "react"

interface Orb {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([])

  useEffect(() => {
    const colors = ["bg-white/5", "bg-white/10", "bg-gray-300/5", "bg-gray-400/5", "bg-gray-500/5"]

    const newOrbs: Orb[] = []
    for (let i = 0; i < 6; i++) {
      newOrbs.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 300 + 150,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 8,
      })
    }
    setOrbs(newOrbs)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute rounded-full blur-xl ${orb.color} animate-float-slow`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
