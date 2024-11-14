import { httpClient } from "@/app/lib/axios";
import { MovieMapper, type RawMovie } from "@/app/utils/mappers/movieMapper";

interface GetMoviesByTitleRequest {
  search: string;
  page?: number;
}

interface GetMoviesByTitleResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: RawMovie[];
}

export async function getMoviesByTitle({
  search,
  page = 1
}: GetMoviesByTitleRequest) {
  const { data } = await httpClient.get<GetMoviesByTitleResponse>(
    "/search/movie",
    {
      params: {
        query: search,
        page
      }
    }
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
