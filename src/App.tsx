import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { MovieModalContextProvider } from "./app/contexts/MovieDialogContext";
import { queryClient } from "./app/lib/tanstackQuery";
import { router } from "./router";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieModalContextProvider>
        <RouterProvider router={router} />
      </MovieModalContextProvider>
    </QueryClientProvider>
  );
}
