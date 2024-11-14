import { ArrowUpDown } from "lucide-react";

import { Pagination } from "./components/Pagination";
import { useHomeController } from "./useHomeController";
import { MovieDetailsModal } from "@/view/components/MovieDetailsModal";
import { SortSelect } from "./components/SortSelect";
import { MovieCard } from "./components/MovieCard";
import { SearchInput } from "./components/SearchInput";
import { MovieCardsSkeleton } from "./components/MovieCardsSkeleton";
import { PaginationSkeleton } from "./components/PaginationSkeleton";
import { Header } from "@/view/components/Header";

export function Home() {
  const { movies, meta, isFetching, hasSearch, handlePaginate } =
    useHomeController();

  return (
    <>
      <Header />

      <main className="max-w-[1420px] px-10 w-full mx-auto py-10 space-y-6">
        {!movies && !isFetching && (
          <span>Ops! Nenhum filme foi encontrado...</span>
        )}

        <div className="flex gap-4 items-start md:items-center justify-between flex-col md:flex-row">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md-custom:grid-cols-cards gap-6 sm:gap-4">
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
    </>
  );
}
