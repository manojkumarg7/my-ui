/**
 * Manual source snippets for documentation copy — keep in sync with real files.
 * Do not auto-generate; update when `components/ui/Button.tsx` changes.
 */

export const installInitCommand = "npx my-ui init";

export const installAddButtonCommand = "npx my-ui add button";

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

export const installAddAlertCommand = "npx my-ui add alert";

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

export const installAddBadgeCommand = "npx my-ui add badge";

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

export const installAddBreadcrumbCommand = "npx my-ui add breadcrumb";

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

export const installAddCollapseCommand = "npx my-ui add collapse";

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

import { useCallback, useId, useState } from "react";
import { cn } from "@/lib/utils";

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
        aria-controls={\`collapse-content-\${id}\`}
        id={\`collapse-trigger-\${id}\`}
      >
        <span className="ui-collapse__trigger-text">{trigger}</span>
        <svg className={cn("ui-collapse__icon", open && "ui-collapse__icon--open")} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div
        id={\`collapse-content-\${id}\`}
        className="ui-collapse__content"
        data-state={open ? "open" : "closed"}
        role="region"
        aria-labelledby={\`collapse-trigger-\${id}\`}
      >
        <div className="ui-collapse__content-inner">{children}</div>
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
