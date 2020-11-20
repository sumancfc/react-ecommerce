import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import MobileCategoryMenu from "./common/MobileCategoryMenu";
import CartIcon from "./common/CartIcon";

const MobileHeader = () => {
  const openMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas__mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  return (
    <>
      <div className='mobile__header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <Logo className='mobile__header-logo' />
            </div>
            <div className='col-6'>
              <div className='mobile__header-right'>
                {/* Cart icon for Mobile View */}
                <CartIcon />
                {/* Mobile Nav Icon */}
                <div className='off__canvas-mobile'>
                  <Link
                    className='mobile__side-menu'
                    to='#'
                    onClick={openMobileMenu}
                  >
                    <i className='la la-navicon la-2x'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileCategoryMenu />
    </>
  );
};

export default MobileHeader;
