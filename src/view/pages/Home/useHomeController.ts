import { useQuery } from "@tanstack/react-query";

import { moviesService } from "@/app/services/movies";

export function useHomeController() {
  const { data: popularMovies, isFetching } = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: moviesService.getPopularMovies
  });

  return {
    popularMovies,
    isFetching
  };
}
