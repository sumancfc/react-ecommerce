import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  const [showCategory, setShowCategory] = useState(true);

  const categoryClick = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div className='col-lg-4'>
      <div className='header__menu-category'>
        <h3 className='header__menu-category-show' onClick={categoryClick}>
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
        <div
          className={showCategory ? "nav__category-menu" : "nav__category-hide"}
        >
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
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu category__menu-mb category__menu-ml'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
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
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu category__menu-ml'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
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
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu category__menu-mb category__menu-ml'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='nav__category-single-menu'>
                    <h4>Laptop Accessories</h4>
                    <ul>
                      <li>
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
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
                        <Link to='/shop'>Laptop Keyboard</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Laptop Mouse</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Bluetooth Speaker</Link>
                      </li>
                      <li>
                        <Link to='/shop'>LED Light</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className='mobile__category-dd'>
                <Link to='/shop'>Laptop Accessories </Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='/shop'>Smartwatch</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='#'>Accessories</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='/shop'>Cameras</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='#'>Mobile Phone</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='/shop'>Drone</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='/shop'>Drone Cameras</Link>
              </li>
              <li className='mobile__category-dd'>
                <Link to='/shop'>Apple Products </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
