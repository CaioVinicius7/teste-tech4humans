import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "../ui/dialog";
import { useMovieDialog } from "@/app/hooks/useMovieDialog";

export function MovieDetailsModal() {
  const { isOpen, movie, closeMovieModal } = useMovieDialog();

  if (!movie) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeMovieModal}>
      <DialogContent>
        <DialogTitle>{movie.originalTitle}</DialogTitle>

        <DialogDescription>{movie.overview}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
