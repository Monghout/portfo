"use client";

import { DesktopNav } from "@/home/nav/desktop";
import { MobileNav } from "@/home/nav/mobile";
import Display from "@/home/display/display";
import { ModeToggle } from "@/components/ui/modeToggle";

export default function FloatingNav() {
  return (
    <div className="flex flex-col">
      {" "}
      {/* Top Section - Fixed height */}
      <div className="">
        <Display />
      </div>
      {/* Bottom Section - Grows and scrolls */}
      <div className="">
        <>
          <DesktopNav />
          <MobileNav />
          {/* Main Content Area */}
        </>
      </div>
    </div>
  );
}
