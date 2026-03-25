"use client";

import { cn } from "@/lib/utils";

export type PaginationProps = {
  /** 1-based current page */
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  previousLabel?: string;
  nextLabel?: string;
};

function getPaginationItems(
  current: number,
  total: number,
): Array<number | "ellipsis"> {
  if (total < 1) return [];
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, "ellipsis", total];
  }
  if (current >= total - 3) {
    return [
      1,
      "ellipsis",
      total - 4,
      total - 3,
      total - 2,
      total - 1,
      total,
    ];
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
          <button
            type="button"
            className="ui-pagination__btn"
            disabled={!canPrev}
            onClick={() => canPrev && onPageChange(currentPage - 1)}
            aria-label={previousLabel}
          >
            {previousLabel}
          </button>
        </li>
        {items.map((item, i) => (
          <li key={`${item}-${i}`} className="ui-pagination__item">
            {item === "ellipsis" ? (
              <span className="ui-pagination__ellipsis" aria-hidden>
                …
              </span>
            ) : (
              <button
                type="button"
                className={cn(
                  "ui-pagination__page",
                  item === currentPage && "ui-pagination__page--active",
                )}
                onClick={() => onPageChange(item)}
                aria-label={`Page ${item}`}
                aria-current={item === currentPage ? "page" : undefined}
              >
                {item}
              </button>
            )}
          </li>
        ))}
        <li className="ui-pagination__item">
          <button
            type="button"
            className="ui-pagination__btn"
            disabled={!canNext}
            onClick={() => canNext && onPageChange(currentPage + 1)}
            aria-label={nextLabel}
          >
            {nextLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
}
