import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
