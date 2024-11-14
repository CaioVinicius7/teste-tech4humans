import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { queryClient } from "./app/lib/tanstackQuery";
import { Home } from "./view/pages/Home";

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
