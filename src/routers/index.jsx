import { createBrowserRouter } from "react-router-dom";
import Navbar from "../layouts/RootLayout";
import Homepage from "../pages/Index";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
