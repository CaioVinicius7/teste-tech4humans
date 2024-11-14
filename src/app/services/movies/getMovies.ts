import { httpClient } from "@/app/lib/axios";
import { MovieMapper, type RawMovie } from "@/app/utils/mappers";

interface GetMoviesRequest {
  page?: number;
}

interface GetMoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: RawMovie[];
}

export async function getMovies({ page = 1 }: GetMoviesRequest) {
  const { data } = await httpClient.get<GetMoviesResponse>("/discover/movie", {
    params: {
      page
    }
  });

  return {
    movies: data.results.map(MovieMapper),
    meta: {
      page: data.page,
      totalPages: data.total_pages,
      totalResult: data.total_results
    }
  };
}
