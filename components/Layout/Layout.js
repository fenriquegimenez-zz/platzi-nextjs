import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer.js/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
