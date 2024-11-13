import { useHomeController } from "./useHomeController";

export function Home() {
  const { popularMovies, isFetching } = useHomeController();

  return (
    <main>
      <h2>Listagem de filmes populares:</h2>

      {!popularMovies && <span>Ops! Nenhum filme foi encontrado...</span>}

      {isFetching && <span>Carregando...</span>}

      <div className="flex items-center flex-wrap gap-4">
        {!!popularMovies &&
          popularMovies.results.map((movie) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt="Capa do file"
              />

              <strong>{movie.title}</strong>

              <p>{movie.overview}</p>
            </div>
          ))}
      </div>
    </main>
  );
}
