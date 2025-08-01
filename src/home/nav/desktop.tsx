"use client";

import { ModeToggle } from "@/components/ui/modeToggle";
import { navigationConfig } from "@/app/config/navigation";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DesktopNav() {
  return (
    <div className="hidden md:block fixed left-4 top-4 bottom-4 w-16 hover:w-56 z-50 group transition-all duration-300 ease-in-out">
      <div className="h-full backdrop-blur-md rounded-2xl px-3 py-4 shadow-lg border border-gray-200 dark:border-slate-700/50">
        <nav className="flex flex-col h-full">
          <div className="flex flex-col space-y-2">
            {navigationConfig.main.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </a>
            ))}
            <ModeToggle />
          </div>
          <div></div>
        </nav>
      </div>
    </div>
  );
}
