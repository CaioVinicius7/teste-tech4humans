import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MovieModalContextProvider } from "./app/contexts/MovieDialogContext";
import { queryClient } from "./app/lib/tanstackQuery";
import { NotFound } from "./view/pages/404";
import { Error } from "./view/pages/Error";
import { Home } from "./view/pages/Home";
import { AppLayout } from "./view/layouts/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieModalContextProvider>
        <RouterProvider router={router} />
      </MovieModalContextProvider>
    </QueryClientProvider>
  );
}
