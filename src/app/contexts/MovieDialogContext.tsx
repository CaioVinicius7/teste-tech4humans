import { createContext, type ReactNode, useState } from "react";
import type { Movie } from "../entities/Movie";

interface MovieModalContextValue {
  isOpen: boolean;
  movie: Movie | null;
  openMovieModal: (movie: Movie) => void;
  closeMovieModal: () => void;
}

export const MovieModalContext = createContext({} as MovieModalContextValue);

export function MovieModalContextProvider({
  children
}: {
  children: ReactNode;
}) {
  const [movie, setMovie] = useState<Movie | null>(null);

  function openMovieModal(movie: Movie) {
    setMovie(movie);
  }

  function closeMovieModal() {
    setMovie(null);
  }

  return (
    <MovieModalContext.Provider
      value={{
        isOpen: !!movie,
        movie,
        openMovieModal,
        closeMovieModal
      }}
    >
      {children}
    </MovieModalContext.Provider>
  );
}
