import type { Movie } from "../../entities/Movie";

export interface RawMovie {
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

export function MovieMapper(rawMovie: RawMovie): Movie {
  return {
    ...rawMovie,
    backdropPath: rawMovie.backdrop_path,
    originalLanguage: rawMovie.original_language,
    originalTitle: rawMovie.original_title,
    genreIds: rawMovie.genre_ids,
    posterPath: rawMovie.poster_path,
    releaseDate: rawMovie.release_date,
    voteAverage: rawMovie.vote_average,
    voteCount: rawMovie.vote_count
  };
}
