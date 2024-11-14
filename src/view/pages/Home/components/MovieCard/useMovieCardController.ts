import { useQuery } from "@tanstack/react-query";

import { useMovieDialog } from "@/app/hooks/useMovieDialog";
import { moviesService } from "@/app/services/movies";

interface useMovieCardControllerParams {
  movieId: number;
}

export function useMovieCardController({
  movieId
}: useMovieCardControllerParams) {
  const { openMovieModal } = useMovieDialog();

  const { data: movieReleaseDates } = useQuery({
    queryKey: ["movie-release-dates", movieId],
    queryFn: async () => moviesService.getMovieReleaseDates({ movieId })
  });

  const brazilianReleaseDates = movieReleaseDates?.find(
    (releaseDate) => releaseDate.countryCode === "BR"
  );

  const ageGroup =
    brazilianReleaseDates?.releaseDates[0]?.certification ?? "no-certification";

  const hasAgeGroup = ageGroup !== "no-certification";

  return {
    ageGroup,
    hasAgeGroup,
    openMovieModal
  };
}
