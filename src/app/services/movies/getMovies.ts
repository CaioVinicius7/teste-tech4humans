import { httpClient } from "@/app/lib/axios";
import { MovieMapper, type RawMovie } from "@/app/utils/mappers/movieMapper";

interface GetMoviesRequest {
  page?: number;
  sortBy?: string;
}

interface GetMoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: RawMovie[];
}

export async function getMovies({
  page = 1,
  sortBy = "primary_release_date.desc"
}: GetMoviesRequest) {
  const { data } = await httpClient.get<GetMoviesResponse>("/discover/movie", {
    params: {
      page,
      sort_by: sortBy
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
