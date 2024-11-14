import type { Movie } from "@/app/entities/Movie";
import { cn } from "@/app/lib/utils";
import { ageGroupColorPick } from "@/app/utils/ageGroupColorPick";
import defaultPoster from "@/assets/default-poster.png";
import { dateFormatter } from "@/app/utils/dateFormatter";

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
      className="rounded-lg overflow-hidden relative cursor-pointer group"
    >
      <img
        src={
          !!movie.posterPath
            ? `https://image.tmdb.org/t/p/w500/${movie.posterPath}`
            : defaultPoster
        }
        alt={`Poster do filme ${movie.title}`}
        className="object-cover aspect-[2/3] w-full rounded-lg"
      />

      <div className="py-2 sm:py-4 group-hover:opacity-100 sm:bg-zinc-200 px-2 sm:absolute sm:inset-0 sm:opacity-0 transition">
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
                "size-6 flex items-center justify-center rounded-sm",
                ageGroupColorPick[ageGroup]
              )}
            >
              <span className="text-sm font-bold text-white">{ageGroup}</span>
            </div>
          )}
        </div>

        <p className="leading-tight mt-8 line-clamp-[12] hidden sm:block">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
