import React from "react";
import Footer from "../sections/Footer/Footer";
import Header from "../sections/Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <>{props.children}</>
      <Footer />
    </>
  );
};

export default Layout;
