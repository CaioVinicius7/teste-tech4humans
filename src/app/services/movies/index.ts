import { getMovieReleaseDates } from "./getMovieReleaseDates";
import { getMovies } from "./getMovies";
import { getMoviesByTitle } from "./getMoviesByTitle";
import { getPopularMovies } from "./getPopularMovies";

export const moviesService = {
  getPopularMovies,
  getMovies,
  getMovieReleaseDates,
  getMoviesByTitle
};
