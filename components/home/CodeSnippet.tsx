"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

export type CodeSnippetProps = {
  code: string;
  label?: string;
  className?: string;
};

/**
 * Styled code block with one-click copy for the home page.
 */
export function CodeSnippet({ code, label = "Terminal", className }: CodeSnippetProps) {
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
    <div className={cn("home-code-snippet", className)}>
      <div className="home-code-snippet__header">
        <span className="home-code-snippet__label">{label}</span>
        <button
          type="button"
          className="home-code-snippet__copy"
          onClick={handleCopy}
          aria-label="Copy to clipboard"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="home-code-snippet__pre">
        <code className="home-code-snippet__code">{code}</code>
      </pre>
    </div>
  );
}
