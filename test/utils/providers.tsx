import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { MemoryRouter } from "react-router-dom";

import { MovieModalContextProvider } from "@/app/contexts/MovieDialogContext";

const queryClient = new QueryClient();

export function TestProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieModalContextProvider>
        <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
      </MovieModalContextProvider>
    </QueryClientProvider>
  );
}
