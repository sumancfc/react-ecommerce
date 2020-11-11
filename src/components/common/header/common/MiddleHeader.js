import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo";

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
            <div className='header__cart header__cart-1 header__cart-white'>
              <button className='header__cart-active'>
                <i className='la la-shopping-cart'></i> <br />
                <span className='header__cart-price'>$400.00</span>
                <span className='cart__items-count'>01</span>
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
                </ul>
                <div className='shopping__cart-bottom'>
                  <div className='shopping__cart-total'>
                    <h4>
                      Subtotal
                      <span className='shopping__cart-price'>$290.00</span>
                    </h4>
                  </div>
                  <div className='shopping__cart-btn btn-hover default-btn text-center'>
                    <Link className='black' to='checkout.html'>
                      Continue to Chackout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
