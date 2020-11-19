import React from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";
import { deleteFromCompare } from "../actions/compareActions";
import { getDiscount } from "../helpers/products";
import Breadcrumb from "../components/common/breadcrumb";
import Layout from "../components/Layouts";
import { deleteAllFromWishlist } from "../actions/wishlistActions";

const Compare = ({ compareItems, deleteFromCompare }) => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Compare' />

      <div className='compare__page-wrap pt-90 pb-90'>
        <div className='container'>
          {compareItems && compareItems.length >= 0 ? (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='compare__content-wrap'>
                  <div className='compare__table table-responsive'>
                    <table className='table table-bordered mb-0'>
                      <tbody>
                        <tr>
                          <td className='first__col'>Product</td>
                          <td className='product__img-title'>
                            <Link to='single-product.html' className='image'>
                              <img
                                className='img-fluid'
                                src='assets/images/product/1.jpg'
                                alt='Compare Product'
                              />
                            </Link>
                            <Link to='#' className='category'>
                              Table
                            </Link>
                            <Link
                              to='single-product-sale.html'
                              className='title'
                            >
                              Product Name
                            </Link>
                          </td>
                          <td className='product__img-title'>
                            <Link to='single-product.html' className='image'>
                              <img
                                className='img-fluid'
                                src='assets/images/product/2.jpg'
                                alt='Compare Product'
                              />
                            </Link>
                            <Link to='#' className='category'>
                              Table{" "}
                            </Link>
                            <Link
                              to='single-product-group.html'
                              className='title'
                            >
                              {" "}
                              Product Name
                            </Link>
                          </td>
                          <td className='product__img-title'>
                            <Link to='single-product.html' className='image'>
                              <img
                                className='img-fluid'
                                src='assets/images/product/3.jpg'
                                alt='Compare Product'
                              />
                            </Link>
                            <Link to='#' className='category'>
                              Table
                            </Link>
                            <Link to='single-product.html' className='title'>
                              {" "}
                              Product Name
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className='first__col'>Description</td>
                          <td className='product__description'>
                            <p>
                              dolore nihil quis consequatur quae iure vitae.
                              Neque consequuntur ex numquam modi necessitatibus
                              doloribus, delectus eos quas nobis itaque, aliquam
                              voluptates. Deleniti quae quia, maiores minima
                              perspiciatis molestiae voluptate?
                            </p>
                          </td>
                          <td className='product__description'>
                            <p>
                              dolore nihil quis consequatur quae iure vitae.
                              Neque consequuntur ex numquam modi necessitatibus
                              doloribus, delectus eos quas nobis itaque, aliquam
                              voluptates. Deleniti quae quia, maiores minima
                              perspiciatis molestiae voluptate?
                            </p>
                          </td>
                          <td className='product__description'>
                            <p>
                              dolore nihil quis consequatur quae iure vitae.
                              Neque consequuntur ex numquam modi necessitatibus
                              doloribus, delectus eos quas nobis itaque, aliquam
                              voluptates. Deleniti quae quia, maiores minima
                              perspiciatis molestiae voluptate?
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className='first__col'>Price</td>
                          <td className='compare__price'>$295</td>
                          <td className='compare__price'>$275</td>
                          <td className='compare__price'>$395</td>
                        </tr>
                        <tr>
                          <td className='first__col'>Color</td>
                          <td className='compare__color'>Black</td>
                          <td className='compare__color'>Red</td>
                          <td className='compare__color'>Blue</td>
                        </tr>
                        <tr>
                          <td className='first__col'>Stock</td>
                          <td className='product__instock'>In Stock</td>
                          <td className='product__instock'>Stock Out</td>
                          <td className='product__instock'>In Stock</td>
                        </tr>
                        <tr>
                          <td className='first__col'>Add to cart</td>
                          <td>
                            <Link to='cart.html' className='btn-check'>
                              Add to Cart
                            </Link>
                          </td>
                          <td>
                            <Link to='cart.html' className='btn-check disabled'>
                              Add to Cart
                            </Link>
                          </td>
                          <td>
                            <Link to='cart.html' className='btn-check'>
                              Add to Cart
                            </Link>
                          </td>
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
                          <td className='product__rating'>
                            <i className='la la-star'></i>
                            <i className='la la-star'></i>
                            <i className='la la-star'></i>
                            <i className='la la-star'></i>
                            <i className='la la-star'></i>
                          </td>
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
                          <td className='product__remove'>
                            <button>
                              <i className='la la-trash'></i>
                            </button>
                          </td>
                          <td className='product__remove'>
                            <button>
                              <i className='la la-trash'></i>
                            </button>
                          </td>
                          <td className='product__remove'>
                            <button>
                              <i className='la la-trash'></i>
                            </button>
                          </td>
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
                    <i className='la la-heart'></i>
                  </div>
                  <div className='empty__area-text'>
                    <h3> No items found in compare </h3>
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
    compareItems: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCompare: (item, addToast) => {
      dispatch(deleteFromCompare(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
