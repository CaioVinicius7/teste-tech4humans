import { ArrowUpDown } from "lucide-react";

import { MovieDetailsModal } from "@/view/components/MovieDetailsModal";

import { MovieCard } from "./components/MovieCard";
import { MovieCardsSkeleton } from "./components/MovieCardsSkeleton";
import { Pagination } from "./components/Pagination";
import { PaginationSkeleton } from "./components/PaginationSkeleton";
import { SearchInput } from "./components/SearchInput";
import { SortSelect } from "./components/SortSelect";
import { useHomeController } from "./useHomeController";

export function Home() {
  const { movies, meta, isFetching, hasSearch, handlePaginate } =
    useHomeController();

  return (
    <main className="mx-auto w-full max-w-[1420px] space-y-6 px-10 py-10">
      {!movies && !isFetching && (
        <span>Ops! Nenhum filme foi encontrado...</span>
      )}

      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <SearchInput />

        {!hasSearch && (
          <div className="flex items-center gap-2">
            <ArrowUpDown className="size-4 shrink-0" />

            <label htmlFor="sortSelect" className="text-sm sm:text-base">
              Ordenar por:
            </label>

            <SortSelect />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md-custom:grid-cols-cards">
        {isFetching && <MovieCardsSkeleton />}

        {!isFetching &&
          !!movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      {!!meta && !isFetching && (
        <Pagination
          page={meta.page}
          totalPages={meta.totalPages}
          totalCount={meta.totalResult}
          onPageChange={handlePaginate}
        />
      )}

      {isFetching && <PaginationSkeleton />}

      <MovieDetailsModal />
    </main>
  );
}
