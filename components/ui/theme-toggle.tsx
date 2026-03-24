"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export type ThemeToggleProps = {
  className?: string;
};

/**
 * Theme toggle using Sun/Moon icons and global .ui-btn styles.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, resolved } = useTheme();

  return (
    <button
      type="button"
      className={cn("ui-btn", "ui-btn--secondary", className)}
      onClick={toggleTheme}
      aria-label={resolved && theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {resolved ? theme === "dark" ? <Sun size={18} /> : <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
