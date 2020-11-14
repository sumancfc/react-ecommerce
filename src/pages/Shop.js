import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/breadcrumb";
import ShopTopbar from "../components/common/products/ShopTopbar";
import Layout from "../components/Layouts";
import paginator from "react-hooks-paginator";
import { connect } from "react-redux";
import { productSorted } from "../helpers/products";

const Shop = ({ products, location }) => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 5;
  const { pathname } = location;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSort = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const sortFilter = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = productSorted(products, sortType, sortValue);
    const filterSortedProducts = productSorted(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Layout>
      <Breadcrumb pageTitle='Shop' />

      <div className='shop__area pt-90 pb-90 section-padding'>
        <div className='container-fluid'>
          <div className='row flex-row-reverse'>
            <div className='col-lg-9'>
              <ShopTopbar
                layout={getLayout}
                getFilterSort={sortFilter}
                productNum={products.length}
                productSortedNum={currentData.length}
              />

              <div className='shop__bottom-area'>
                <div className='tab-content jump'>
                  <div id='shop-1' className='tab-pane active'>
                    <div className='row'>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$210.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <span className='price__dec'>-30%</span>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$250.00</span>
                                <span className='old'>$270.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$200.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <span className='price__dec font__dec'>NEW</span>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$220.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <span className='new__stock'>
                              <span>
                                Stock <br />
                                Out
                              </span>
                            </span>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$250.00</span>
                                <span className='old'>$260.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$260.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <span className='price__dec font__dec'>NEW</span>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$240.00</span>
                                <span className='old'>$290.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$280.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$210.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <span className='price__dec'>-30%</span>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$250.00</span>
                                <span className='old'>$270.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$200.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                        <div className='product__wrap mb-35'>
                          <div className='product__img mb-15'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='product'
                              />
                            </a>
                            <span className='price__dec font__dec'>NEW</span>
                            <div className='product__action'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product__content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='price__add-to-cart'>
                              <div className='product__price'>
                                <span>$220.00</span>
                              </div>
                              <div className='product-add-to-cart'>
                                <a title='Add To Cart' href='#'>
                                  + Add To Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='shop-2' className='tab-pane'>
                    <div className='shop__list-wrap mb-30'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
                          <div className='product__list-img'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='Product Style'
                              />
                            </a>
                            <div className='product__list-quickview'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
                          <div className='shop__list-content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='pro__list-price'>
                              <span>$40.00</span>
                              <span className='old-price'>$50.00</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipic it,
                              sed do eiusmod tempor labor incididunt ut et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip.
                            </p>
                            <div className='product__list-action'>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                              <a title='Add To Cart' href='#'>
                                <i className='la la-shopping-cart'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='shop__list-wrap mb-30'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
                          <div className='product__list-img'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='Product Style'
                              />
                            </a>
                            <div className='product__list-quickview'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
                          <div className='shop__list-content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='pro__list-price'>
                              <span>$50.00</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipic it,
                              sed do eiusmod tempor labor incididunt ut et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip.
                            </p>
                            <div className='product__list-action'>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                              <a title='Add To Cart' href='#'>
                                <i className='la la-shopping-cart'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='shop__list-wrap mb-30'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
                          <div className='product__list-img'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='Product Style'
                              />
                            </a>
                            <div className='product__list-quickview'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
                          <div className='shop__list-content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='pro__list-price'>
                              <span>$40.00</span>
                              <span className='old-price'>$50.00</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipic it,
                              sed do eiusmod tempor labor incididunt ut et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip.
                            </p>
                            <div className='product__list-action'>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                              <a title='Add To Cart' href='#'>
                                <i className='la la-shopping-cart'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='shop__list-wrap mb-30'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
                          <div className='product__list-img'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='Product Style'
                              />
                            </a>
                            <div className='product__list-quickview'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
                          <div className='shop__list-content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='pro__list-price'>
                              <span>$90.00</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipic it,
                              sed do eiusmod tempor labor incididunt ut et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip.
                            </p>
                            <div className='product__list-action'>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                              <a title='Add To Cart' href='#'>
                                <i className='la la-shopping-cart'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='shop__list-wrap mb-30'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
                          <div className='product__list-img'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='Product Style'
                              />
                            </a>
                            <div className='product__list-quickview'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
                          <div className='shop__list-content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='pro__list-price'>
                              <span>$60.00</span>
                              <span className='old-price'>$80.00</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipic it,
                              sed do eiusmod tempor labor incididunt ut et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip.
                            </p>
                            <div className='product__list-action'>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                              <a title='Add To Cart' href='#'>
                                <i className='la la-shopping-cart'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='shop__list-wrap mb-30'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
                          <div className='product__list-img'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='Product Style'
                              />
                            </a>
                            <div className='product__list-quickview'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
                          <div className='shop__list-content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='pro__list-price'>
                              <span>$70.00</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipic it,
                              sed do eiusmod tempor labor incididunt ut et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip.
                            </p>
                            <div className='product__list-action'>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                              <a title='Add To Cart' href='#'>
                                <i className='la la-shopping-cart'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='shop__list-wrap mb-30'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
                          <div className='product__list-img'>
                            <a href='product-details.html'>
                              <img
                                src='assets/images/product/1.jpg'
                                alt='Product Style'
                              />
                            </a>
                            <div className='product__list-quickview'>
                              <a
                                data-toggle='modal'
                                data-target='#exampleModal'
                                title='Quick View'
                                href='#'
                              >
                                <i className='la la-plus'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
                          <div className='shop__list-content'>
                            <span>Chair</span>
                            <h4>
                              <a href='product-details.html'>
                                Golden Easy Spot Chair.
                              </a>
                            </h4>
                            <div className='pro__list-price'>
                              <span>$50.00</span>
                              <span className='old-price'>$60.00</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipic it,
                              sed do eiusmod tempor labor incididunt ut et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip.
                            </p>
                            <div className='product__list-action'>
                              <a title='Wishlist' href='#'>
                                <i className='la la-heart-o'></i>
                              </a>
                              <a title='Compare' href='#'>
                                <i className='la la-retweet'></i>
                              </a>
                              <a title='Add To Cart' href='#'>
                                <i className='la la-shopping-cart'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pagination-prod text-center'>
                    <ul>
                      <li>
                        <a className='prev' href='#'>
                          <i className='la la-angle-left'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>01</a>
                      </li>
                      <li>
                        <a href='#'>02</a>
                      </li>
                      <li>
                        <a className='active' href='#'>
                          03
                        </a>
                      </li>
                      <li>
                        <a href='#'>04</a>
                      </li>
                      <li>
                        <a href='#'>05</a>
                      </li>
                      <li>
                        <a href='#'>06</a>
                      </li>
                      <li>
                        <a className='next' href='#'>
                          <i className='la la-angle-right'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='sidebar__wrapper'>
                <div className='sidebar__widget'>
                  <h4 className='sidebar__title'>Search</h4>
                  <div className='sidebar__search mb-40 mt-20'>
                    <form
                      className='sidebar__side__menu-search-form'
                      action='#'
                    >
                      <input type='text' placeholder='Search here...' />
                      <button>
                        <i className='la la-search'></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className='sidebar__widget shop__sidebar-border pt-40'>
                  <h4 className='sidebar__title'>Shop By Categories</h4>
                  <div className='shop__category mt-20'>
                    <ul id='faq'>
                      <li>
                        <a
                          data-toggle='collapse'
                          data-parent='#faq'
                          href='#shop__category-1'
                        >
                          Women Fashion <i className='la la-angle-down'></i>
                        </a>
                        <ul
                          id='shop__category-1'
                          className='panel-collapse collapse show'
                        >
                          <li>
                            <a href='#'>Dress </a>
                          </li>
                          <li>
                            <a href='#'>Shoes</a>
                          </li>
                          <li>
                            <a href='#'>Sunglasses </a>
                          </li>
                          <li>
                            <a href='#'>Sweater </a>
                          </li>
                          <li>
                            <a href='#'>Handbag </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          data-toggle='collapse'
                          data-parent='#faq'
                          href='#shop__category-2'
                        >
                          Men Fashion <i className='la la-angle-down'></i>
                        </a>
                        <ul
                          id='shop__category-2'
                          className='panel-collapse collapse'
                        >
                          <li>
                            <a href='#'>Shirt </a>
                          </li>
                          <li>
                            <a href='#'>Shoes</a>
                          </li>
                          <li>
                            <a href='#'>Sunglasses </a>
                          </li>
                          <li>
                            <a href='#'>Sweater </a>
                          </li>
                          <li>
                            <a href='#'>Jacket </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          data-toggle='collapse'
                          data-parent='#faq'
                          href='#shop__category-3'
                        >
                          Furniture <i className='la la-angle-down'></i>
                        </a>
                        <ul
                          id='shop__category-3'
                          className='panel-collapse collapse'
                        >
                          <li>
                            <a href='#'> Chair</a>
                          </li>
                          <li>
                            <a href='#'>Lift Chair</a>
                          </li>
                          <li>
                            <a href='#'>Bunk Bed</a>
                          </li>
                          <li>
                            <a href='#'>Computer Desk</a>
                          </li>
                          <li>
                            <a href='#'>Bookcase</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>Lamp</a>
                      </li>
                      <li>
                        <a href='#'>Electronics</a>
                      </li>
                      <li>
                        <a href='#'>Accessories</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='shop__price-filter mt-35 shop__sidebar-border pt-40 sidebar__widget'>
                  <h4 className='sidebar__title'>Price Filter</h4>
                  <div className='price__filter mt-20'>
                    <span>Range: $100.00 - 1.300.00 </span>
                    <div id='slider__range'></div>
                    <div className='price__slider-amount'>
                      <div className='label-input'>
                        <input
                          type='text'
                          id='amount'
                          name='price'
                          placeholder='Add Your Price'
                        />
                      </div>
                      <button type='button'>Filter</button>
                    </div>
                  </div>
                </div>
                <div className='sidebar__widget shop__sidebar-border pt-40 mt-40'>
                  <h4 className='sidebar__title'>Refine By</h4>
                  <div className='sidebar__widget-list mt-20'>
                    <ul>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' />
                          <a href='#'>
                            On Sale <span>4</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            New <span>5</span>
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            In Stock <span>6</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='sidebar__widget pt-40 mt-40 shop__sidebar-border'>
                  <h4 className='sidebar__title'>Colour</h4>
                  <div className='sidebar__widget-list mt-20'>
                    <ul>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            Green <span>7</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            Cream <span>8</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            Blue <span>9</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            Black <span>3</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='sidebar__widget pt-40 mt-40 shop__sidebar-border'>
                  <h4 className='sidebar__title'>Size</h4>
                  <div className='sidebar__widget-list mt-20'>
                    <ul>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            XL <span>4</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            L <span>5</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            SM <span>6</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar__widget-list-left'>
                          <input type='checkbox' value='' />
                          <a href='#'>
                            XXL <span>7</span>{" "}
                          </a>
                          <span className='checkmark'></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='sidebar__widget pt-40 mt-40 shop__sidebar-border'>
                  <h4 className='sidebar__title'>Popular Tags</h4>
                  <div className='sidebar__widget-tag mt-20'>
                    <ul>
                      <li>
                        <a href='#'>Clothing</a>
                      </li>
                      <li>
                        <a href='#'>Accessories</a>
                      </li>
                      <li>
                        <a href='#'>For Men</a>
                      </li>
                      <li>
                        <a href='#'>Women</a>
                      </li>
                      <li>
                        <a href='#'>Fashion</a>
                      </li>
                    </ul>
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

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(Shop);
