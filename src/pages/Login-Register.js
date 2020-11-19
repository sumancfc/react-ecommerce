import React from "react";
import Breadcrumb from "../components/common/breadcrumb";
import Layout from "../components/Layouts";

const LoginRegister = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Login Register' />
      <div class='login__register-area pt-85 pb-90'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-7 col-md-12 ml-auto mr-auto'>
              <div class='login__register-wrapper'>
                <div class='login__register-tab-list nav'>
                  <a class='active' data-toggle='tab' href='#lg1'>
                    <h4> login </h4>
                  </a>
                  <a data-toggle='tab' href='#lg2'>
                    <h4> register </h4>
                  </a>
                </div>
                <div class='tab-content'>
                  <div id='lg1' class='tab-pane active'>
                    <div class='login__form-wrapper'>
                      <div class='login__register-form'>
                        <form action='#' method='post'>
                          <input
                            type='text'
                            name='name'
                            placeholder='Username'
                          />
                          <input
                            type='password'
                            name='password'
                            placeholder='Password'
                          />
                          <div class='button__box'>
                            <div class='login__toggle-btn'>
                              <input type='checkbox' />
                              <label>Remember me</label>
                              <a href='#'>Forgot Password?</a>
                            </div>
                            <button type='submit'>Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div id='lg2' class='tab-pane'>
                    <div class='login__form-wrapper'>
                      <div class='login__register-form'>
                        <form action='#' method='post'>
                          <input
                            type='text'
                            name='name'
                            placeholder='Username'
                          />
                          <input
                            type='password'
                            name='password'
                            placeholder='Password'
                          />
                          <input
                            name='email'
                            placeholder='Email'
                            type='email'
                          />
                          <div class='button__box'>
                            <button type='submit'>Register</button>
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
