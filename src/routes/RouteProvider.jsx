import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";

const router = createBrowserRouter(routes);

const RouteProvider = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default RouteProvider;
