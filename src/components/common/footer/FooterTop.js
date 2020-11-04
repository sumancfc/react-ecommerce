import React from "react";
import FooterNav from "./FooterNav";
import { FooterOne, FooterTwo, FooterThree } from "./menu";

const FooterTop = () => {
  return (
    <div className='footer__top'>
      <div className='row d-flex align-items-center'>
        <FooterNav title='Quick Links' footerMenu={FooterOne} />
        <FooterNav title='Company' footerMenu={FooterTwo} />
        <FooterNav title='Business' footerMenu={FooterThree} />
      </div>
    </div>
  );
};

export default FooterTop;
