import { useContext } from "react";

import { MovieModalContext } from "../contexts/MovieDialogContext";

export function useMovieDialog() {
  const context = useContext(MovieModalContext);

  return context;
}
