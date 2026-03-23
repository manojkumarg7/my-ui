"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

export type CodeVariant = {
  label: string;
  code: string;
};

export type CodeBlockWithVariantsProps = {
  variants: CodeVariant[];
  title?: string;
  className?: string;
};

/**
 * Code block with a dropdown to switch between HTML, React, Next.js (or other) variants.
 */
export function CodeBlockWithVariants({ variants, title, className }: CodeBlockWithVariantsProps) {
  const [active, setActive] = useState(0);
  const current = variants[active]!;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(current.code);
    } catch {
      /* ignore */
    }
  }, [current.code]);

  const [copied, setCopied] = useState(false);
  const onCopy = useCallback(async () => {
    await handleCopy();
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, [handleCopy]);

  return (
    <section className={cn("doc-code", className)} aria-label={title ?? "Source code"}>
      <div className="doc-code__toolbar">
        <div className="doc-code__toolbar-left">
          {title ? <span className="doc-code__label">{title}</span> : <span className="doc-code__label">Code</span>}
          <select
            className="doc-code__select"
            value={active}
            onChange={(e) => setActive(Number(e.target.value))}
            aria-label="Code variant"
          >
            {variants.map((v, i) => (
              <option key={v.label} value={i}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="doc-code__copy ui-btn ui-btn--secondary" onClick={onCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="doc-code__pre">
        <code className="doc-code__code">{current.code}</code>
      </pre>
    </section>
  );
}
