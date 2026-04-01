"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useDocSearch } from "./DocShell";

const SECTIONS = [
  {
    label: "Getting Started",
    items: [{ href: "/docs/initialization", label: "Initialization" }],
  },
  {
    label: "Components",
    items: [
      { href: "/docs/button", label: "Button" },
      { href: "/docs/liquid-button", label: "Liquid Button" },
      { href: "/docs/shader-animation", label: "Shader Animation" },
      { href: "/docs/alert", label: "Alert" },
      { href: "/docs/badge", label: "Badge" },
      { href: "/docs/breadcrumb", label: "Breadcrumb" },
      { href: "/docs/collapse", label: "Collapse" },
      { href: "/docs/pagination", label: "Pagination" },
      { href: "/docs/progress", label: "Progress" },
      { href: "/docs/toast", label: "Toast" },
    ],
  },
] as const;

function matchesSearch(text: string, query: string): boolean {
  if (!query.trim()) return true;
  return text.toLowerCase().includes(query.toLowerCase());
}

export function DocsSidebar() {
  const pathname = usePathname();
  const { search } = useDocSearch();

  return (
    <nav className="doc-sidebar" aria-label="Documentation">
      {SECTIONS.map((section) => {
        const visibleItems = section.items.filter((item) =>
          matchesSearch(item.label, search),
        );
        if (visibleItems.length === 0) return null;

        return (
          <div key={section.label} className="doc-sidebar__section">
            <p className="doc-sidebar__heading">{section.label}</p>
            <ul className="doc-sidebar__list">
              {visibleItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="doc-sidebar__item">
                    <Link
                      href={item.href}
                      className={cn(
                        "doc-sidebar__link",
                        active && "doc-sidebar__link--active",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
