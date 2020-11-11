import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import MobileCategoryMenu from "./common/MobileCategoryMenu";

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
                <div className='header__cart common'>
                  <button className='header__cart-active'>
                    <i className='la la-shopping-cart'></i>
                    <span className='cart__items-count'>2 Items</span>
                  </button>
                  <div className='shopping__cart-content'>
                    <div className='shopping__cart-title'>
                      <h4>Your Cart</h4>
                      <Link className='shopping__cart-close' to='#'>
                        <i className='la la-close'></i>
                      </Link>
                    </div>
                    <ul>
                      <li className='shopping__cart-single'>
                        <div className='shopping__cart-img'>
                          <Link to='#'>
                            <img alt='' src='assets/images/cart/cart-1.jpg' />
                          </Link>
                          <div className='shopping__cart-item-close'>
                            <Link to='#'>
                              <i className='sli sli-close'></i>
                            </Link>
                          </div>
                        </div>
                        <div className='shopping__cart-s-title'>
                          <h4>
                            <Link to='#'>Golden Easy Spot Chair.</Link>
                          </h4>
                          <span>$99.00</span>
                        </div>
                        <div className='shopping__cart-s-delete'>
                          <Link to='#'>
                            <i className='la la-trash'></i>
                          </Link>
                        </div>
                      </li>
                      <li className='shopping__cart-single'>
                        <div className='shopping__cart-img'>
                          <Link to='#'>
                            <img alt='' src='assets/images/cart/cart-2.jpg' />
                          </Link>
                          <div className='shopping__cart-item-close'>
                            <Link to='#'>
                              <i className='sli sli-close'></i>
                            </Link>
                          </div>
                        </div>
                        <div className='shopping__cart-s-title'>
                          <h4>
                            <Link to='#'>Golden Easy Spot Chair.</Link>
                          </h4>
                          <span>$99.00</span>
                        </div>
                        <div className='shopping__cart-s-delete'>
                          <Link to='#'>
                            <i className='la la-trash'></i>
                          </Link>
                        </div>
                      </li>
                      <li className='shopping__cart-single'>
                        <div className='shopping__cart-img'>
                          <Link to='#'>
                            <img alt='' src='assets/images/cart/cart-3.jpg' />
                          </Link>
                          <div className='shopping__cart-item-close'>
                            <Link to='#'>
                              <i className='sli sli-close'></i>
                            </Link>
                          </div>
                        </div>
                        <div className='shopping__cart-s-title'>
                          <h4>
                            <Link to='#'>Golden Easy Spot Chair.</Link>
                          </h4>
                          <span>$99.00</span>
                        </div>
                        <div className='shopping__cart-s-delete'>
                          <Link to='#'>
                            <i className='la la-trash'></i>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <div className='shopping__cart-bottom'>
                      <div className='shopping__cart-total'>
                        <h4>
                          Subtotal
                          <span className='shopping__cart-price'>$290.00</span>
                        </h4>
                      </div>
                      <div className='shopping__cart-btn btn-hover default-btn text-center'>
                        <Link className='black' to='/checkout'>
                          Continue to Chackout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
