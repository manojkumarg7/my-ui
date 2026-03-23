"use client";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export type ThemeToggleProps = {
  className?: string;
};

/**
 * Theme toggle using global .ui-btn styles (no separate Button component required).
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
      {resolved ? (theme === "dark" ? "Light mode" : "Dark mode") : "Theme"}
    </button>
  );
}
