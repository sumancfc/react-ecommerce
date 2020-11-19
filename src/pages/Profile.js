import React from "react";
import Breadcrumb from "../components/common/breadcrumb";
import Layout from "../components/Layouts";

const Profile = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Profile' />
      <div class='account__area pt-100 pb-100'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='account__page-wrap'>
                <div class='row'>
                  <div class='col-lg-3 col-md-4'>
                    <div class='account__tab-menu nav bg-gray' role='tablist'>
                      <a href='#dashboad' class='active' data-toggle='tab'>
                        <i class='fa fa-dashboard'></i> Dashboard
                      </a>
                      <a href='#orders' data-toggle='tab'>
                        <i class='fa fa-cart-arrow-down'></i> Orders
                      </a>
                      <a href='#download' data-toggle='tab'>
                        <i class='fa fa-cloud-download'></i> Download
                      </a>
                      <a href='#payment-method' data-toggle='tab'>
                        <i class='fa fa-credit-card'></i> Payment Method
                      </a>
                      <a href='#address-edit' data-toggle='tab'>
                        <i class='fa fa-map-marker'></i> address
                      </a>
                      <a href='#account-info' data-toggle='tab'>
                        <i class='fa fa-user'></i> Account Details
                      </a>
                      <a href='login-register.html'>
                        <i class='fa fa-sign-out'></i> Logout
                      </a>
                    </div>
                  </div>

                  <div class='col-lg-9 col-md-8'>
                    <div class='tab-content' id='account'>
                      <div
                        class='tab-pane fade show active'
                        id='dashboad'
                        role='tabpanel'
                      >
                        <div class='account__content'>
                          <h3>Dashboard</h3>
                          <div class='header__top-left'>
                            <p>
                              Hello, <strong>User Name</strong> (If Not
                              <strong>Username !</strong>
                              <a href='login-register.html' class='logout'>
                                Logout
                              </a>
                              )
                            </p>
                          </div>

                          <p class='mb-0'>
                            From your account dashboard. you can easily check &
                            view your recent orders, manage your shipping and
                            billing addresses and edit your password and account
                            details.
                          </p>
                        </div>
                      </div>

                      <div class='tab-pane fade' id='orders' role='tabpanel'>
                        <div class='account__content'>
                          <h3>Orders</h3>
                          <div class='account__table table-responsive text-center'>
                            <table class='table table-bordered'>
                              <thead class='thead-light'>
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
                                    <a href='cart.html' class='btn-check'>
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
                                    <a href='cart.html' class='btn-check'>
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
                                    <a href='cart.html' class='btn-check'>
                                      View
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div class='tab-pane fade' id='download' role='tabpanel'>
                        <div class='account__content'>
                          <h3>Downloads</h3>
                          <div class='account__table table-responsive text-center'>
                            <table class='table table-bordered'>
                              <thead class='thead-light'>
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
                                    <a href='#' class='btn-check'>
                                      <i class='fa fa-cloud-download'></i>
                                      Download File
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>HasTech - Profolio Business Template</td>
                                  <td>Sep 12, 2018</td>
                                  <td>Never</td>
                                  <td>
                                    <a href='#' class='btn-check'>
                                      <i class='fa fa-cloud-download'></i>
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
                        class='tab-pane fade'
                        id='payment-method'
                        role='tabpanel'
                      >
                        <div class='account__content'>
                          <h3>Payment Method</h3>
                          <p class='message__saved'>
                            You Can't Saved Your Payment Method yet.
                          </p>
                        </div>
                      </div>

                      <div
                        class='tab-pane fade'
                        id='address-edit'
                        role='tabpanel'
                      >
                        <div class='account__content'>
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
                          <a href='#' class='btn-check'>
                            <i class='fa fa-edit'></i> Edit Address
                          </a>
                        </div>
                      </div>

                      <div
                        class='tab-pane fade'
                        id='account-info'
                        role='tabpanel'
                      >
                        <div class='account__content'>
                          <h3>Account Details</h3>
                          <div class='account__form'>
                            <form action='#'>
                              <div class='row'>
                                <div class='col-lg-6'>
                                  <div class='input__item'>
                                    <label for='first-name' class='required'>
                                      First Name
                                    </label>
                                    <input type='text' id='first-name' />
                                  </div>
                                </div>
                                <div class='col-lg-6'>
                                  <div class='input__item'>
                                    <label for='last-name' class='required'>
                                      Last Name
                                    </label>
                                    <input type='text' id='last-name' />
                                  </div>
                                </div>
                              </div>
                              <div class='input__item'>
                                <label for='display-name' class='required'>
                                  Display Name
                                </label>
                                <input type='text' id='display-name' />
                              </div>
                              <div class='input__item'>
                                <label for='email' class='required'>
                                  Email Addres
                                </label>
                                <input type='email' id='email' />
                              </div>
                              <fieldset>
                                <legend>Password change</legend>
                                <div class='input__item'>
                                  <label for='current-pwd' class='required'>
                                    Current Password
                                  </label>
                                  <input type='password' id='current-pwd' />
                                </div>
                                <div class='row'>
                                  <div class='col-lg-6'>
                                    <div class='input__item'>
                                      <label for='new-pwd' class='required'>
                                        New Password
                                      </label>
                                      <input type='password' id='new-pwd' />
                                    </div>
                                  </div>
                                  <div class='col-lg-6'>
                                    <div class='input__item'>
                                      <label for='confirm-pwd' class='required'>
                                        Confirm Password
                                      </label>
                                      <input type='password' id='confirm-pwd' />
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                              <div class='input__item'>
                                <button class='btn-check'>Save Changes</button>
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
