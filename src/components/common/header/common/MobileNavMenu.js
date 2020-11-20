import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className='offcanvas__navigation' id='offcanvas__navigation'>
      <ul>
        <li className='menu__item-has--children'>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>
        <li className='menu__item-has--children'>
          <Link to={process.env.PUBLIC_URL + "/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
