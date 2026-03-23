import type { HTMLAttributes } from "react";
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
