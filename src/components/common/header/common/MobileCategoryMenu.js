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
            <Link href='#'>
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
                  <Link href='#' onClick={categoryClick}>
                    Computer <span className='la la-angle-down'></span>
                  </Link>
                  <ul
                    className={
                      showCategory ? "category__hide-dsk" : "category__show-dsk"
                    }
                  >
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>
                    Accessories <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>
                    Computer Kit <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>
                    Laptop <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>Laptop Accessories </Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>Smartwatch</Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>
                    Accessories <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>Cameras</Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>
                    Mobile Phone <span className='la la-angle-down'></span>
                  </Link>
                  <ul className='category__hide-dsk'>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='category__sub-dd category__sub-style'>
                      <Link href='#'>
                        Laptop Accessories <i className='la la-angle-down'></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href='shop.html'>Laptop Keyboard</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Laptop Mouse</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>Bluetooth Speaker</Link>
                        </li>
                        <li>
                          <Link href='shop.html'>LED Light</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>Drone</Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>Drone Cameras</Link>
                </li>
                <li className='mobile__category-dd'>
                  <Link href='#'>Apple Products </Link>
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
