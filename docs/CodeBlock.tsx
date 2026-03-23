"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

export type CodeBlockProps = {
  code: string;
  title?: string;
  className?: string;
};

/**
 * Plain <pre>/<code> display with one-click copy (no syntax highlighting).
 */
export function CodeBlock({ code, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <section className={cn("doc-code", className)} aria-label={title ?? "Source code"}>
      <div className="doc-code__toolbar">
        {title ? <span className="doc-code__label">{title}</span> : <span className="doc-code__label">Code</span>}
        <button type="button" className="doc-code__copy ui-btn ui-btn--secondary" onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="doc-code__pre">
        <code className="doc-code__code">{code}</code>
      </pre>
    </section>
  );
}
