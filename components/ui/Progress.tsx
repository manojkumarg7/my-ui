import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ProgressVariant = "default" | "success" | "warning" | "error";

export type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  /** Value in the same unit as `max` (e.g. 0–100 when max is 100). */
  value?: number;
  max?: number;
  /** When true, shows an animated indeterminate bar (ignores value). */
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
  const pct = indeterminate
    ? undefined
    : Math.min(100, Math.max(0, max === 0 ? 0 : (value / max) * 100));

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuetext={
        indeterminate ? undefined : `${Math.round(pct ?? 0)}%`
      }
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
          style={
            indeterminate || pct === undefined
              ? undefined
              : { width: `${pct}%` }
          }
        />
      </div>
    </div>
  );
}
