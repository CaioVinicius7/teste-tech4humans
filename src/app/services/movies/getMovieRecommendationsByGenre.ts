import { httpClient } from "@/app/lib/axios";
import { MovieMapper, type RawMovie } from "@/app/utils/mappers/movieMapper";

interface GetMovieRecommendationsByGenreRequest {
  genreId: number;
}

interface GetMovieRecommendationsByGenreResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: RawMovie[];
}

export async function getMovieRecommendationsByGenre({
  genreId
}: GetMovieRecommendationsByGenreRequest) {
  const { data } = await httpClient.get<GetMovieRecommendationsByGenreResponse>(
    "/discover/movie",
    {
      params: {
        with_genres: genreId,
        page: Math.floor(Math.random() * 500) + 1
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
