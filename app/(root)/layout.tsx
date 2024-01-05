import React from "react";
import Navbar from "../components/nav/Navbar";
import "../globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar visibleDefault={false} fixed={true} />
      {children}
    </>
  );
};

export default Layout;
