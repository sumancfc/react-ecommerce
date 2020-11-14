import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ pageTitle }) => {
  return (
    // <!-- Breadcrumb -->

    <div
      className='breadcrumb__area bg-img'
      style={{ backgroundImage: `url(assets/images/bg/breadcrumb.jpg)` }}
    >
      <div className='container'>
        <div className='breadcrumb__content text-center'>
          <h2>{pageTitle} Page</h2>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li className='active'>{pageTitle}</li>
          </ul>
        </div>
      </div>
    </div>

    // <!-- Breadcrumb End-->
  );
};

export default Breadcrumb;
