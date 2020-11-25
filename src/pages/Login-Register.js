import React from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
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
                <Tab.Container variant='pills' defaultActiveKey='login'>
                  <Nav className='login__register-tab-list'>
                    <Nav.Item>
                      <Nav.Link eventKey='login'>
                        <h4>Login</h4>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='register'>
                        <h4>Register</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey='login'>
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
                    </Tab.Pane>

                    <Tab.Pane eventKey='register'>
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
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginRegister;
