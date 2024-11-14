import { httpClient } from "@/app/lib/axios";

interface GetMovieVideoRequest {
  movieId: number;
}

type GetMovieVideoResponse = {
  id: number;
  results: {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: string;
    type: string;
  }[];
};

export async function getMovieVideo({ movieId }: GetMovieVideoRequest) {
  const { data } = await httpClient.get<GetMovieVideoResponse>(
    `movie/${movieId}/videos`
  );

  return {
    results: data.results
  };
}
