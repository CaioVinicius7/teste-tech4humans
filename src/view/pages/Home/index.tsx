import { MovieCard } from "./components/movieCard";
import { useHomeController } from "./useHomeController";

export function Home() {
  const { movies, isFetching } = useHomeController();

  return (
    <main className="max-w-[1420] px-10 w-full mx-auto py-10">
      {!movies && <span>Ops! Nenhum filme foi encontrado...</span>}

      {isFetching && <span>Carregando...</span>}

      <div className="flex items-center justify-center flex-wrap gap-4">
        {!!movies &&
          movies.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </main>
  );
}
