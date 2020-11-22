import React from "react";
import Layout from "../components/Layouts";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className='error__area pt-40 pb-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-8 text-center'>
              <div className='error'>
                <h1>404</h1>
                <h2>OPPS! PAGE NOT FOUND</h2>
                <p>
                  Sorry but the page you are looking for does not exist, have
                  been removed, name changed or is temporarity unavailable.
                </p>
                <form className='searchform mb-50'>
                  <input
                    type='text'
                    name='search'
                    id='error_search'
                    placeholder='Search...'
                    className='searchform__input'
                  />
                  <button type='submit' className='searchform__submit'>
                    <i className='la la-search' />
                  </button>
                </form>
                <Link to={process.env.PUBLIC_URL + "/"} className='error__btn'>
                  Back to home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
