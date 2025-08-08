"use client";

import { ModeToggle } from "@/components/ui/modeToggle";
import { CollapsedThemeToggle } from "@/components/ui/collapsed-theme-toggle";
import { navigationConfig } from "@/app/config/navigation";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
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
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-black dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 relative overflow-hidden"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Settings and Theme toggle at bottom */}
          <div className="mt-auto space-y-2">
            {" "}
            <CollapsedThemeToggle />
            {/* <SignInButton>
              <a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-black dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 relative overflow-hidden">
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  Sign in
                </span>
              </a>
            </SignInButton> */}
            {/* Theme Toggle - Works in both collapsed and expanded states */}
          </div>
        </nav>
      </div>
    </div>
  );
}
