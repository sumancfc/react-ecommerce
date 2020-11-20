import React from "react";
import Logo from "../../logo";
import Search from "../../search";
import CartIcon from "./CartIcon";

const MiddleHeader = () => {
  return (
    <div className='header__area-center border__top pt-30 pb-30'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xl-2 col-lg-2'>
            <Logo className='logo' />
          </div>
          <div className='col-xl-9 col-lg-8'>
            <Search className='header__search-wrap' />
          </div>
          <div className='col-xl-1 col-lg-2'>
            {/* Cart icon for Desktop View */}
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
