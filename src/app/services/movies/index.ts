import { getMovieReleaseDates } from "./getMovieReleaseDates";
import { getMovies } from "./getMovies";
import { getPopularMovies } from "./getPopularMovies";

export const moviesService = {
  getPopularMovies,
  getMovies,
  getMovieReleaseDates
};
