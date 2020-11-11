import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  return (
    <div className='col-lg-4'>
      <div className='header__menu-category'>
        <h3 className='header__menu-category-show'>
          <Link to='#'>
            <img
              className='category__menu-non-stick'
              src='assets/images/icon-img/category-menu.png'
              alt='icon'
            />
            <img
              className='category__menu-stick'
              src='assets/images/icon-img/category-menu-stick.png'
              alt='icon'
            />
            All Department <i className='la la-angle-down'></i>
          </Link>
        </h3>
        <div className='nav__category-menu nav__category-hide'>
          <nav>
            <ul>
              <li className='mobile__category-dd'>
                <Link to='#'>
                  Computer <span className='la la-angle-right'></span>
                </Link>
                <div className='nav__category-menu-dropdown res__height'>
                  <div className='nav__category-single-menu category__menu-mb nav__category-menu-border'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu category__menu-mb category__menu-ml'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className='mobile__category-dd'>
                <Link to='#'>
                  Accessories <span className='la la-angle-right'></span>
                </Link>
                <div className='nav__category-menu-dropdown res__height-2'>
                  <div className='nav__category-single-menu'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu category__menu-ml'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className='mobile__category-dd'>
                <Link to='#'>
                  Computer Kit <span className='la la-angle-right'></span>
                </Link>
                <div className='nav__category-menu-dropdown res__height'>
                  <div className='nav__category-single-menu category__menu-mb nav__category-menu-border'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu category__menu-mb category__menu-ml'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className='mobile__category-dd'>
                <Link to='#'>
                  Laptop <span className='la la-angle-right'></span>
                </Link>
                <div className='nav__category-menu-dropdown res__height-2'>
                  <div className='nav__category-single-menu'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='#'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='#'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='#'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='#'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu category__menu-ml'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='shop.html'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='shop.html'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className='mobile__category-dd'>
                <Link to='shop.html'>Laptop Accessories </Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='shop.html'>Smartwatch</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='#'>Accessories</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='shop.html'>Cameras</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='#'>Mobile Phone</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='shop.html'>Drone</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='shop.html'>Drone Cameras</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='shop.html'>Apple Products </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
