import React from "react";
import { Link } from "react-router-dom";

const MobileWidget = () => {
  return (
    <div className='offcanvas__widget-area'>
      <div className='offcanvas__contact-widget'>
        <div className='header__contact-info'>
          <ul className='header__contact-info-list'>
            <li>
              <i className='fa fa-phone'></i>
              <Link to='tel:12452456012'>(1245) 2456 012 </Link>
            </li>
            <li>
              <i className='fa fa-envelope'></i>
              <Link to='mailto:info@yourdomain.com'>info@yourdomain.com</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='offcanvas__social-widget'>
        <Link to='www.twitter.com' title='Twitter'>
          <i className='fa fa-twitter'></i>
        </Link>
        <Link to='www.instagram.com' title='Instagram'>
          <i className='fa fa-instagram'></i>
        </Link>
        <Link to='www.facebook.com' title='Facebook'>
          <i className='fa fa-facebook'></i>
        </Link>
        <Link to='www.pinterest.com' title='Pinterest'>
          <i className='fa fa-pinterest'></i>
        </Link>
      </div>
    </div>
  );
};

export default MobileWidget;
