import React from "react";

const MobileWidget = () => {
  return (
    <div className='offcanvas__widget-area'>
      <div className='offcanvas__contact-widget'>
        <div className='header__contact-info'>
          <ul className='header__contact-info-list'>
            <li>
              <i className='fa fa-phone'></i>{" "}
              <a href='tel://12452456012'>(1245) 2456 012 </a>
            </li>
            <li>
              <i className='fa fa-envelope'></i>{" "}
              <a href='mailto:info@yourdomain.com'>info@yourdomain.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='offcanvas__social-widget'>
        <a href='//twitter.com' title='Twitter'>
          <i className='fa fa-twitter'></i>
        </a>
        <a href='//instagram.com' title='Instagram'>
          <i className='fa fa-instagram'></i>
        </a>
        <a href='//facebook.com' title='Facebook'>
          <i className='fa fa-facebook'></i>
        </a>
        <a href='//pinterest.com' title='Pinterest'>
          <i className='fa fa-pinterest'></i>
        </a>
      </div>
    </div>
  );
};

export default MobileWidget;
