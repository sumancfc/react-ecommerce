import React, { useEffect, useState } from "react";
import CategoryMenu from "./common/CategoryMenu";
import MainMenu from "./common/MainMenu";
import MiddleHeader from "./common/MiddleHeader";
import MobileAside from "./common/MobileAside";
import TopHeader from "./common/TopHeader";
import "./Header.css";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header__nav-sticky");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      {/* <!-- Header  -->  */}
      <header className='heaader__area'>
        <div className='header__area-main'>
          {/* Top Header */}
          <TopHeader clsName='bg-black' />
          {/* Middle Header */}
          <MiddleHeader />
          <div
            className={`header__area-bottom header__nav-sticky background__red ${
              scroll > headerTop ? "stick" : ""
            }`}
          >
            <div className='container'>
              <div className='row align-items-center'>
                <CategoryMenu />
                <MainMenu />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <MobileHeader />
      </header>

      {/* <!-- SideNav For Mobile View --> */}
      {/* <SideNav /> */}
      <MobileAside />
    </>
  );
};

export default Header;
