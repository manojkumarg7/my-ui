import type { HTMLAttributes } from "react";
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
