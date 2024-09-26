import React from "react";
import Navbar from "./top-navbar/navbar";
import Footer from "./footer/footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
