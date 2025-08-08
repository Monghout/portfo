"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { CollapsedThemeToggle } from "./collapsed-theme-toggle";
import { useTheme } from "next-themes";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: {
    light: string[];
    dark: string[];
  };
  waveWidth?: number;
  backgroundFill?: {
    light: string;
    dark: string;
  };
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const { theme } = useTheme();
  const noise = createNoise3D();
  const animationRef = useRef<number | null>(null); // Initialize as null
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseOffset = useRef<number>(0); // Initialize with 0
  const [isSafari, setIsSafari] = useState(false);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const getWaveColors = () => {
    if (!colors) {
      return theme === "dark"
        ? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]
        : ["#3b82f6", "#6366f1", "#8b5cf6", "#d946ef", "#06b6d4"];
    }
    return theme === "dark" ? colors.dark : colors.light;
  };

  const getBackgroundFill = () => {
    if (!backgroundFill) {
      return theme === "dark" ? "black" : "white";
    }
    return theme === "dark" ? backgroundFill.dark : backgroundFill.light;
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const drawWaves = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = getBackgroundFill();
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    ctx.filter = `blur(${blur}px)`;

    const waveColors = getWaveColors();
    const speedFactor = getSpeed();

    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, i * 0.3, noiseOffset.current) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }

      ctx.stroke();
      ctx.closePath();
    }

    noiseOffset.current += speedFactor;
  };

  const animate = () => {
    drawWaves();
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  useEffect(() => {
    initCanvas();
    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]); // Re-run when theme changes

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className="w-12 h-12">
        <CollapsedThemeToggle />
      </div>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
