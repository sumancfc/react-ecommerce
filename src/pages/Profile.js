import React from "react";
import Breadcrumb from "../components/common/breadcrumb";
import Button from "../components/common/button";
import Layout from "../components/Layouts";

const Profile = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Profile' />
      <div className='account__area pt-100 pb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='account__page-wrap'>
                <div className='row'>
                  <div className='col-lg-3 col-md-4'>
                    <div
                      className='account__tab-menu nav bg-gray'
                      role='tablist'
                    >
                      <a href='#dashboad' className='active' data-toggle='tab'>
                        <i className='fa fa-dashboard'></i> Dashboard
                      </a>
                      <a href='#orders' data-toggle='tab'>
                        <i className='fa fa-cart-arrow-down'></i> Orders
                      </a>
                      <a href='#download' data-toggle='tab'>
                        <i className='fa fa-cloud-download'></i> Download
                      </a>
                      <a href='#payment-method' data-toggle='tab'>
                        <i className='fa fa-credit-card'></i> Payment Method
                      </a>
                      <a href='#address-edit' data-toggle='tab'>
                        <i className='fa fa-map-marker'></i> address
                      </a>
                      <a href='#account-info' data-toggle='tab'>
                        <i className='fa fa-user'></i> Account Details
                      </a>
                      <a href='/login-register'>
                        <i className='fa fa-sign-out'></i> Logout
                      </a>
                    </div>
                  </div>

                  <div className='col-lg-9 col-md-8'>
                    <div className='tab-content' id='account'>
                      <div
                        className='tab-pane fade show active'
                        id='dashboad'
                        role='tabpanel'
                      >
                        <div className='account__content'>
                          <h3>Dashboard</h3>
                          <div className='header__top-left'>
                            <p>
                              Hello, <strong>User Name</strong> (If Not
                              <strong>Username !</strong>
                              <a href='login-register.html' className='logout'>
                                Logout
                              </a>
                              )
                            </p>
                          </div>

                          <p className='mb-0'>
                            From your account dashboard. you can easily check &
                            view your recent orders, manage your shipping and
                            billing addresses and edit your password and account
                            details.
                          </p>
                        </div>
                      </div>

                      <div
                        className='tab-pane fade'
                        id='orders'
                        role='tabpanel'
                      >
                        <div className='account__content'>
                          <h3>Orders</h3>
                          <div className='account__table table-responsive text-center'>
                            <table className='table table-bordered'>
                              <thead className='thead-light'>
                                <tr>
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Total</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Aug 22, 2018</td>
                                  <td>Pending</td>
                                  <td>$3000</td>
                                  <td>
                                    <a href='cart.html' className='btn-check'>
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>July 22, 2018</td>
                                  <td>Approved</td>
                                  <td>$200</td>
                                  <td>
                                    <a href='cart.html' className='btn-check'>
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>June 12, 2017</td>
                                  <td>On Hold</td>
                                  <td>$990</td>
                                  <td>
                                    <a href='cart.html' className='btn-check'>
                                      View
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div
                        className='tab-pane fade'
                        id='download'
                        role='tabpanel'
                      >
                        <div className='account__content'>
                          <h3>Downloads</h3>
                          <div className='account__table table-responsive text-center'>
                            <table className='table table-bordered'>
                              <thead className='thead-light'>
                                <tr>
                                  <th>Product</th>
                                  <th>Date</th>
                                  <th>Expire</th>
                                  <th>Download</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Haven - Free Real Estate PSD Template</td>
                                  <td>Aug 22, 2018</td>
                                  <td>Yes</td>
                                  <td>
                                    <a href='#' className='btn-check'>
                                      <i className='fa fa-cloud-download'></i>
                                      Download File
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>HasTech - Profolio Business Template</td>
                                  <td>Sep 12, 2018</td>
                                  <td>Never</td>
                                  <td>
                                    <a href='#' className='btn-check'>
                                      <i className='fa fa-cloud-download'></i>
                                      Download File
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div
                        className='tab-pane fade'
                        id='payment-method'
                        role='tabpanel'
                      >
                        <div className='account__content'>
                          <h3>Payment Method</h3>
                          <p className='message__saved'>
                            You Can't Saved Your Payment Method yet.
                          </p>
                        </div>
                      </div>

                      <div
                        className='tab-pane fade'
                        id='address-edit'
                        role='tabpanel'
                      >
                        <div className='account__content'>
                          <h3>Billing Address</h3>
                          <address>
                            <p>
                              <strong>Alex Tuntuni</strong>
                            </p>
                            <p>
                              1355 Market St, Suite 900 <br />
                              San Francisco, CA 94103
                            </p>
                            <p>Mobile: (123) 456-7890</p>
                          </address>
                          <a href='#' className='btn-check'>
                            <i className='fa fa-edit'></i> Edit Address
                          </a>
                        </div>
                      </div>

                      <div
                        className='tab-pane fade'
                        id='account-info'
                        role='tabpanel'
                      >
                        <div className='account__content'>
                          <h3>Account Details</h3>
                          <div className='account__form'>
                            <form action='#'>
                              <div className='row'>
                                <div className='col-lg-6'>
                                  <div className='input__item'>
                                    <label
                                      htmlFor='first-name'
                                      className='required'
                                    >
                                      First Name
                                    </label>
                                    <input type='text' id='first-name' />
                                  </div>
                                </div>
                                <div className='col-lg-6'>
                                  <div className='input__item'>
                                    <label
                                      htmlFor='last-name'
                                      className='required'
                                    >
                                      Last Name
                                    </label>
                                    <input type='text' id='last-name' />
                                  </div>
                                </div>
                              </div>
                              <div className='input__item'>
                                <label
                                  htmlFor='display-name'
                                  className='required'
                                >
                                  Display Name
                                </label>
                                <input type='text' id='display-name' />
                              </div>
                              <div className='input__item'>
                                <label htmlFor='email' className='required'>
                                  Email Addres
                                </label>
                                <input type='email' id='email' />
                              </div>
                              <fieldset>
                                <legend>Password change</legend>
                                <div className='input__item'>
                                  <label
                                    htmlFor='current-pwd'
                                    className='required'
                                  >
                                    Current Password
                                  </label>
                                  <input type='password' id='current-pwd' />
                                </div>
                                <div className='row'>
                                  <div className='col-lg-6'>
                                    <div className='input__item'>
                                      <label
                                        htmlFor='new-pwd'
                                        className='required'
                                      >
                                        New Password
                                      </label>
                                      <input type='password' id='new-pwd' />
                                    </div>
                                  </div>
                                  <div className='col-lg-6'>
                                    <div className='input__item'>
                                      <label
                                        htmlFor='confirm-pwd'
                                        className='required'
                                      >
                                        Confirm Password
                                      </label>
                                      <input type='password' id='confirm-pwd' />
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                              <div className='input__item'>
                                <Button className='btn-check'>
                                  Save Changes
                                </Button>
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
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
