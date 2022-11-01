import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Layout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <>
        <Header></Header>
      </>
      <>
        <Outlet></Outlet>
      </>
      <>
        <Footer></Footer>
      </>
    </div>
  );
};

export default Layout;
