import { useHomeController } from "./useHomeController";

export function Home() {
  const { movies, isFetching } = useHomeController();

  return (
    <main>
      <h2>Listagem de filmes populares:</h2>

      {!movies && <span>Ops! Nenhum filme foi encontrado...</span>}

      {isFetching && <span>Carregando...</span>}

      <div className="flex items-center flex-wrap gap-4">
        {!!movies &&
          movies.movies.map((movie) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w154/${movie.posterPath}`}
                alt="Capa do filme"
              />

              <strong>{movie.title}</strong>

              <p>{movie.overview}</p>
            </div>
          ))}
      </div>
    </main>
  );
}
