import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Breadcrumb from "../components/common/breadcrumb";
import Layout from "../components/Layouts";
import { getDiscount } from "../helpers/products";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  cartItemStock,
  deleteAllFromCart,
} from "../actions/cartActions";

const Cart = ({
  cartItems,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
}) => {
  const [quantityCount] = useState(1);
  const { addToast } = useToasts();
  let cartTotalPrice = 0;

  return (
    <Layout>
      <Breadcrumb pageTitle='Cart' />

      <div className='cart__main-area pt-85 pb-90'>
        <div className='container'>
          {cartItems && cartItems.length >= 1 ? (
            <>
              <h3 className='cart__page-title'>Your cart items</h3>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                  <div className='table-content table-responsive cart__table-content'>
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
                        {cartItems.map((cartItem, i) => {
                          const discountedPrice = getDiscount(
                            cartItem.price,
                            cartItem.discount
                          );
                          const finalProductPrice = Number(
                            cartItem.price
                          ).toFixed(2);
                          const finalDiscountedPrice = Number(
                            discountedPrice
                          ).toFixed(2);

                          discountedPrice !== null
                            ? (cartTotalPrice +=
                                finalDiscountedPrice * cartItem.quantity)
                            : (cartTotalPrice +=
                                finalProductPrice * cartItem.quantity);

                          return (
                            <tr key={i}>
                              <td className='product__thumbnail'>
                                <Link to={"/product/" + cartItem.id}>
                                  <img
                                    src={cartItem.image[0]}
                                    alt={cartItem.name}
                                    className='img-fluid'
                                  />
                                </Link>
                              </td>
                              <td className='product__name'>
                                <Link to={"/product/" + cartItem.id}>
                                  {cartItem.name}
                                </Link>
                                {cartItem.selectedProductColor &&
                                cartItem.selectedProductSize ? (
                                  <div className='cart__item-variation'>
                                    <span>
                                      Color: {cartItem.selectedProductColor}
                                    </span>
                                    <span>
                                      Size: {cartItem.selectedProductSize}
                                    </span>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </td>
                              <td className='product__price-cart'>
                                {discountedPrice !== null ? (
                                  <>
                                    <span className='amount old'>
                                      ${finalProductPrice}
                                    </span>
                                    <span className='amount'>
                                      ${finalDiscountedPrice}
                                    </span>
                                  </>
                                ) : (
                                  <span className='amount'>
                                    ${finalProductPrice}
                                  </span>
                                )}
                              </td>

                              <td className='product__quantity'>
                                <div className='cart__plus-minus'>
                                  <button
                                    className='dec qtybutton'
                                    onClick={() =>
                                      decreaseQuantity(cartItem, addToast)
                                    }
                                  >
                                    -
                                  </button>
                                  <input
                                    className='cart__plus-minus-box'
                                    type='text'
                                    value={cartItem.quantity}
                                    readOnly
                                  />
                                  <button
                                    className='inc qtybutton'
                                    onClick={() =>
                                      addToCart(
                                        cartItem,
                                        addToast,
                                        quantityCount
                                      )
                                    }
                                    disabled={
                                      cartItem !== undefined &&
                                      cartItem.quantity &&
                                      cartItem.quantity >=
                                        cartItemStock(
                                          cartItem,
                                          cartItem.selectedProductColor,
                                          cartItem.selectedProductSize
                                        )
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className='product__subtotal'>
                                $
                                {discountedPrice !== null
                                  ? Number(
                                      finalDiscountedPrice * cartItem.quantity
                                    ).toFixed(2)
                                  : Number(
                                      finalProductPrice * cartItem.quantity
                                    ).toFixed(2)}
                              </td>
                              <td className='product__remove'>
                                <Link
                                  to='#'
                                  onClick={() =>
                                    deleteFromCart(cartItem, addToast)
                                  }
                                >
                                  <i className='la la-close'></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='cart__shiping-update-wrapper'>
                    <div className='cart__shiping-update'>
                      <Link to='/shop'>Continue Shopping</Link>
                    </div>
                    <div className='cart__clear'>
                      <button onClick={() => deleteAllFromCart(addToast)}>
                        Clear Shopping Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <div className='cart__tax'>
                    <div className='title__wrap'>
                      <h4 className='cart__bottom-title section__bg-gray'>
                        Estimate Shipping And Tax
                      </h4>
                    </div>
                    <div className='tax__wrapper'>
                      <p>Enter your destination to get a shipping estimate.</p>
                      <div className='tax__select-wrapper'>
                        <div className='tax__select'>
                          <label>* Country</label>
                          <select className='email s-email s-wid'>
                            <option>Nepal</option>
                            <option>India</option>
                            <option>Australia</option>
                            <option>UK</option>
                          </select>
                        </div>
                        <div className='tax__select'>
                          <label>* Region / State</label>
                          <select className='email s-email s-wid'>
                            <option>Nepal</option>
                            <option>India</option>
                            <option>Australia</option>
                            <option>UK</option>
                          </select>
                        </div>
                        <div className='tax__select'>
                          <label>* Zip/Postal Code</label>
                          <input type='text' />
                        </div>
                        <button className='cart__btn' type='submit'>
                          Get A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='discount__code-wrapper'>
                    <div className='title__wrap'>
                      <h4 className='cart__bottom-title section__bg-gray'>
                        Use Coupon Code
                      </h4>
                    </div>
                    <div className='discount__code'>
                      <p>Enter your coupon code if you have one.</p>
                      <form>
                        <input type='text' required='' name='name' />
                        <button className='cart__btn' type='submit'>
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                  <div className='grand__totall'>
                    <div className='title__wrap'>
                      <h4 className='cart__bottom-title section__bg-gary-cart'>
                        Cart Total
                      </h4>
                    </div>
                    <h5>
                      Total products <span> ${cartTotalPrice}</span>
                    </h5>
                    <div className='total__shipping'>
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
                    <h4 className='grand__totall-title'>
                      Grand Total <span> ${cartTotalPrice}</span>
                    </h4>
                    <Link to='/checkout'>Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='empty__area text-center'>
                  <div className='empty__area-icon mb-30'>
                    <i className='la la-heart'></i>
                  </div>
                  <div className='empty__area-text'>
                    <h3> No items found in cart </h3>
                    <div className='default-btn btn-hover'>
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
                        Add Items
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    decreaseQuantity: (item, addToast) => {
      dispatch(decreaseQuantity(item, addToast));
    },
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    deleteAllFromCart: (addToast) => {
      dispatch(deleteAllFromCart(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
