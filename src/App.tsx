import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Teste - Tech 4 Humans</h1>
    </QueryClientProvider>
  );
}
