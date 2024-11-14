import { httpClient } from "@/app/lib/axios";
import {
  movieReleaseDatesMapper,
  type RawMovieReleaseDates
} from "@/app/utils/mappers/movieReleaseDatesMapper";

interface GetMovieReleaseDatesRequest {
  movieId: number;
}

interface GetMovieReleaseDatesResponse {
  id: number;
  results: RawMovieReleaseDates[];
}

export async function getMovieReleaseDates({
  movieId
}: GetMovieReleaseDatesRequest) {
  const { data } = await httpClient.get<GetMovieReleaseDatesResponse>(
    `movie/${movieId}/release_dates`
  );

  return movieReleaseDatesMapper(data.results);
}
