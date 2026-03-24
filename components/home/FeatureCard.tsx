import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

/**
 * Feature card with title, description, and optional icon.
 */
export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div className={cn("home-feature-card", className)}>
      {icon ? <div className="home-feature-card__icon">{icon}</div> : null}
      <h3 className="home-feature-card__title">{title}</h3>
      <p className="home-feature-card__description">{description}</p>
    </div>
  );
}
