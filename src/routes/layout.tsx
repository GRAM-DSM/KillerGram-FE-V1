import { Outlet } from "react-router-dom";
import { HeaderMenu } from "../components";

export const Layout = () => {
  return (
    <>
      <HeaderMenu />
      <Outlet />
    </>
  );
};
