import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__layout'>
        <div className='container'>
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
