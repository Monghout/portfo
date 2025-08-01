"use client";

import { navigationConfig } from "@/app/config/navigation";

export function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <div className="h-16 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-gray-200 dark:border-slate-700/50">
        <nav className="flex justify-around items-center h-full">
          {navigationConfig.mobile.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="flex flex-col items-center space-y-1 px-2 py-2 rounded-lg text-black dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
