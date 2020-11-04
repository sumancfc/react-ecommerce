import React from "react";
import { Link } from "react-router-dom";

const FooterNav = ({ title, footerMenu }) => {
  return (
    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
      <div className='footer__top-title'>{title}</div>
      <ul className='footer__top-items'>
        {footerMenu.map((nav, i) => (
          <li className='footer__top-item' key={i}>
            <Link to={nav.url} className='footer__top-link'>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
