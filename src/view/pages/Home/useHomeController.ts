import { useQuery } from "@tanstack/react-query";

import { moviesService } from "@/app/services/movies";

export function useHomeController() {
  const { data: movies, isFetching } = useQuery({
    queryKey: ["movies"],
    queryFn: () => moviesService.getMovies({})
  });

  return {
    movies,
    isFetching
  };
}
