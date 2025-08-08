"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ModeToggle } from "@/components/ui/modeToggle";
import { CollapsedThemeToggle } from "@/components/ui/collapsed-theme-toggle";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/app/config/data";
import { Dark } from "../nav/dark";
const words = [
  {
    text: "THIS",
  },
  {
    text: "IS",
  },
  {
    text: "MY",
  },

  {
    text: "PORTFOLIO.",
    className: "text-blue-500 dark:text-white",
  },
];
export default function display() {
  return (
    <div>
      {" "}
      <div>
        <WavyBackground
          colors={{
            light: ["#3b82f6", "#6366f1", "#8b5cf6", "#d946ef", "#06b6d4"],
            dark: ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
          }}
          backgroundFill={{
            light: "white",
            dark: "black",
          }}
        >
          <div className="flex flex-col items-center justify-center h-[40rem] ">
            <p className="text-xl">
              <span> Welcome to </span>
              <span className=" text-glow ">Ace Port</span>
            </p>
            <TypewriterEffectSmooth words={words} />{" "}
          </div>{" "}
        </WavyBackground>
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}
