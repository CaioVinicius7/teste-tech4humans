import { ChevronsLeft, ChevronsRight } from "lucide-react";

import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/view/components/ui/pagination";

interface PaginationProps {
  page: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  page,
  totalPages,
  totalCount,
  onPageChange
}: PaginationProps) {
  const isExceedingMaxPages = totalPages > 500;
  const isFirstPage = page === 1;
  const isLastPage = isExceedingMaxPages ? page === 500 : page === totalPages;

  return (
    <div className="flex items-center justify-between px-4">
      <span className="text-sm text-muted-foreground">
        Total de {isExceedingMaxPages ? 10_000 : totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <span className="hidden text-sm font-medium md:block whitespace-nowrap">
          Página {page} de {isExceedingMaxPages ? 500 : totalPages}
        </span>

        <PaginationContainer>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                onClick={() => onPageChange(1)}
                disabled={isFirstPage}
              >
                <ChevronsLeft className="size-4" />
                <span className="sr-only">Primeira página</span>
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(page - 1)}
                disabled={isFirstPage}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                onClick={() => onPageChange(page + 1)}
                disabled={isLastPage}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                onClick={() =>
                  onPageChange(isExceedingMaxPages ? 500 : totalPages)
                }
                disabled={isLastPage}
              >
                <ChevronsRight className="size-4" />
                <span className="sr-only">Ultima página</span>
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </PaginationContainer>
      </div>
    </div>
  );
}
