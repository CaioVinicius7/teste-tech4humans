import { ArrowUpDown } from "lucide-react";

import { Pagination } from "./components/Pagination";
import { useHomeController } from "./useHomeController";
import { MovieDetailsModal } from "@/view/components/MovieDetailsModal";
import { SortSelect } from "./components/SortSelect";
import { MovieCard } from "./components/MovieCard";
import { SearchInput } from "./components/SearchInput";

export function Home() {
  const { movies, meta, isFetching, hasSearch, handlePaginate } =
    useHomeController();

  return (
    <main className="max-w-[1420px] px-10 w-full mx-auto py-10 space-y-6">
      {!movies && !isFetching && (
        <span>Ops! Nenhum filme foi encontrado...</span>
      )}

      {isFetching && <span>Carregando...</span>}

      <div className="flex items-center justify-between">
        <SearchInput />

        {!hasSearch && (
          <div className="flex items-center gap-2">
            <ArrowUpDown className="size-4" />

            <label htmlFor="sortSelect">Ordenar por:</label>

            <SortSelect />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md-custom:grid-cols-cards gap-6 sm:gap-4">
        {!!movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      {!!meta && (
        <Pagination
          page={meta.page}
          totalPages={meta.totalPages}
          totalCount={meta.totalResult}
          onPageChange={handlePaginate}
        />
      )}

      <MovieDetailsModal />
    </main>
  );
}
