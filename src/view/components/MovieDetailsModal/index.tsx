import { cn } from "@/app/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "../ui/dialog";
import { Skeleton } from "../ui/skeleton";
import { useMovieDetailsModalController } from "./useMovieDetailsModal";

export function MovieDetailsModal() {
  const {
    isOpen,
    movie,
    movieVideoKey,
    videoIsLoading,
    handleIframeload,
    closeMovieModal
  } = useMovieDetailsModalController();

  if (!movie) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeMovieModal}>
      <DialogContent>
        <DialogTitle>{movie.originalTitle}</DialogTitle>

        <DialogDescription>
          {movie.overview ||
            "Ops, sinopse indisponível! Não encontramos informações para este filme no momento."}
        </DialogDescription>

        <div className={cn("relative", !movieVideoKey && "hidden")}>
          <Skeleton className="block aspect-video w-full rounded-md" />

          {movieVideoKey && !videoIsLoading && (
            <iframe
              src={`https://www.youtube.com/embed/${movieVideoKey}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 aspect-video w-full rounded-md"
              onLoad={handleIframeload}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
