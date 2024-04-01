import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import useGetLoginImg from "../utils/hooks/useGetLoginImg";
import BrowsePage from "../components/BrowsePage";

const AppRoute = () => {
  useGetLoginImg();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default AppRoute;
