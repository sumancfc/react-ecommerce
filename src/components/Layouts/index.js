import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

const Layout = ({ children }) => {
  return (
    <div className='page__wrapper'>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
