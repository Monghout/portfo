"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ModeToggle } from "@/components/ui/modeToggle";
import { CollapsedThemeToggle } from "@/components/ui/collapsed-theme-toggle";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/app/config/data";
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
      <WavyBackground className="max-w-full mx-auto pb-20">
        {" "}
        <div className="flex flex-col items-center justify-center h-[40rem] ">
          <p className=" text-black dark:text-white text-xl">
            <span> Welcome to </span>
            <span className=" text-glow ">Ace Port</span>
          </p>
          <TypewriterEffectSmooth words={words} />{" "}
        </div>{" "}
      </WavyBackground>
      <Timeline data={timelineData} />
    </div>
  );
}
