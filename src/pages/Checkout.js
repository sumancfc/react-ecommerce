import React from "react";
import Breadcrumb from "../components/common/breadcrumb";
import Layout from "../components/Layouts";

const Checkout = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Checkout' />

      <div class='checkout__area pt-90 pb-90'>
        <div class='container'>
          <div class='customer__area mb-20'>
            <p class='customer__area-title'>
              Returning customer?{" "}
              <a class='customer__checkout' href='#'>
                Click here to login
              </a>
            </p>
            <div class='checkout__login-info'>
              <p>
                If you have shopped with us before, please enter your details in
                the boxes below. If you are a new customer, please proceed to
                the Billing and Shipping section.
              </p>
              <form action='#'>
                <div class='row'>
                  <div class='col-lg-6 col-md-6'>
                    <div class='checkout__login'>
                      <label>
                        Username or email address <span>*</span>
                      </label>
                      <input type='text' name='name' />
                    </div>
                  </div>
                  <div class='col-lg-6 col-md-6'>
                    <div class='checkout__login'>
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input type='password' name='password' />
                    </div>
                  </div>
                </div>
                <div class='btn__wrap'>
                  <button class='button' type='submit'>
                    Login
                  </button>
                  <div class='checkout__login-btn'>
                    <input type='checkbox' />
                    <label>Remember me</label>
                  </div>
                </div>
                <div class='lost__password'>
                  <a href='#'>Lost your password?</a>
                </div>
              </form>
            </div>
          </div>
          <div class='customer__area mb-20'>
            <p class='customer__area-title'>
              Have a coupon?{" "}
              <a class='coupon__click' href='#'>
                Click here to enter your code
              </a>
            </p>
            <div class='coupon__area'>
              <form action='#'>
                <input type='text' placeholder='Coupon code' />
                <input type='submit' value='Apply Coupon' />
              </form>
            </div>
          </div>
          <div class='checkout__wrap pt-30'>
            <div class='row'>
              <div class='col-lg-7'>
                <div class='bill__info-wrap mr-50'>
                  <h3>Billing Details</h3>
                  <div class='row'>
                    <div class='col-lg-6 col-md-6'>
                      <div class='bill__info mb-20'>
                        <label>
                          First Name{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div class='col-lg-6 col-md-6'>
                      <div class='bill__info mb-20'>
                        <label>
                          Last Name{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div class='col-lg-12'>
                      <div class='bill__info mb-20'>
                        <label>
                          Company Name{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div class='col-lg-12'>
                      <div class='bill__select mb-20'>
                        <label>
                          Country{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <select>
                          <option>Select a country</option>
                          <option>Nepal</option>
                          <option>India</option>
                          <option>Bangladesh</option>
                        </select>
                      </div>
                    </div>
                    <div class='col-lg-12'>
                      <div class='bill__info mb-20'>
                        <label>
                          Street Address{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input
                          class='bill__address'
                          placeholder='House number and street name'
                          type='text'
                        />
                        <input
                          placeholder='Apartment, suite, unit etc.'
                          type='text'
                        />
                      </div>
                    </div>
                    <div class='col-lg-12'>
                      <div class='bill__info mb-20'>
                        <label>
                          Town / City{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div class='col-lg-12 col-md-12'>
                      <div class='bill__info mb-20'>
                        <label>
                          State / County{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div class='col-lg-12 col-md-12'>
                      <div class='bill__info mb-20'>
                        <label>
                          Postcode / ZIP{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div class='col-lg-12 col-md-12'>
                      <div class='bill__info mb-20'>
                        <label>
                          Phone{" "}
                          <abbr class='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div class='col-lg-12 col-md-12'>
                      <div class='bill__info mb-20'>
                        <label>
                          Email Address{" "}
                          <abbr class='required' title='required' required>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                  </div>
                  <div class='checkout__acount mb-25'>
                    <input class='checkout__toggle-1' type='checkbox' />
                    <span>Create an account?</span>
                  </div>
                  <div class='checkout__acount-toggle toggle__open mb-30'>
                    <label>Email Address</label>
                    <input placeholder='Password' type='password' />
                  </div>
                  <div class='checkout__acount mt-25'>
                    <input class='checkout__toggle' type='checkbox' />
                    <span>Ship to a different address?</span>
                  </div>
                  <div class='diff__address open__toggle mt-30'>
                    <div class='row'>
                      <div class='col-lg-6 col-md-6'>
                        <div class='bill__info mb-20'>
                          <label>First Name</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6'>
                        <div class='bill__info mb-20'>
                          <label>Last Name</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='bill__info mb-20'>
                          <label>Company Name</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='bill__select mb-20'>
                          <label>Country</label>
                          <select>
                            <option>Select a country</option>
                            <option>Nepal</option>
                            <option>India</option>
                            <option>Bangladesh</option>
                          </select>
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='bill__info mb-20'>
                          <label>Street Address</label>
                          <input
                            class='bill__address'
                            placeholder='House number and street name'
                            type='text'
                          />
                          <input
                            placeholder='Apartment, suite, unit etc.'
                            type='text'
                          />
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='bill__info mb-20'>
                          <label>Town / City</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6'>
                        <div class='bill__info mb-20'>
                          <label>State / County</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6'>
                        <div class='bill__info mb-20'>
                          <label>Postcode / ZIP</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6'>
                        <div class='bill__info mb-20'>
                          <label>Phone</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6'>
                        <div class='bill__info mb-20'>
                          <label>Email Address</label>
                          <input type='text' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='add__info'>
                    <label>Order notes</label>
                    <textarea
                      placeholder='Notes about your order, e.g. special notes for delivery. '
                      name='message'
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class='col-lg-5'>
                <div class='order__area bg-gray'>
                  <h3>Your order</h3>
                  <div class='order__wrap'>
                    <div class='order__info-wrap'>
                      <div class='order__info'>
                        <ul>
                          <li>
                            Product <span>Total</span>
                          </li>
                        </ul>
                      </div>
                      <div class='order__info-center'>
                        <ul>
                          <li>
                            Product Name X 1 <span>$329 </span>
                          </li>
                          <li>
                            Product Name X 1 <span>$329 </span>
                          </li>
                        </ul>
                      </div>
                      <div class='order__info order__subtotal'>
                        <ul>
                          <li>
                            Subtotal <span>$329 </span>
                          </li>
                        </ul>
                      </div>
                      <div class='order__info order__shipping'>
                        <ul>
                          <li>
                            Shipping <p>Enter your full address </p>
                          </li>
                        </ul>
                      </div>
                      <div class='order__info order__total'>
                        <ul>
                          <li>
                            Total <span>$273.00 </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class='payment__method'>
                      <div class='payment__top payment__single'>
                        <input
                          id='payment_method'
                          class='input-radio'
                          type='radio'
                          value='cheque'
                          checked='checked'
                          name='payment method'
                        />
                        <label for='payment_method'>
                          {" "}
                          Direct Bank Transfer{" "}
                        </label>
                        <div class='payment__box payment_method_bacs'>
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </div>
                      </div>
                      <div class='payment__top payment__single'>
                        <input
                          id='payment__method'
                          class='input-radio'
                          type='radio'
                          value='cheque'
                          name='payment method'
                        />
                        <label for='payment__method'>Check payments</label>
                        <div class='payment__box payment_method_bacs'>
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </div>
                      </div>
                      <div class='payment__top payment__single'>
                        <input
                          id='payment__method-3'
                          class='input-radio'
                          type='radio'
                          value='cheque'
                          name='payment method'
                        />
                        <label for='payment__method-3'>Cash on delivery </label>
                        <div class='payment__box payment_method_bacs'>
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </div>
                      </div>
                      <div class='payment__top payment__single payment__single-3'>
                        <input
                          id='payment__method-4'
                          class='input-radio'
                          type='radio'
                          value='cheque'
                          name='payment method'
                        />
                        <label for='payment__method-4'>PayPal</label>
                        <div class='payment__box payment_method_bacs'>
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='Place__order mt-40'>
                    <a href='#'>Place Order</a>
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

export default Checkout;
