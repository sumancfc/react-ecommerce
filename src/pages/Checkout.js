import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/breadcrumb";
import Layout from "../components/Layouts";

const Checkout = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Checkout' />

      <div className='checkout__area pt-90 pb-90'>
        <div className='container'>
          <div className='customer__area mb-20'>
            <p className='customer__area-title'>
              Returning customer?
              <Link className='customer__checkout' to='#'>
                Click here to login
              </Link>
            </p>
            <div className='checkout__login-info'>
              <p>
                If you have shopped with us behtmlFore, please enter your
                details in the boxes below. If you are a new customer, please
                proceed to the Billing and Shipping section.
              </p>
              <form action='#'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='checkout__login'>
                      <label>
                        Username or email address <span>*</span>
                      </label>
                      <input type='text' name='name' />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='checkout__login'>
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input type='password' name='password' />
                    </div>
                  </div>
                </div>
                <div className='btn__wrap'>
                  <button className='button' type='submit'>
                    Login
                  </button>
                  <div className='checkout__login-btn'>
                    <input type='checkbox' />
                    <label>Remember me</label>
                  </div>
                </div>
                <div className='lost__password'>
                  <Link to='#'>Lost your password?</Link>
                </div>
              </form>
            </div>
          </div>
          <div className='customer__area mb-20'>
            <p className='customer__area-title'>
              Have a coupon?
              <Link className='coupon__click' to='#'>
                Click here to enter your code
              </Link>
            </p>
            <div className='coupon__area'>
              <form action='#'>
                <input type='text' placeholder='Coupon code' />
                <input type='submit' value='Apply Coupon' />
              </form>
            </div>
          </div>
          <div className='checkout__wrap pt-30'>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='bill__info-wrap mr-50'>
                  <h3>Billing Details</h3>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='bill__info mb-20'>
                        <label>
                          First Name
                          <abbr className='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='bill__info mb-20'>
                        <label>
                          Last Name
                          <abbr className='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='bill__info mb-20'>
                        <label>
                          Company Name
                          <abbr className='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='bill__select mb-20'>
                        <label>
                          Country
                          <abbr className='required' title='required'>
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
                    <div className='col-lg-12'>
                      <div className='bill__info mb-20'>
                        <label>
                          Street Address
                          <abbr className='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input
                          className='bill__address'
                          placeholder='House number and street name'
                          type='text'
                        />
                        <input
                          placeholder='Apartment, suite, unit etc.'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='bill__info mb-20'>
                        <label>
                          Town / City
                          <abbr className='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                      <div className='bill__info mb-20'>
                        <label>
                          State / County
                          <abbr className='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                      <div className='bill__info mb-20'>
                        <label>
                          Postcode / ZIP
                          <abbr className='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                      <div className='bill__info mb-20'>
                        <label>
                          Phone
                          <abbr className='required' title='required'>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                      <div className='bill__info mb-20'>
                        <label>
                          Email Address
                          <abbr className='required' title='required' required>
                            *
                          </abbr>
                        </label>
                        <input type='text' />
                      </div>
                    </div>
                  </div>
                  <div className='checkout__acount mb-25'>
                    <input className='checkout__toggle-1' type='checkbox' />
                    <span>Create an account?</span>
                  </div>
                  <div className='checkout__acount-toggle toggle__open mb-30'>
                    <label>Email Address</label>
                    <input placeholder='Password' type='password' />
                  </div>
                  <div className='checkout__acount mt-25'>
                    <input className='checkout__toggle' type='checkbox' />
                    <span>Ship to a different address?</span>
                  </div>
                  <div className='diff__address open__toggle mt-30'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6'>
                        <div className='bill__info mb-20'>
                          <label>First Name</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='bill__info mb-20'>
                          <label>Last Name</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='bill__info mb-20'>
                          <label>Company Name</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='bill__select mb-20'>
                          <label>Country</label>
                          <select>
                            <option>Select a country</option>
                            <option>Nepal</option>
                            <option>India</option>
                            <option>Bangladesh</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='bill__info mb-20'>
                          <label>Street Address</label>
                          <input
                            className='bill__address'
                            placeholder='House number and street name'
                            type='text'
                          />
                          <input
                            placeholder='Apartment, suite, unit etc.'
                            type='text'
                          />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='bill__info mb-20'>
                          <label>Town / City</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='bill__info mb-20'>
                          <label>State / County</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='bill__info mb-20'>
                          <label>Postcode / ZIP</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='bill__info mb-20'>
                          <label>Phone</label>
                          <input type='text' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='bill__info mb-20'>
                          <label>Email Address</label>
                          <input type='text' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='add__info'>
                    <label>Order notes</label>
                    <textarea
                      placeholder='Notes about your order, e.g. special notes htmlFor delivery. '
                      name='message'
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='order__area bg-gray'>
                  <h3>Your order</h3>
                  <div className='order__wrap'>
                    <div className='order__info-wrap'>
                      <div className='order__info'>
                        <ul>
                          <li>
                            Product <span>Total</span>
                          </li>
                        </ul>
                      </div>
                      <div className='order__info-center'>
                        <ul>
                          <li>
                            Product Name X 1 <span>$329 </span>
                          </li>
                          <li>
                            Product Name X 1 <span>$329 </span>
                          </li>
                        </ul>
                      </div>
                      <div className='order__info order__subtotal'>
                        <ul>
                          <li>
                            Subtotal <span>$329 </span>
                          </li>
                        </ul>
                      </div>
                      <div className='order__info order__shipping'>
                        <ul>
                          <li>
                            Shipping <p>Enter your full address </p>
                          </li>
                        </ul>
                      </div>
                      <div className='order__info order__total'>
                        <ul>
                          <li>
                            Total <span>$273.00 </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='payment__method'>
                      <div className='payment__top payment__single'>
                        <input
                          id='payment_method'
                          className='input-radio'
                          type='radio'
                          value='cheque'
                          checked
                          name='payment method'
                        />
                        <label htmlFor='payment_method'>
                          Direct Bank Transfer
                        </label>
                        <div className='payment__box payment_method_bacs'>
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </div>
                      </div>
                      <div className='payment__top payment__single'>
                        <input
                          id='payment__method'
                          className='input-radio'
                          type='radio'
                          value='cheque'
                          name='payment method'
                        />
                        <label htmlFor='payment__method'>Check payments</label>
                        <div className='payment__box payment_method_bacs'>
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </div>
                      </div>
                      <div className='payment__top payment__single'>
                        <input
                          id='payment__method-3'
                          className='input-radio'
                          type='radio'
                          value='cheque'
                          name='payment method'
                        />
                        <label htmlFor='payment__method-3'>
                          Cash on delivery
                        </label>
                        <div className='payment__box payment_method_bacs'>
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </div>
                      </div>
                      <div className='payment__top payment__single payment__single-3'>
                        <input
                          id='payment__method-4'
                          className='input-radio'
                          type='radio'
                          value='cheque'
                          name='payment method'
                        />
                        <label htmlFor='payment__method-4'>PayPal</label>
                        <div className='payment__box payment_method_bacs'>
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='Place__order mt-40'>
                    <Link to='#'>Place Order</Link>
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
