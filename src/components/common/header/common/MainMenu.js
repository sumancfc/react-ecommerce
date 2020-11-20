import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className='col-md-8 d-flex justify-content-end'>
      <div className='header__main-menu header__menu-common header__menu-lh header__menu-ma header__menu-font header__menu-font-white header__menu-res'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
            <li className='menu__angle'>
              <Link to='/shop'>Shop</Link>
              <ul className='header__mega-menu header__mega-menu-nmg'>
                <li>
                  <Link className='mega__menu-title' to='#'>
                    Men's
                  </Link>
                  <ul>
                    <li>
                      <Link to='/shop'>Jens</Link>
                    </li>
                    <li>
                      <Link to='/shop'>Pants</Link>
                    </li>
                    <li>
                      <Link to='/'>Shoes</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className='mega__menu-title' to='#'>
                    Men's
                  </Link>
                  <ul>
                    <li>
                      <Link to='/shop'>Jens</Link>
                    </li>
                    <li>
                      <Link to='/shop'>Pants</Link>
                    </li>
                    <li>
                      <Link to='/shop'>Shoes</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className='mega__menu-title' to='#'>
                    Men's
                  </Link>
                  <ul>
                    <li>
                      <Link to='/shop'>Jens</Link>
                    </li>
                    <li>
                      <Link to='/shop'>Pants</Link>
                    </li>
                    <li>
                      <Link to='/shop'>Shoes</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className='mega__menu-title' to='#'>
                    Men's
                  </Link>
                  <ul>
                    <li>
                      <Link to='/shop'>Jens</Link>
                    </li>
                    <li>
                      <Link to='/shop'>Pants</Link>
                    </li>
                    <li>
                      <Link to='/shop'>Shoes</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/shop'>Mens</Link>
            </li>
            <li>
              <Link to='/shop'>Electronics</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainMenu;
