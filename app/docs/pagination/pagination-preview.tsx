"use client";

import { useState } from "react";
import { Pagination } from "@/components/ui";

export function PaginationPreview() {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      currentPage={page}
      totalPages={12}
      onPageChange={setPage}
    />
  );
}
