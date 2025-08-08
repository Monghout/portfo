"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CollapsedThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="flex items-center justify-center w-full px-3 py-2 rounded-lg text-white dark:text-slate-300 hover:bg-slate-100 hover:dark:text-black transition-colors duration-200">
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-full px-3 py-2 rounded-lg text-black dark:text-slate-300 hover:bg-slate-100 hover:dark:text-black hover:text-black transition-colors duration-200"
      title={`Current theme: ${theme}. Click to cycle through themes.`}
    >
      <div className="relative w-5 h-5">
        <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute top-0 left-0 h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </div>
    </button>
  );
}
