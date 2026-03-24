"use client";

import { useCallback, useId, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export type CollapseProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function Collapse({
  trigger,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  className,
}: CollapseProps) {
  const id = useId().replace(/:/g, "");
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const innerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    if (!open) {
      setContentHeight(0);
      return;
    }

    const update = () => {
      setContentHeight(inner.scrollHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [open, children]);

  const toggle = useCallback(() => {
    const next = !open;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  }, [open, isControlled, onOpenChange]);

  return (
    <div className={cn("ui-collapse", className)}>
      <button
        type="button"
        className="ui-collapse__trigger"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={`collapse-content-${id}`}
        id={`collapse-trigger-${id}`}
      >
        <span className="ui-collapse__trigger-text">{trigger}</span>
        <ChevronIcon className={cn("ui-collapse__icon", open && "ui-collapse__icon--open")} />
      </button>
      <div
        id={`collapse-content-${id}`}
        className="ui-collapse__content"
        data-state={open ? "open" : "closed"}
        role="region"
        aria-labelledby={`collapse-trigger-${id}`}
        style={{ height: contentHeight }}
        aria-hidden={!open}
      >
        <div ref={innerRef} className="ui-collapse__content-inner">
          {children}
        </div>
      </div>
    </div>
  );
}
