import type { ButtonHTMLAttributes } from "react";
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
