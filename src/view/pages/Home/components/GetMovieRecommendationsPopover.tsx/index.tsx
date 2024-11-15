import { CircleHelp, LoaderCircle } from "lucide-react";

import { GENRES } from "@/app/config/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/view/components/ui/popover";

import { useGetMovieRecommendationsPopover } from "./useGetMovieRecommendationsPopover";

export function GetMovieRecommendationsPopover() {
  const {
    genre,
    data,
    isFetching,
    handleSelectGenre,
    handleClearSelectedGenre
  } = useGetMovieRecommendationsPopover();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="fixed bottom-6 right-6 rounded-full bg-[#032541] p-1.5 transition hover:bg-[#507ea3]">
          <CircleHelp className="size-8 text-zinc-100" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="mb-2 mr-4 space-y-3">
        {!genre && (
          <>
            <span>Qual gênero você gostaria de receber uma sugestão?</span>

            <div className="flex flex-wrap items-center gap-2">
              {GENRES.map((genre) => (
                <div
                  key={genre}
                  role="button"
                  onClick={() => handleSelectGenre(genre)}
                  className="cursor-pointer rounded-sm border px-2 py-1 text-xs transition hover:bg-gray-200"
                >
                  {genre}
                </div>
              ))}
            </div>
          </>
        )}

        {!!genre && (
          <div className="space-y-3">
            <span className="text-sm leading-tight">
              Aqui vai alguma sugestões de filmes do gênero <b>{genre}</b>
            </span>

            {isFetching && (
              <div className="flex h-44 items-center justify-center">
                <LoaderCircle className="size-8 animate-spin text-zinc-400" />
              </div>
            )}

            {!isFetching && (
              <ul className="space-y-4 text-sm">
                {data!.movies.slice(0, 5).map((movie) => (
                  <li key={movie.id}> - {movie.title}</li>
                ))}
              </ul>
            )}

            <button
              onClick={handleClearSelectedGenre}
              className="px mt-4 flex w-full items-start justify-center gap-2 rounded bg-zinc-200 px-1 py-2 text-xs transition hover:bg-zinc-100"
            >
              Ver mais sugestões de filmes
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
