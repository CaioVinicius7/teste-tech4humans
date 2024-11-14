import { Search } from "lucide-react";

import { Button } from "@/view/components/ui/button";
import { Input } from "@/view/components/ui/input";

import { MovieCard } from "./components/movieCard";
import { Pagination } from "./components/Pagination";
import { useHomeController } from "./useHomeController";
import { MovieDetailsModal } from "@/view/components/MovieDetailsModal";

export function Home() {
  const { movies, meta, isFetching, handlePaginate, handleSearch } =
    useHomeController();

  return (
    <main className="max-w-[1420px] px-10 w-full mx-auto py-10 space-y-6">
      {!movies && !isFetching && (
        <span>Ops! Nenhum filme foi encontrado...</span>
      )}

      {isFetching && <span>Carregando...</span>}

      <form onSubmit={handleSearch} className="flex gap-2 max-w-80">
        <Input
          name="search"
          placeholder="Qual filme Deseja pesquisar?"
          autoComplete="off"
        />

        <Button>
          <Search className="size-4" />
        </Button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md-custom:grid-cols-cards gap-4">
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
