import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className='offcanvas__navigation' id='offcanvas__navigation'>
      <ul>
        <li className='menu__item-has--children'>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          <ul className='sub__menu'>
            <li className='menu__item-has--children'>
              <Link to={process.env.PUBLIC_URL + "/"}>Home One</Link>
              <ul className='sub__menu'>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
              </ul>
            </li>
            <li className='menu__item-has--children'>
              <Link to={process.env.PUBLIC_URL + "/"}>Home Two</Link>
              <ul className='sub__menu'>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
              </ul>
            </li>
            <li className='menu__item-has--children'>
              <Link to={process.env.PUBLIC_URL + "/"}>Home Three</Link>
              <ul className='sub__menu'>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='menu__item-has--children'>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>Shop</Link>
          <ul className='sub__menu'>
            <li className='menu__item-has--children'>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                Shop One
              </Link>
              <ul className='sub__menu'>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Shop One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
              </ul>
            </li>
            <li className='menu__item-has--children'>
              <Link to={process.env.PUBLIC_URL + "/product/1"}>
                Product Details
              </Link>
              <ul className='sub__menu'>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    Home One 1
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            Collection
          </Link>
        </li>
        <li className='menu__item-has--children'>
          <Link to={process.env.PUBLIC_URL + "/"}>Page</Link>
          <ul className='sub__menu'>
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>About</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>Cart</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>Wishlist</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/compare"}>Compare</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                My Account
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Register
              </Link>
            </li>
          </ul>
        </li>{" "}
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
// export default multilanguage(MobileNavMenu);
