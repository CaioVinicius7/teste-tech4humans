import { cn } from "@/app/lib/utils";
import { MovieDetailsModal } from "@/view/components/MovieDetailsModal";

import { EmptyView } from "./components/EmptyView";
import { GetMovieRecommendationsPopover } from "./components/GetMovieRecommendationsPopover.tsx";
import { MovieCard } from "./components/MovieCard";
import { MovieCardsSkeleton } from "./components/MovieCardsSkeleton";
import { Pagination } from "./components/Pagination";
import { PaginationSkeleton } from "./components/PaginationSkeleton";
import { SearchInput } from "./components/SearchInput";
import { SortSelect } from "./components/SortSelect";
import { useHomeController } from "./useHomeController";

export function Home() {
  const { movies, meta, isFetching, hasSearch, hasMovies, handlePaginate } =
    useHomeController();

  return (
    <main className="mx-auto w-full max-w-[1420px] space-y-6 px-10 py-10">
      {!hasMovies && !isFetching && <EmptyView />}

      <div
        className={cn(
          "flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",
          !hasMovies && "justify-center"
        )}
      >
        <SearchInput />

        {!hasSearch && <SortSelect />}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md-custom:grid-cols-cards">
        {isFetching && <MovieCardsSkeleton />}

        {hasMovies &&
          !isFetching &&
          movies!.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      {isFetching && <PaginationSkeleton />}

      {hasMovies && !!meta && !isFetching && (
        <Pagination
          page={meta.page}
          totalPages={meta.totalPages}
          totalCount={meta.totalResult}
          onPageChange={handlePaginate}
        />
      )}

      <MovieDetailsModal />

      <GetMovieRecommendationsPopover />
    </main>
  );
}
