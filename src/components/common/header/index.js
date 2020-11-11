import React from "react";
import CategoryMenu from "./common/CategoryMenu";
import MainMenu from "./common/MainMenu";
import MiddleHeader from "./common/MiddleHeader";
import MobileAside from "./common/MobileAside";
import TopHeader from "./common/TopHeader";
import "./Header.css";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      {/* <!-- Header  -->  */}
      <header className='heaader__area'>
        <div className='header__area-main'>
          {/* Top Header */}
          <TopHeader clsName='bg-black' />
          {/* Middle Header */}
          <MiddleHeader />
          <div className='header__area-bottom header__nav-sticky background__red'>
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
