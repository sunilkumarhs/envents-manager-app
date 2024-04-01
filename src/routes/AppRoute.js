import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useGetLoginImg from "../utils/hooks/useGetLoginImg";
import BrowsePage from "../components/BrowsePage";
import useGetLoggedUser from "../utils/hooks/useGetLoggedUser";

const LoginPage = lazy(() => import("../auth/LoginPage"));

const AppRoute = () => {
  useGetLoginImg();
  useGetLoggedUser();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <BrowsePage />,
    },
    {
      path: "/login",
      element: (
        <Suspense>
          <LoginPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default AppRoute;
