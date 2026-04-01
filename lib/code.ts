/**
 * Manual source snippets for documentation copy — keep in sync with real files.
 * Do not auto-generate; update when `components/ui/Button.tsx` changes.
 */

export const installInitCommand = "npm exec -- my-ui init";

export const installAddButtonCommand = "npm exec -- my-ui add button";

export const installNotes = `Creates:
• styles/globals.css — CSS variables (light/dark), .ui-btn, .ui-container
• styles/utilities.css — layout & spacing utilities
• lib/utils.ts — cn()
• lib/theme.ts — THEME_STORAGE_KEY
• hooks/useTheme.ts — useTheme()
• components/ui/theme-toggle.tsx
• Prepends imports into app/globals.css (or src/app/globals.css)

After init, follow MY_UI_THEME_LAYOUT.md (generated in your project) to add the theme script to app/layout.tsx.`;

export const buttonCodeHtml = `<button class="ui-btn ui-btn--primary">Primary</button>
<button class="ui-btn ui-btn--secondary">Secondary</button>`;

export const buttonCodeReact = `import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "ui-btn",
        variant === "primary" && "ui-btn--primary",
        variant === "secondary" && "ui-btn--secondary",
        className,
      )}
      {...props}
    />
  );
}
`;

export const buttonCodeNext = `import { Button } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}`;

export const installAddAlertCommand = "npm exec -- my-ui add alert";

export const alertCodeHtml = `<div class="ui-alert ui-alert--default" role="alert">Default message</div>
<div class="ui-alert ui-alert--success" role="alert">Success message</div>
<div class="ui-alert ui-alert--warning" role="alert">Warning message</div>
<div class="ui-alert ui-alert--error" role="alert">Error message</div>`;

export const alertCodeReact = `import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type AlertVariant = "default" | "success" | "warning" | "error";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
  role?: "alert" | "status" | "region";
};

export function Alert({
  className,
  variant = "default",
  role = "alert",
  ...props
}: AlertProps) {
  return (
    <div
      role={role}
      className={cn(
        "ui-alert",
        variant === "default" && "ui-alert--default",
        variant === "success" && "ui-alert--success",
        variant === "warning" && "ui-alert--warning",
        variant === "error" && "ui-alert--error",
        className,
      )}
      {...props}
    />
  );
}
`;

export const alertCodeNext = `import { Alert } from "@/components/ui";

export default function Page() {
  return (
    <div className="ui-d-flex ui-flex-col ui-gap-4">
      <Alert variant="default">Default message</Alert>
      <Alert variant="success">Success message</Alert>
      <Alert variant="warning">Warning message</Alert>
      <Alert variant="error">Error message</Alert>
    </div>
  );
}`;

export const installAddBadgeCommand = "npm exec -- my-ui add badge";

export const badgeCodeHtml = `<span class="ui-badge ui-badge--default">Default</span>
<span class="ui-badge ui-badge--success">Success</span>
<span class="ui-badge ui-badge--warning">Warning</span>
<span class="ui-badge ui-badge--error">Error</span>`;

export const badgeCodeReact = `import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "success" | "warning" | "error";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "ui-badge",
        variant === "default" && "ui-badge--default",
        variant === "success" && "ui-badge--success",
        variant === "warning" && "ui-badge--warning",
        variant === "error" && "ui-badge--error",
        className,
      )}
      {...props}
    />
  );
}
`;

export const badgeCodeNext = `import { Badge } from "@/components/ui";

export default function Page() {
  return (
    <div className="ui-d-flex ui-gap-2">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  );
}`;

export const installAddBreadcrumbCommand = "npm exec -- my-ui add breadcrumb";

export const breadcrumbCodeHtml = `<nav class="ui-breadcrumb" aria-label="Breadcrumb">
  <ol style="display:flex;align-items:center;gap:0.5rem;list-style:none;margin:0;padding:0">
    <li><a href="/" class="ui-breadcrumb__link">Home</a><span class="ui-breadcrumb__separator">/</span></li>
    <li><a href="/docs" class="ui-breadcrumb__link">Docs</a><span class="ui-breadcrumb__separator">/</span></li>
    <li><span aria-current="page">Button</span></li>
  </ol>
</nav>`;

export const breadcrumbCodeReact = `import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
};

export function Breadcrumb({ items, separator = "/", className }: BreadcrumbProps) {
  return (
    <nav className={cn("ui-breadcrumb", className)} aria-label="Breadcrumb">
      <ol className="ui-d-flex ui-items-center ui-gap-2 ui-m-0" style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const isLink = !!item.href && !isLast;
          return (
            <li key={i} className="ui-breadcrumb__item">
              {isLink && item.href ? (
                <a href={item.href} className="ui-breadcrumb__link">{item.label}</a>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              )}
              {!isLast && <span className="ui-breadcrumb__separator">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
`;

export const breadcrumbCodeNext = `import { Breadcrumb } from "@/components/ui";

export default function Page() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Button" },
  ];
  return <Breadcrumb items={items} separator=">" />;
}`;

export const installAddCollapseCommand = "npm exec -- my-ui add collapse";

export const collapseCodeHtml = `<!-- Requires JS for toggle. Use React component for full behavior. -->
<div class="ui-collapse">
  <button class="ui-collapse__trigger" type="button" aria-expanded="false">
    <span class="ui-collapse__trigger-text">Click to expand</span>
    <svg class="ui-collapse__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
  </button>
  <div class="ui-collapse__content" data-state="closed">
    <div class="ui-collapse__content-inner">Content here</div>
  </div>
</div>`;

export const collapseCodeReact = `"use client";

import { useCallback, useId, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type CollapseProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function Collapse({ trigger, children, defaultOpen = false, open: controlledOpen, onOpenChange, className }: CollapseProps) {
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
    const update = () => setContentHeight(inner.scrollHeight);
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
      <button type="button" className="ui-collapse__trigger" onClick={toggle} aria-expanded={open} aria-controls={\`collapse-content-\${id}\`} id={\`collapse-trigger-\${id}\`}>
        <span className="ui-collapse__trigger-text">{trigger}</span>
        <svg className={cn("ui-collapse__icon", open && "ui-collapse__icon--open")} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div id={\`collapse-content-\${id}\`} className="ui-collapse__content" data-state={open ? "open" : "closed"} role="region" style={{ height: contentHeight }} aria-hidden={!open}>
        <div ref={innerRef} className="ui-collapse__content-inner">{children}</div>
      </div>
    </div>
  );
}
`;

export const collapseCodeNext = `import { Collapse } from "@/components/ui";

export default function Page() {
  return (
    <div className="ui-d-flex ui-flex-col ui-gap-4">
      <Collapse trigger="Section 1" defaultOpen>
        <p>Expanded content for section 1.</p>
      </Collapse>
      <Collapse trigger="Section 2">
        <p>Hidden until clicked.</p>
      </Collapse>
    </div>
  );
}`;

export const installAddPaginationCommand = "npm exec -- my-ui add pagination";

export const paginationCodeHtml = `<nav class="ui-pagination" aria-label="Pagination">
  <ul class="ui-pagination__list">
    <li class="ui-pagination__item"><button type="button" class="ui-pagination__btn" disabled>Previous</button></li>
    <li class="ui-pagination__item"><button type="button" class="ui-pagination__page ui-pagination__page--active" aria-current="page">1</button></li>
    <li class="ui-pagination__item"><button type="button" class="ui-pagination__page">2</button></li>
    <li class="ui-pagination__item"><button type="button" class="ui-pagination__btn">Next</button></li>
  </ul>
</nav>`;

export const paginationCodeReact = `"use client";

import { cn } from "@/lib/utils";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  previousLabel?: string;
  nextLabel?: string;
};

function getPaginationItems(current: number, total: number): Array<number | "ellipsis"> {
  if (total < 1) return [];
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "ellipsis", total];
  if (current >= total - 3) {
    return [1, "ellipsis", total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  previousLabel = "Previous",
  nextLabel = "Next",
}: PaginationProps) {
  if (totalPages < 1) return null;
  const items = getPaginationItems(currentPage, totalPages);
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;
  return (
    <nav className={cn("ui-pagination", className)} aria-label="Pagination">
      <ul className="ui-pagination__list">
        <li className="ui-pagination__item">
          <button type="button" className="ui-pagination__btn" disabled={!canPrev} onClick={() => canPrev && onPageChange(currentPage - 1)} aria-label={previousLabel}>
            {previousLabel}
          </button>
        </li>
        {items.map((item, i) => (
          <li key={\`\${item}-\${i}\`} className="ui-pagination__item">
            {item === "ellipsis" ? (
              <span className="ui-pagination__ellipsis" aria-hidden>…</span>
            ) : (
              <button type="button" className={cn("ui-pagination__page", item === currentPage && "ui-pagination__page--active")} onClick={() => onPageChange(item)} aria-label={\`Page \${item}\`} aria-current={item === currentPage ? "page" : undefined}>
                {item}
              </button>
            )}
          </li>
        ))}
        <li className="ui-pagination__item">
          <button type="button" className="ui-pagination__btn" disabled={!canNext} onClick={() => canNext && onPageChange(currentPage + 1)} aria-label={nextLabel}>
            {nextLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
}
`;

export const paginationCodeNext = `"use client";

import { useState } from "react";
import { Pagination } from "@/components/ui";

export default function Page() {
  const [page, setPage] = useState(1);
  return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
}`;

export const installAddProgressCommand = "npm exec -- my-ui add progress";

export const progressCodeHtml = `<div class="ui-progress ui-progress--default" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45" aria-valuetext="45%">
  <div class="ui-progress__track" aria-hidden="true">
    <div class="ui-progress__fill" style="width:45%"></div>
  </div>
</div>`;

export const progressCodeReact = `import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ProgressVariant = "default" | "success" | "warning" | "error";

export type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  variant?: ProgressVariant;
};

export function Progress({
  className,
  value = 0,
  max = 100,
  indeterminate = false,
  variant = "default",
  ...props
}: ProgressProps) {
  const pct = indeterminate ? undefined : Math.min(100, Math.max(0, max === 0 ? 0 : (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuetext={indeterminate ? undefined : \`\${Math.round(pct ?? 0)}%\`}
      className={cn(
        "ui-progress",
        indeterminate && "ui-progress--indeterminate",
        variant === "default" && "ui-progress--default",
        variant === "success" && "ui-progress--success",
        variant === "warning" && "ui-progress--warning",
        variant === "error" && "ui-progress--error",
        className,
      )}
      {...props}
    >
      <div className="ui-progress__track" aria-hidden>
        <div
          className="ui-progress__fill"
          style={indeterminate || pct === undefined ? undefined : { width: \`\${pct}%\` }}
        />
      </div>
    </div>
  );
}
`;

export const progressCodeNext = `import { Progress } from "@/components/ui";

export default function Page() {
  return (
    <div className="ui-d-flex ui-flex-col ui-gap-4" style={{ width: "100%" }}>
      <Progress value={40} />
      <Progress value={70} variant="success" />
      <Progress value={55} variant="warning" />
      <Progress value={90} variant="error" />
      <Progress indeterminate />
    </div>
  );
}`;

export const installAddToastCommand = "npm exec -- my-ui add toast";

export const toastCodeHtml = `<div class="ui-toast-region" aria-live="polite" aria-label="Notifications">
  <div role="status" class="ui-toast ui-toast--success">
    <div class="ui-toast__row">
      <div class="ui-toast__body">
        <div class="ui-toast__title">Saved</div>
        <div class="ui-toast__desc">Your work was saved.</div>
      </div>
      <button type="button" class="ui-toast__close" aria-label="Dismiss notification">×</button>
    </div>
  </div>
</div>`;

export const toastCodeReact = `"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export type ToastVariant = "default" | "success" | "warning" | "error";

export type ToastInput = {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  /** Auto-dismiss after ms. Set \`0\` to disable. Default 5000. */
  duration?: number;
};

type ToastRecord = ToastInput & { id: string };

const DEFAULT_DURATION = 5000;

type ToastContextValue = {
  toast: (input: ToastInput) => string;
  dismiss: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

let enqueueRef: ((input: ToastInput) => string) | null = null;

/** Show a toast. Requires \`<ToastProvider>\` above in the tree. */
export function toast(input: ToastInput) {
  if (!enqueueRef) {
    if (typeof window !== "undefined") {
      console.warn("[my-ui] toast: ToastProvider is not mounted.");
    }
    return "";
  }
  return enqueueRef(input);
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

function ToastList({
  toasts,
  onDismiss,
}: {
  toasts: ToastRecord[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div
      className="ui-toast-region"
      aria-label="Notifications"
      aria-live="polite"
    >
      {toasts.map((t) => {
        const variant = t.variant ?? "default";
        return (
          <div
            key={t.id}
            role="status"
            className={cn(
              "ui-toast",
              variant === "default" && "ui-toast--default",
              variant === "success" && "ui-toast--success",
              variant === "warning" && "ui-toast--warning",
              variant === "error" && "ui-toast--error",
            )}
          >
            <div className="ui-toast__row">
              <div className="ui-toast__body">
                {t.title ? (
                  <div className="ui-toast__title">{t.title}</div>
                ) : null}
                {t.description ? (
                  <div className="ui-toast__desc">{t.description}</div>
                ) : null}
              </div>
              <button
                type="button"
                className="ui-toast__close"
                onClick={() => onDismiss(t.id)}
                aria-label="Dismiss notification"
              >
                ×
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const tid = timers.current.get(id);
    if (tid) clearTimeout(tid);
    timers.current.delete(id);
  }, []);

  const addToast = useCallback(
    (input: ToastInput) => {
      const id = \`toast-\${Date.now()}-\${Math.random().toString(36).slice(2, 9)}\`;
      const duration = input.duration ?? DEFAULT_DURATION;
      const item: ToastRecord = { id, variant: "default", ...input };
      setToasts((prev) => [...prev, item]);
      if (duration > 0) {
        const tid = setTimeout(() => dismiss(id), duration);
        timers.current.set(id, tid);
      }
      return id;
    },
    [dismiss],
  );

  useEffect(() => {
    enqueueRef = addToast;
    return () => {
      enqueueRef = null;
    };
  }, [addToast]);

  useEffect(() => {
    return () => {
      timers.current.forEach((tid) => clearTimeout(tid));
      timers.current.clear();
    };
  }, []);

  const value = useMemo(
    () => ({ toast: addToast, dismiss }),
    [addToast, dismiss],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastList toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}
`;

export const toastCodeNext = `// app/providers.tsx (client)
"use client";
import { ToastProvider } from "@/components/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}

// app/layout.tsx — wrap body children with <Providers>
// app/page.tsx or any client component:
"use client";
import { Button } from "@/components/ui";
import { toast } from "@/components/ui";

export function ToastDemo() {
  return (
    <Button
      onClick={() =>
        toast({
          title: "Saved",
          description: "Your changes were saved.",
          variant: "success",
        })
      }
    >
      Show toast
    </Button>
  );
}`;

export const installAddLiquidButtonCommand =
  "npm exec -- my-ui add liquid-button";

export const liquidGlassInstallNote =
  "Preferred: run `npm exec -- my-ui add liquid-button` — copies `components/ui/liquid-glass-button.tsx` and appends Liquid/Metal (and demo layout) CSS to `styles/globals.css` when those classes are not already present. Alternatively, copy the component and merge the `.ui-liquid-btn` / `.ui-metal-btn` rules from `styles/globals.css` in this repo.";

export const liquidGlassButtonCodeReact = `import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

export function GlassDemo() {
  return (
    <section>
      <div
        className="ui-demo-liquid"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80)",
        }}
      >
        <LiquidButton className="ui-demo-liquid__btn" size="xxl">
          Liquid Glass
        </LiquidButton>
      </div>
      <MetalButton variant="primary">Metal</MetalButton>
    </section>
  );
}`;

export const liquidGlassButtonCodeNext = `import { LiquidButton } from "@/components/ui";

export default function Page() {
  return (
    <LiquidButton size="xxl">Liquid Glass</LiquidButton>
  );
}`;

export const shaderAnimationInstallNote = `Shader animation background — setup (do these in order)

1) Copy the component file into your project
   Target path:
   components/ui/animated-shader-background.tsx
   Copy the source from this repository's components/ui folder (same path).

2) Install the Three.js package
   npm install three

3) TypeScript types (only if needed)
   If the compiler or IDE reports missing types for the "three" import, run:
   npm install -D @types/three

4) Keep it a Client Component
   The file must start with "use client" (already there). Do not remove that line.
   You may import it from a Server Component page — Next.js will still ship it to the client.`;

export const shaderAnimationCodeNext = `import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

export default function Page() {
  return (
    <AnimatedShaderBackground>
      <p style={{ color: "#fff", padding: "2rem" }}>Content above the shader</p>
    </AnimatedShaderBackground>
  );
}`;
