import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

import { moviesService } from "@/app/services/movies";

export function useHomeController() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = z.coerce.number().parse(searchParams.get("page") ?? 1);
  const search = searchParams.get("search");
  const sortBy = searchParams.get("sortBy");

  const hasSearch = !!search;
  const hasSort = !!sortBy;

  const { data: moviesData, isFetching: isFetchingMovies } = useQuery({
    queryKey: ["movies", page, sortBy],
    queryFn: () =>
      moviesService.getMovies({
        page,
        sortBy: hasSort ? sortBy : undefined
      }),
    enabled: !hasSearch
  });

  const { data: searchedMoviesData, isFetching: isFetchingMoviesSearched } =
    useQuery({
      queryKey: ["movies", page, search],
      queryFn: () =>
        moviesService.getMoviesByTitle({
          page,
          search: search!
        }),
      enabled: hasSearch
    });

  function handlePaginate(page: number) {
    setSearchParams((prevPrams) => {
      prevPrams.set("page", page.toString());

      return prevPrams;
    });
  }

  const hasMovies =
    (hasSearch ? searchedMoviesData?.movies : moviesData?.movies)?.length !== 0;

  return {
    movies: hasSearch ? searchedMoviesData?.movies : moviesData?.movies,
    meta: hasSearch ? searchedMoviesData?.meta : moviesData?.meta,
    isFetching: isFetchingMovies || isFetchingMoviesSearched,
    hasSearch,
    hasMovies,
    handlePaginate
  };
}
