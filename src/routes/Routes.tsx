import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import React from "react";
import RootLayout from "../layouts/RootLayout";
import CommingSoon from "../molecules/CommingSoon";

const LoginPage = React.lazy(() => import("../features/LoginPage"));
const UsersLandingPage = React.lazy(
  () => import("../features/UsersLandingPage")
);
const NewBrands = React.lazy(() => import("../features/NewBrands"));

const RootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/usersLandingPage" element={<UsersLandingPage />} />
      <Route path="/newBrands" element={<NewBrands />} />
      <Route path="/myBrands" element={<CommingSoon brandType="My Brands" />} />
      <Route
        path="/trending"
        element={<CommingSoon brandType="Trending Brands" />}
      />
      <Route path="/pga" element={<CommingSoon brandType="PGA Brands" />} />
    </Route>
  )
);

export default RootRoutes;
