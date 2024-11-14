import { httpClient } from "@/app/lib/axios";
import { MovieMapper, type RawMovie } from "@/app/utils/mappers";

interface GetPopularMoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: RawMovie[];
}

export async function getPopularMovies() {
  const { data } = await httpClient.get<GetPopularMoviesResponse>(
    "/movie/popular?page=1"
  );

  return {
    movies: data.results.map(MovieMapper),
    meta: {
      page: data.page,
      totalPages: data.total_pages,
      totalResult: data.total_results
    }
  };
}
