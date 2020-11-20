import React from "react";
import Logo from "../../logo";
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
            <div className='header__contact-center header__contact-center-mr'>
              <div className='header__contact'>
                <div className='header__contact-icon'>
                  <i className='la la-phone'></i>
                </div>
                <div className='header__contact-text'>
                  <span>Contact</span>
                  <p>+9845211785</p>
                </div>
              </div>
              <div className='header__search'>
                <form>
                  <div className='header__side__menu-search-form'>
                    <input
                      id='search'
                      className='input-text'
                      value=''
                      placeholder='Search Hear'
                      type='search'
                      onChange={(e) => e.target.value}
                    />
                    <button>
                      <i className='la la-search'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
