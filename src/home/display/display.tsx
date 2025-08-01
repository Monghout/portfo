"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
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
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      {" "}
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-base  ">
          Hak Monghout
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
    </WavyBackground>
  );
}
