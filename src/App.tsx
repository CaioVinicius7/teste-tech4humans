import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./view/pages/Home";

const queryClient = new QueryClient({});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
