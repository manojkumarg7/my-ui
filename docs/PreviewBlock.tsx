import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PreviewBlockProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

/**
 * Live preview shell for documentation pages.
 */
export function PreviewBlock({ children, title, className }: PreviewBlockProps) {
  return (
    <section className={cn("doc-preview", className)} aria-label={title ?? "Preview"}>
      {title ? <h2 className="doc-preview__title">{title}</h2> : null}
      <div className="doc-preview__surface">{children}</div>
    </section>
  );
}
