"use client";

import { useCallback, useEffect, useState } from "react";
import { THEME_STORAGE_KEY, type ThemeMode } from "@/lib/theme";

function getThemeFromDocument(): ThemeMode {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: ThemeMode): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore quota / private mode */
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    setThemeState(getThemeFromDocument());
    setResolved(true);
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
    applyTheme(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = getThemeFromDocument() === "dark" ? "light" : "dark";
    setTheme(next);
  }, [setTheme]);

  return { theme, setTheme, toggleTheme, resolved };
}
