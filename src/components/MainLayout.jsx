import React from "react";
import { Outlet } from "react-router";
import Menu from "./Menu";

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayout;
