import { createBrowserRouter } from "react-router-dom";
import Navbar from "../layouts/RootLayout";
import Homepage from "../pages/index";
import About from "../pages/about";
import Blog from "../pages/blogs/index";
import ExternalPost from "../pages/blogs/_id";
import ErrorPage from "../components/ErrorPage";
import { posts, postById } from "../apis/loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
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
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <ExternalPost />,
        loader: postById,
      },
    ],
  },
]);
