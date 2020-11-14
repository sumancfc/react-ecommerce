import React from "react";
import Breadcrumb from "../components/common/breadcrumb";
import Layout from "../components/Layouts";

const Cart = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Cart' />

      <div class='cart__main-area pt-85 pb-90'>
        <div class='container'>
          <h3 class='cart__page-title'>Your cart items</h3>
          <div class='row'>
            <div class='col-lg-12 col-md-12 col-sm-12 col-12'>
              <div class='table-content table-responsive cart__table-content'>
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Until Price</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='product__thumbnail'>
                        <a href='#'>
                          <img src='assets/images/cart/cart-1.png' alt='' />
                        </a>
                      </td>
                      <td class='product__name'>
                        <a href='#'>Demo Product Name</a>
                      </td>
                      <td class='product__price-cart'>
                        <span class='amount'>$260.00</span>
                      </td>
                      <td class='product__quantity'>
                        <div class='cart__plus-minus'>
                          <input
                            class='cart__plus-minus-box'
                            type='text'
                            name='qtybutton'
                            value='2'
                          />
                        </div>
                      </td>
                      <td class='product__subtotal'>$110.00</td>
                      <td class='product__remove'>
                        <a href='#'>
                          <i class='la la-pencil'></i>
                        </a>
                        <a href='#'>
                          <i class='la la-close'></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class='product__thumbnail'>
                        <a href='#'>
                          <img src='assets/images/cart/cart-2.png' alt='' />
                        </a>
                      </td>
                      <td class='product__name'>
                        <a href='#'>Demo Product Name</a>
                      </td>
                      <td class='product__price-cart'>
                        <span class='amount'>$150.00</span>
                      </td>
                      <td class='product__quantity'>
                        <div class='cart__plus-minus'>
                          <input
                            class='cart__plus-minus-box'
                            type='text'
                            name='qtybutton'
                            value='2'
                          />
                        </div>
                      </td>
                      <td class='product__subtotal'>$150.00</td>
                      <td class='product__remove'>
                        <a href='#'>
                          <i class='la la-pencil'></i>
                        </a>
                        <a href='#'>
                          <i class='la la-close'></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class='product__thumbnail'>
                        <a href='#'>
                          <img src='assets/images/cart/cart-3.png' alt='' />
                        </a>
                      </td>
                      <td class='product__name'>
                        <a href='#'>Demo Product Name </a>
                      </td>
                      <td class='product__price-cart'>
                        <span class='amount'>$170.00</span>
                      </td>
                      <td class='product__quantity'>
                        <div class='cart__plus-minus'>
                          <input
                            class='cart__plus-minus-box'
                            type='text'
                            name='qtybutton'
                            value='2'
                          />
                        </div>
                      </td>
                      <td class='product__subtotal'>$170.00</td>
                      <td class='product__remove'>
                        <a href='#'>
                          <i class='la la-pencil'></i>
                        </a>
                        <a href='#'>
                          <i class='la la-close'></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class='row'>
                <div class='col-lg-12'>
                  <div class='cart__shiping-update-wrapper'>
                    <div class='cart__shiping-update'>
                      <a href='#'>Continue Shopping</a>
                    </div>
                    <div class='cart__clear'>
                      <button>Update Shopping Cart</button>
                      <a href='#'>Clear Shopping Cart</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class='row'>
                <div class='col-lg-4 col-md-6'>
                  <div class='cart__tax'>
                    <div class='title__wrap'>
                      <h4 class='cart__bottom-title section__bg-gray'>
                        Estimate Shipping And Tax
                      </h4>
                    </div>
                    <div class='tax__wrapper'>
                      <p>Enter your destination to get a shipping estimate.</p>
                      <div class='tax__select-wrapper'>
                        <div class='tax__select'>
                          <label>* Country</label>
                          <select class='email s-email s-wid'>
                            <option>Nepal</option>
                            <option>India</option>
                            <option>Australia</option>
                            <option>UK</option>
                          </select>
                        </div>
                        <div class='tax__select'>
                          <label>* Region / State</label>
                          <select class='email s-email s-wid'>
                            <option>Nepal</option>
                            <option>India</option>
                            <option>Australia</option>
                            <option>UK</option>
                          </select>
                        </div>
                        <div class='tax__select'>
                          <label>* Zip/Postal Code</label>
                          <input type='text' />
                        </div>
                        <button class='cart__btn' type='submit'>
                          Get A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-4 col-md-6'>
                  <div class='discount__code-wrapper'>
                    <div class='title__wrap'>
                      <h4 class='cart__bottom-title section__bg-gray'>
                        Use Coupon Code
                      </h4>
                    </div>
                    <div class='discount__code'>
                      <p>Enter your coupon code if you have one.</p>
                      <form>
                        <input type='text' required='' name='name' />
                        <button class='cart__btn' type='submit'>
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class='col-lg-4 col-md-12'>
                  <div class='grand__totall'>
                    <div class='title__wrap'>
                      <h4 class='cart__bottom-title section__bg-gary-cart'>
                        Cart Total
                      </h4>
                    </div>
                    <h5>
                      Total products <span>$260.00</span>
                    </h5>
                    <div class='total__shipping'>
                      <h5>Total shipping</h5>
                      <ul>
                        <li>
                          <input type='checkbox' /> Standard <span>$20.00</span>
                        </li>
                        <li>
                          <input type='checkbox' /> Express <span>$30.00</span>
                        </li>
                      </ul>
                    </div>
                    <h4 class='grand__totall-title'>
                      Grand Total <span>$260.00</span>
                    </h4>
                    <a href='#'>Proceed to Checkout</a>
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

export default Cart;
