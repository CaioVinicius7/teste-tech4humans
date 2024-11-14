import type { Movie } from "@/app/entities/Movie";
import { cn } from "@/app/lib/utils";
import { ageGroupColorPick } from "@/app/utils/ageGroupColorPick";
import { dateFormatter } from "@/app/utils/dateFormatter";
import defaultPoster from "@/assets/default-poster.png";

import { useMovieCardController } from "./useMovieCardController";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { ageGroup, hasAgeGroup, openMovieModal } = useMovieCardController({
    movieId: movie.id
  });

  return (
    <div
      onClick={() => openMovieModal(movie)}
      className="group relative cursor-pointer overflow-hidden rounded-lg"
    >
      <img
        src={
          movie.posterPath
            ? `https://image.tmdb.org/t/p/w500/${movie.posterPath}`
            : defaultPoster
        }
        alt={`Poster do filme ${movie.title}`}
        className="aspect-[2/3] w-full rounded-lg object-cover"
      />

      <div className="px-2 py-2 transition group-hover:opacity-100 sm:absolute sm:inset-0 sm:bg-zinc-200 sm:py-4 sm:opacity-0">
        <strong className="text-lg leading-3">{movie.title}</strong>

        <div className="flex items-center justify-between">
          {movie.releaseDate ? (
            <span>{dateFormatter(movie.releaseDate)}</span>
          ) : (
            <div />
          )}

          {hasAgeGroup && (
            <div
              className={cn(
                "flex size-6 items-center justify-center rounded-sm",
                ageGroupColorPick[ageGroup]
              )}
            >
              <span className="text-sm font-bold text-white">{ageGroup}</span>
            </div>
          )}
        </div>

        <p className="mt-8 line-clamp-[12] hidden leading-tight sm:block">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
