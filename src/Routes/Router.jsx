import * as React from "react";
import * as ReactDOM from "react-dom/client";
import HomePage from "../pages/HomePage/HomePage";
import MyGallery from "../pages/Gallery/Gallery";
import Sandbox from "../sandbox/sandbox";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClothingPage from "../pages/Clothing/ClothingPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/previews/springsummer2023/",
    element: <MyGallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/previews/springsummer2023/jackets/faux-shearling-hooded-jacket",
    element: <ClothingPage />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
