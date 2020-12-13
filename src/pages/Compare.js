import React from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { connect, useSelector } from "react-redux";
import { deleteFromCompare } from "../actions/compareActions";
import { getDiscount } from "../helpers/products";
import Breadcrumb from "../components/common/breadcrumb";
import Layout from "../components/Layouts";
import { addToCart } from "../actions/cartActions";

const Compare = ({ cartItems, compareItems, addToCart, deleteFromCompare }) => {
  const { addToast } = useToasts();

  return (
    <Layout>
      <Breadcrumb pageTitle='Compare' />

      <div className='compare__page-wrap pt-90 pb-90'>
        <div className='container'>
          {compareItems && compareItems.length >= 1 ? (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='compare__content-wrap'>
                  <div className='compare__table table-responsive'>
                    <table className='table table-bordered mb-0'>
                      <tbody>
                        <tr>
                          <td className='first__col'>Product Name</td>

                          {compareItems.map((compareItem, i) => (
                            <td className='product__img-title' key={i}>
                              <Link
                                to={
                                  process.env.PUBLIC_URL +
                                  "/product/" +
                                  compareItem.id
                                }
                                className='image'
                              >
                                <img
                                  className='img-fluid'
                                  src={
                                    process.env.PUBLIC_URL +
                                    compareItem.image[0]
                                  }
                                  alt={compareItem.name}
                                />
                              </Link>
                              <Link to='#' className='category'>
                                {compareItem.category.join(" , ")}
                              </Link>
                              <Link
                                to={
                                  process.env.PUBLIC_URL +
                                  "/product/" +
                                  compareItem.id
                                }
                                className='title'
                              >
                                {compareItem.name}
                              </Link>
                            </td>
                          ))}
                        </tr>

                        <tr>
                          <td className='first__col'>Description</td>
                          {compareItems.map((compareItem, i) => (
                            <td className='product__description' key={i}>
                              <p>{compareItem.shortDetails}</p>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className='first__col'>Price</td>
                          {compareItems.map((compareItem, i) => {
                            const discountedPrice = getDiscount(
                              compareItem.price,
                              compareItem.discount
                            );
                            const finalProductPrice = Number(
                              compareItem.price
                            ).toFixed(2);
                            const finalDiscountedPrice = Number(
                              discountedPrice
                            ).toFixed(2);

                            return (
                              <td className='compare__price' key={i}>
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
                            );
                          })}
                        </tr>
                        <tr>
                          <td className='first__col'>Color</td>
                          {compareItems.map((compareItem, i) => (
                            <td className='compare__color' key={i}>
                              <p>{compareItem.variation.color}</p>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className='first__col'>Stock</td>
                          {compareItems.map((compareItem, i) => (
                            <td className='product__instock' key={i}>
                              <p>{compareItem.stock}</p>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className='first__col'>Add to cart</td>
                          {compareItems.map((compareItem, i) => {
                            const cartItem = cartItems.filter(
                              (item) => item.id === compareItem.id
                            )[0];
                            return compareItem.stock &&
                              compareItem.stock > 0 ? (
                              <td key={i}>
                                <button
                                  className='compare__cart'
                                  onClick={() =>
                                    addToCart(compareItem, addToast)
                                  }
                                  disabled={
                                    cartItem !== undefined &&
                                    cartItem.quantity > 0
                                  }
                                  title={
                                    compareItem !== undefined
                                      ? "Added to cart"
                                      : "Add to cart"
                                  }
                                >
                                  {cartItem !== undefined &&
                                  cartItem.quantity > 0
                                    ? "Added to cart"
                                    : "Add to cart"}
                                </button>
                              </td>
                            ) : (
                              <button disabled className='compare__cart'>
                                out od Stock
                              </button>
                            );
                          })}
                        </tr>
                        <tr>
                          <td className='first__col'>Rating</td>
                          <td className='product__rating'>
                            <i className='la la-star'></i>
                            <i className='la la-star'></i>
                            <i className='la la-star'></i>
                            <i className='la la-star'></i>
                            <i className='la la-star'></i>
                          </td>
                        </tr>
                        <tr>
                          <td className='first__col'>Remove</td>
                          {compareItems.map((compareItem, i) => (
                            <td className='product__remove' key={i}>
                              <button
                                onClick={() =>
                                  deleteFromCompare(compareItem, addToast)
                                }
                              >
                                <i className='la la-trash'></i>
                              </button>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='empty__area text-center'>
                  <div className='empty__area-icon mb-30'>
                    <i className='la la-retweet'></i>
                  </div>
                  <div className='empty__area-text'>
                    <h3> No items found in compare </h3>
                    <div className='default-btn btn-hover mt-30'>
                      <Link
                        to={process.env.PUBLIC_URL + "/shop"}
                        className='btn-style-outline btn-size-md '
                      >
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
    compareItems: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },

    deleteFromCompare: (item, addToast) => {
      dispatch(deleteFromCompare(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
