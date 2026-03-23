import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("ui-container", className)} {...props} />;
}
