"use client";

import { DesktopNav } from "@/home/nav/desktop";
import { MobileNav } from "@/home/nav/mobile";
import Display from "@/home/display/display";

export default function FloatingNav() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Section - Fixed height */}
      <div className="h-24">
        <Display />
      </div>

      {/* Bottom Section - Grows and scrolls */}
      <div className="flex-1 overflow-auto">
        <>
          <DesktopNav />
          <MobileNav />
          {/* Main Content Area */}
        </>
      </div>
    </div>
  );
}
