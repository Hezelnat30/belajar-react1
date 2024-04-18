import { createBrowserRouter } from "react-router-dom";
import Navbar from "../layouts/RootLayout";
import Homepage from "../pages/index";
import About from "../pages/about";
import Blog from "../pages/blogs/index";

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
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
