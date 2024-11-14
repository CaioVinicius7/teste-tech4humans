import { MovieCard } from "./components/movieCard";
import { Pagination } from "./components/Pagination";
import { useHomeController } from "./useHomeController";

export function Home() {
  const { movies, isFetching, handlePaginate } = useHomeController();

  return (
    <main className="max-w-[1420px] px-10 w-full mx-auto py-10">
      {!movies && <span>Ops! Nenhum filme foi encontrado...</span>}

      {isFetching && <span>Carregando...</span>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md-custom:grid-cols-cards gap-4">
        {!!movies &&
          movies.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>

      {!!movies && (
        <Pagination
          page={movies.meta.page}
          totalPages={movies.meta.totalPages}
          totalCount={movies.meta.totalResult}
          onPageChange={handlePaginate}
        />
      )}
    </main>
  );
}
