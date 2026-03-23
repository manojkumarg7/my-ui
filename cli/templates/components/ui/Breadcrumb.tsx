import { cn } from "@/lib/utils";

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
                <a href={item.href} className="ui-breadcrumb__link">
                  {item.label}
                </a>
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
