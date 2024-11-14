import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/view/layouts/AppLayout";
import { NotFound } from "@/view/pages/404";
import { Error } from "@/view/pages/Error";
import { Home } from "@/view/pages/Home";

export const router = createBrowserRouter([
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
