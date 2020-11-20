import React, { useEffect } from "react";
import MobileWidget from "./MobileWidget";
import MobileNavMenu from "./MobileNavMenu";
// import MobileSearch from "./MobileSearch";

const MobileAside = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas__navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas__mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className='offcanvas__mobile-menu' id='offcanvas__mobile-menu'>
      <button
        className='offcanvas__menu-close'
        id='mobile__menu-close-trigger'
        onClick={() => closeMobileMenu()}
      >
        <i className='la la-close'></i>
      </button>
      <div className='offcanvas__wrapper'>
        <div className='offcanvas__inner-content'>
          {/* mobile search */}
          {/* <MobileSearch /> */}

          {/* mobile nav menu */}
          <MobileNavMenu />

          {/* mobile widgets */}
          <MobileWidget />
        </div>
      </div>
    </div>
  );
};

export default MobileAside;
