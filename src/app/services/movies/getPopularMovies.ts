import { httpClient } from "@/app/lib/axios";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface GetPopularMoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export async function getPopularMovies() {
  const { data } = await httpClient.get<GetPopularMoviesResponse>(
    "/movie/popular?language=pt-BR&page=1"
  );

  return data;
}
