"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/docs/initialization", label: "Initialization" },
  { href: "/docs/button", label: "Button" },
  { href: "/docs/alert", label: "Alert" },
  { href: "/docs/badge", label: "Badge" },
  { href: "/docs/breadcrumb", label: "Breadcrumb" },
] as const;

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="doc-sidebar" aria-label="Documentation">
      <p className="doc-sidebar__heading">Documentation</p>
      <ul className="doc-sidebar__list">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className="doc-sidebar__item">
              <Link
                href={item.href}
                className={cn("doc-sidebar__link", active && "doc-sidebar__link--active")}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
