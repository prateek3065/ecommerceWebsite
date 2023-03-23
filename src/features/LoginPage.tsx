import React from "react";
import { NavLink } from "react-router-dom";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <>
      <NavLink to="/usersLandingPage">Log In</NavLink>
    </>
  );
};

export default LoginPage;
