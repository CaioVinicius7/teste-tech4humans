import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { type GENRES, GENRES_IDS } from "@/app/config/constants";
import { moviesService } from "@/app/services/movies";

export function useGetMovieRecommendationsPopover() {
  const [genre, setGenre] = useState<null | (typeof GENRES)[number]>(null);

  function handleSelectGenre(genre: (typeof GENRES)[number]) {
    setGenre(genre);
  }

  function handleClearSelectedGenre() {
    setGenre(null);
  }

  const { data, isFetching } = useQuery({
    queryKey: ["movie-recommendations", genre],
    queryFn: () =>
      moviesService.getMovieRecommendationsByGenre({
        genreId: GENRES_IDS[genre!]
      }),
    enabled: !!genre
  });

  return {
    genre,
    data,
    isFetching,
    handleSelectGenre,
    handleClearSelectedGenre
  };
}
