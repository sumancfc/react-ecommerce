import React from "react";
import Breadcrumb from "../components/common/breadcrumb";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";
import {
  addToWishlist,
  deleteAllFromWishlist,
  deleteFromWishlist,
} from "../actions/wishlistActions";
import Layout from "../components/Layouts";
import { getDiscount } from "../helpers/products";

const Wishlist = ({
  location,
  wishlistItems,
  deleteAllFromWishlist,
  deleteFromWishlist,
}) => {
  const { addToast } = useToasts();
  const { pathname } = location;

  return (
    <Layout>
      <Breadcrumb pageTitle='Wishlist' />

      <div className='cart__main-area pt-85 pb-90'>
        <div className='container'>
          {wishlistItems && wishlistItems.length >= 1 ? (
            <>
              <h3 className='cart__page-title'>Your wishlist items</h3>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                  <div className='table-content table-responsive cart__table-content'>
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Until Price</th>
                          <th>Add To Cart</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItems.map((wishlistItem, i) => {
                          const discountedPrice = getDiscount(
                            wishlistItem.price,
                            wishlistItem.discount
                          );
                          const finalProductPrice = wishlistItem.price.toFixed(
                            2
                          );
                          const finalDiscountedPrice = discountedPrice.toFixed(
                            2
                          );

                          return (
                            <tr key={i}>
                              <td className='product__thumbnail'>
                                <Link to={"/product/" + wishlistItem.id}>
                                  <img
                                    className='img-fluid'
                                    src={wishlistItem.image[0]}
                                    alt={wishlistItem.name}
                                  />
                                </Link>
                              </td>
                              <td className='product__name'>
                                <Link
                                  to={
                                    process.env.PUBLIC_URL +
                                    "/product/" +
                                    wishlistItem.id
                                  }
                                >
                                  {wishlistItem.name}
                                </Link>
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
                              <td className='product__wishlist-cart'>
                                {wishlistItem.affiliateLink ? (
                                  <a
                                    href={wishlistItem.affiliateLink}
                                    rel='noopener noreferrer'
                                    target='_blank'
                                  >
                                    Buy now
                                  </a>
                                ) : wishlistItem.variation &&
                                  wishlistItem.variation.length >= 1 ? (
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/product/${wishlistItem.id}`}
                                  >
                                    Select option
                                  </Link>
                                ) : wishlistItem.stock &&
                                  wishlistItem.stock > 0 ? (
                                  <Link>Add To Cart</Link>
                                ) : (
                                  <button disabled className='active'>
                                    Out of stock
                                  </button>
                                )}
                              </td>
                              <td className='product__remove'>
                                <button
                                  onClick={() =>
                                    deleteFromWishlist(wishlistItem, addToast)
                                  }
                                >
                                  <i className='la la-times'></i>
                                </button>
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
                      <Link
                        to='#'
                        onClick={() => deleteAllFromWishlist(addToast)}
                      >
                        Clear Wishist
                      </Link>
                    </div>
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
                    <h3> No items found in wishlist </h3>
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
    wishlistItems: state.wishlistData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToWishlist: (item, addToast, quantityCount) => {
      dispatch(addToWishlist(item, addToast, quantityCount));
    },
    deleteFromWishlist: (item, addToast, quantityCount) => {
      dispatch(deleteFromWishlist(item, addToast, quantityCount));
    },
    deleteAllFromWishlist: (addToast) => {
      dispatch(deleteAllFromWishlist(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
