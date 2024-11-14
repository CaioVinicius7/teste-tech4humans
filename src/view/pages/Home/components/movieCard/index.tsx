import type { Movie } from "@/app/entities/Movie";
import { cn } from "@/app/lib/utils";
import { ageGroupColorPick } from "@/app/utils/ageGroupColorPick";
import { dateFormatter } from "@/app/utils/dateFormatter";

import { useMovieCardController } from "./useMovieCardController";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { ageGroup } = useMovieCardController({
    movieId: movie.id
  });

  return (
    <div className="max-w-64 rounded-lg overflow-hidden relative cursor-pointer group">
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.posterPath}`}
        alt="Poster do filme"
        className="object-cover z-0"
      />

      <div className="py-4 group-hover:opacity-100 z-10 bg-zinc-200 px-2 absolute inset-0 opacity-0 transition">
        <strong className="text-lg leading-3">{movie.title}</strong>

        <div className="flex items-center justify-between">
          <span>{dateFormatter(movie.releaseDate)}</span>

          {ageGroup !== "no-certification" && (
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

        <p className="leading-tight mt-8 line-clamp-[12]">{movie.overview}</p>
      </div>
    </div>
  );
}
