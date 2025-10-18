import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // element: <h1>Home Layout</h1>,
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error-404</h2>,
  },
]);

export default router;
