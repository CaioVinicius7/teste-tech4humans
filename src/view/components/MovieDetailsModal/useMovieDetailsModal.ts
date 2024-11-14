import { useMovieDialog } from "@/app/hooks/useMovieDialog";
import { useState } from "react";

export function useMovieDetailsModalController() {
  const { isOpen, movie, movieVideoKey, closeMovieModal } = useMovieDialog();
  const [videoIsLoading, setVideoIsLoading] = useState(() => !!movieVideoKey);

  function handleIframeload() {
    setVideoIsLoading(false);
  }

  return {
    isOpen,
    movie,
    movieVideoKey,
    videoIsLoading,
    handleIframeload,
    closeMovieModal
  };
}
