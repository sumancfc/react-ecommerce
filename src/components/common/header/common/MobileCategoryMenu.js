import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileCategoryMenu = () => {
  const [showCategory, setShowCategory] = useState(false);

  const categoryClick = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div className='background__red pt-20 pb-20 mobile__category-menu'>
      <div className='container'>
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
            className={
              showCategory
                ? "nav__category-menu"
                : "nav__category-menu nav__category-hide"
            }
          >
            <nav>
              <ul>
                <li className='mobile__category-dd'>
                  <Link to='#' onClick={categoryClick}>
                    Computer <span className='la la-angle-down'></span>
                  </Link>
                  <ul
                    className={
                      showCategory ? "category__hide-dsk" : "category__show-dsk"
                    }
                  >
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>
                    Accessories <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>
                    Computer Kit <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>
                    Laptop <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>Laptop Accessories </Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>Smartwatch</Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>
                    Accessories <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>Cameras</Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>
                    Mobile Phone <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link to='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
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
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>Drone</Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>Drone Cameras</Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link to='#'>Apple Products </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCategoryMenu;
