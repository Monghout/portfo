"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from "next-themes";
import { CollapsedThemeToggle } from "./collapsed-theme-toggle";

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
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
  const { theme } = useTheme();

  const init = () => {
    if (!containerRef.current || !canvasRef.current) return;

    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    // Get container dimensions instead of window dimensions
    const container = containerRef.current;
    w = ctx.canvas.width = container.clientWidth;
    h = ctx.canvas.height = container.clientHeight;

    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    const handleResize = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      w = ctx.canvas.width = container.clientWidth;
      h = ctx.canvas.height = container.clientHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  const waveColors =
    colors ??
    (theme === "dark"
      ? ["#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#06b6d4"]
      : ["#60a5fa", "#a5b4fc", "#c4b5fd", "#f0abfc", "#67e8f9"]);

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 40;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 80;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    if (!ctx) return;

    ctx.fillStyle =
      backgroundFill || (theme === "dark" ? "#000000FF" : "#f8fafc");
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    const cleanup = init();
    render();

    return () => {
      cancelAnimationFrame(animationId);
      cleanup?.();
    };
  }, [theme]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-screen w-full flex flex-col items-center justify-center relative overflow-hidden", // Added overflow-hidden
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 w-full h-full" // Changed positioning
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <CollapsedThemeToggle />
      <div className={cn("relative z-10 w-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
