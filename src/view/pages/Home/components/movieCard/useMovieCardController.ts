import { useQuery } from "@tanstack/react-query";

import { moviesService } from "@/app/services/movies";

interface useMovieCardControllerParams {
  movieId: number;
}

export function useMovieCardController({
  movieId
}: useMovieCardControllerParams) {
  const { data: movieReleaseDates } = useQuery({
    queryKey: ["movie-release-dates", movieId],
    queryFn: async () => moviesService.getMovieReleaseDates({ movieId })
  });

  console.log(movieReleaseDates);

  const brazilianReleaseDates = movieReleaseDates?.find(
    (releaseDate) => releaseDate.countryCode === "BR"
  );

  console.log(brazilianReleaseDates);

  const ageGroup =
    brazilianReleaseDates?.releaseDates[0]?.certification ?? "no-certification";

  return {
    ageGroup
  };
}
