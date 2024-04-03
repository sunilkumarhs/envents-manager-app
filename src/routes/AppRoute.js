import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useGetLoginImg from "../utils/hooks/useGetLoginImg";
import BrowsePage from "../components/BrowsePage";
import useGetLoggedUser from "../utils/hooks/useGetLoggedUser";
import useGetEventsDetails from "../utils/hooks/useGetEventsDetails";
import useGetRecomendedEvents from "../utils/hooks/useGetRecomendedEvents";
import ShimmerUI from "../utils/ShimmerUI";

const LoginPage = lazy(() => import("../auth/LoginPage"));

const AppRoute = () => {
  useGetEventsDetails();
  useGetRecomendedEvents();
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
        <Suspense fallback={<ShimmerUI />}>
          <LoginPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default AppRoute;
