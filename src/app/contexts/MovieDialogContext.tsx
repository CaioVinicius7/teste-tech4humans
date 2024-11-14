import { createContext, type ReactNode, useState } from "react";
import type { Movie } from "../entities/Movie";
import { useQuery } from "@tanstack/react-query";
import { moviesService } from "../services/movies";

interface MovieModalContextValue {
  isOpen: boolean;
  movie: Movie | null;
  movieVideoKey: string | undefined;
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

  const { data } = useQuery({
    queryKey: ["movie-video", movie?.id],
    queryFn: () =>
      moviesService.getMovieVideo({
        movieId: movie!.id
      }),
    enabled: !!movie,
    staleTime: Infinity
  });

  function openMovieModal(movie: Movie) {
    setMovie(movie);
  }

  function closeMovieModal() {
    setMovie(null);
  }

  const firstYouTubeVideoKey = data?.results.find(
    (item) => item.site === "YouTube"
  )?.key;

  return (
    <MovieModalContext.Provider
      value={{
        isOpen: !!movie,
        movie,
        movieVideoKey: firstYouTubeVideoKey,
        openMovieModal,
        closeMovieModal
      }}
    >
      {children}
    </MovieModalContext.Provider>
  );
}
