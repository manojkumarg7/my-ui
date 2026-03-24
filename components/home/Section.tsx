import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Optional section id for anchors */
  id?: string;
};

/**
 * Consistent section wrapper with responsive padding and max-width.
 */
export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("home-section", className)} {...props}>
      <div className="home-section__inner">{children}</div>
    </section>
  );
}
