"use client";

import { createContext, useCallback, useContext, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui";
import { DocsSidebar } from "./DocsSidebar";

const DocSearchContext = createContext<{
  search: string;
  setSearch: (v: string) => void;
} | null>(null);

export function useDocSearch() {
  const ctx = useContext(DocSearchContext);
  return ctx ?? { search: "", setSearch: () => {} };
}

export function DocShell({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");

  return (
    <DocSearchContext.Provider value={{ search, setSearch }}>
      <div className="doc-shell ui-d-flex ui-flex-col ui-flex-1 ui-min-h-screen">
        <header className="doc-topbar">
          <div className="doc-topbar__inner">
            <Link href="/" className="doc-topbar__logo">
              my-ui
            </Link>
            <div className="doc-topbar__center">
              <input
                type="search"
                placeholder="Search docs..."
                className="doc-topbar__search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search documentation"
              />
            </div>
            <div className="doc-topbar__actions">
              <ThemeToggle className="doc-topbar__theme" />
            </div>
          </div>
        </header>

        <div className="doc-shell__grid ui-d-flex ui-flex-1">
          <aside className="doc-sidebar-wrap">
            <DocsSidebar />
          </aside>
          <div className="doc-main">{children}</div>
        </div>
      </div>
    </DocSearchContext.Provider>
  );
}
