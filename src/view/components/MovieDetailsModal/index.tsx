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

        <DialogDescription>{movie.overview}</DialogDescription>

        <Skeleton
          className={cn(
            "w-full aspect-video rounded-md block",
            !videoIsLoading && "hidden"
          )}
        />

        {movieVideoKey && !videoIsLoading && (
          <iframe
            src={`https://www.youtube.com/embed/${movieVideoKey}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-md"
            onLoad={handleIframeload}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
