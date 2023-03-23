import React from "react";
import Header from "../molecules/Header";
import { Outlet } from "react-router-dom";

type RootLayoutProps = {};

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
