import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

import { moviesService } from "@/app/services/movies";

export function useHomeController() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = z.coerce.number().parse(searchParams.get("page") ?? 1);

  const { data, isFetching } = useQuery({
    queryKey: ["movies", page],
    queryFn: () =>
      moviesService.getMovies({
        page
      })
  });

  function handlePaginate(page: number) {
    setSearchParams((prevPrams) => {
      prevPrams.set("page", page.toString());

      return prevPrams;
    });
  }

  return {
    movies: data?.movies,
    meta: data?.meta,
    isFetching,
    handlePaginate
  };
}
