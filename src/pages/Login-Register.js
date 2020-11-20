import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/breadcrumb";
import Button from "../components/common/button";
import Layout from "../components/Layouts";

const LoginRegister = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Login Register' />
      <div className='login__register-area pt-85 pb-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-12 ml-auto mr-auto'>
              <div className='login__register-wrapper'>
                <div className='login__register-tab-list nav'>
                  <a className='active' data-toggle='tab' href='#lg1'>
                    <h4> login </h4>
                  </a>
                  <a data-toggle='tab' href='#lg2'>
                    <h4> register </h4>
                  </a>
                </div>
                <div className='tab-content'>
                  <div id='lg1' className='tab-pane active'>
                    <div className='login__form-wrapper'>
                      <div className='login__register-form'>
                        <form action='#' method='post'>
                          <input
                            type='text'
                            name='name'
                            placeholder='Username'
                            required
                          />
                          <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            required
                          />
                          <div className='button__box'>
                            <div className='login__toggle-btn'>
                              <input type='checkbox' />
                              <label>Remember me</label>
                              <Link to='/'>Forgot Password?</Link>
                            </div>
                            <Button type='submit'>Login</Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div id='lg2' className='tab-pane'>
                    <div className='login__form-wrapper'>
                      <div className='login__register-form'>
                        <form action='#' method='post'>
                          <input
                            type='text'
                            name='name'
                            placeholder='Username'
                            required
                          />
                          <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            required
                          />
                          <input
                            name='email'
                            placeholder='Email'
                            type='email'
                            required
                          />
                          <div className='button__box'>
                            <Button type='submit'>Register</Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginRegister;
