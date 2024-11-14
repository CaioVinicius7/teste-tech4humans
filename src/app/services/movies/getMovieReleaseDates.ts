import { httpClient } from "@/app/lib/axios";

interface GetMovieReleaseDatesRequest {
  movieId: number;
}

interface GetMovieReleaseDatesResponse {
  id: number;
  results: {
    iso_3166_1: string;
    release_dates: {
      certification: string;
      iso_639_1: string;
      note: string;
      release_date: string;
      type: number;
    }[];
  }[];
}

export async function getMovieReleaseDates({
  movieId
}: GetMovieReleaseDatesRequest) {
  const { data } = await httpClient.get<GetMovieReleaseDatesResponse>(
    `movie/${movieId}/release_dates`
  );

  const formattedResponse = data.results.map((result) => ({
    countryCode: result.iso_3166_1,
    releaseDates: result.release_dates.map((releaseDate) => ({
      certification: releaseDate.certification,
      languageCode: releaseDate.iso_639_1,
      note: releaseDate.note,
      releaseDate: releaseDate.release_date,
      type: releaseDate.type
    }))
  }));

  return formattedResponse;
}
