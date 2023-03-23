import React from "react";
import { NavLink } from "react-router-dom";

type UsersLandingPageProps = {};

export const UsersLandingPage: React.FC<UsersLandingPageProps> = () => {
  return (
    <>
      <h1>BrandslandingPage</h1>
      <NavLink to="/loginPage">Log Out</NavLink>
    </>
  );
};

export default UsersLandingPage;
