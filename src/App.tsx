import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./view/pages/Home";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
