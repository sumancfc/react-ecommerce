import React, { useState, useEffect, Fragment } from "react";
import { Modal } from "react-bootstrap";

import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { Link } from "react-router-dom";
import { getProductCartQuantity } from "../../../../helpers/products";
import { useSelector } from "react-redux";
import ProductRating from "../../rating";

const ProductModal = ({
  show,
  onHide,
  product,
  discountedPrice,
  finalProductPrice,
  finalDiscountedPrice,
  // cartItems,
  addToCart,
  wishlistItem,
  compareItem,
  addToCompare,
  addToWishlist,
  addToast,
}) => {
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );

  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size.name : ""
  );

  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );

  const [quantityCount, setQuantityCount] = useState(1);

  const cartItems = useSelector((state) => state.cartData);

  const productCartQuantity = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className='swiper-button-prev ht-swiper-button-nav'>
        <i className='pe-7s-angle-left' />
      </button>
    ),
    renderNextButton: () => (
      <button className='swiper-button-next ht-swiper-button-nav'>
        <i className='pe-7s-angle-right' />
      </button>
    ),
  };

  return (
    <Fragment>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton></Modal.Header>

        <div className='modal-body'>
          <div className='row'>
            <div className='col-md-6 col-sm-12 col-xs-12'>
              {/* GalleryThumbnail */}
              <div className='tab-content quickview__big-img'>
                <Swiper {...gallerySwiperParams}>
                  {product.image &&
                    product.image.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className='single-image'>
                            <img
                              src={process.env.PUBLIC_URL + single}
                              className='img-fluid'
                              alt=''
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
              {/* ThumbnailHere */}
              <div className='quickview__wrap mt-15'>
                <Swiper {...thumbnailSwiperParams}>
                  {product.image &&
                    product.image.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className='single-image'>
                            <img
                              src={process.env.PUBLIC_URL + single}
                              className='img-fluid'
                              alt=''
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
            </div>

            <div className='col-md-6 col-sm-12 col-xs-12'>
              <div className='product__details-content quickview__content'>
                <h2>{product.name}</h2>
                {product.rating && product.rating > 0 ? (
                  <div className='product__rating-review'>
                    <div className='product__rating'>
                      <ProductRating ratingValue={product.rating} />
                    </div>
                    <div className='product__rating'>
                      <span>40+ Reviews</span>
                    </div>
                  </div>
                ) : (
                  <div className='product__rating'>
                    <span>No Reviews</span>
                  </div>
                )}

                {product.variation ? (
                  <div className='pro-details-size-color'>
                    <div className='pro-details-color-wrap'>
                      <span>Color</span>
                      <div className='pro-details-color-content'>
                        {product.variation.map((single, key) => {
                          return (
                            <label
                              className={`pro-details-color-content--single ${single.color}`}
                              key={key}
                            >
                              <input
                                type='radio'
                                value={single.color}
                                name='product-color'
                                checked={
                                  single.color === selectedProductColor
                                    ? "checked"
                                    : ""
                                }
                                onChange={() => {
                                  setSelectedProductColor(single.color);
                                  setSelectedProductSize(single.size[0].name);
                                  setProductStock(single.size[0].stock);
                                  setQuantityCount(1);
                                }}
                              />
                              <span className='checkmark'></span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                    <div className='pro-details-size'>
                      <span>Size</span>
                      <div className='pro-details-size-content'>
                        {product.variation &&
                          product.variation.map((single) => {
                            return single.color === selectedProductColor
                              ? single.size.map((singleSize, key) => {
                                  return (
                                    <label
                                      className={`pro-details-size-content--single`}
                                      key={key}
                                    >
                                      <input
                                        type='radio'
                                        value={singleSize.name}
                                        checked={
                                          singleSize.name ===
                                          selectedProductSize
                                            ? "checked"
                                            : ""
                                        }
                                        onChange={() => {
                                          setSelectedProductSize(
                                            singleSize.name
                                          );
                                          setProductStock(singleSize.stock);
                                          setQuantityCount(1);
                                        }}
                                      />
                                      <span className='size-name'>
                                        {singleSize.name}
                                      </span>
                                    </label>
                                  );
                                })
                              : "";
                          })}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className='pro__details-price-wrap mt-40'>
                  <div className='product__price'>
                    {discountedPrice !== null ? (
                      <>
                        <span>${finalDiscountedPrice}</span>
                        <span className='old'>${finalProductPrice}</span>
                      </>
                    ) : (
                      <span>${finalProductPrice} </span>
                    )}
                  </div>
                  <div className='dec__rang'>
                    <span>- {product.discount}%</span>
                  </div>
                </div>
                <div className='pro__details-quality'>
                  <div className='cart__plus-minus'>
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : 1
                        )
                      }
                      className='dec qtybutton'
                    >
                      -
                    </button>
                    <input
                      className='cart__plus-minus-box'
                      type='text'
                      value={quantityCount}
                      readOnly
                    />
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount < productStock - productCartQuantity
                            ? quantityCount + 1
                            : quantityCount
                        )
                      }
                      className='inc qtybutton'
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='pro__details-compare-wishlist'>
                  <div className='pro__details-compare'>
                    <button
                      className={compareItem !== undefined ? "active" : ""}
                      disabled={compareItem !== undefined}
                      title={
                        compareItem !== undefined
                          ? "Added to compare"
                          : "Add to compare"
                      }
                      onClick={() => addToCompare(product, addToast)}
                    >
                      Compare
                    </button>
                  </div>
                  <div className='pro__details-wishlist'>
                    <button
                      className={wishlistItem !== undefined ? "active" : ""}
                      disabled={wishlistItem !== undefined}
                      title={
                        wishlistItem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => addToWishlist(product, addToast)}
                    >
                      Add To Wishlist
                    </button>
                  </div>
                </div>
                <div className='pro__details-buy-now btn-hover'>
                  {productStock && productStock > 0 ? (
                    <button
                      onClick={() =>
                        addToCart(
                          product,
                          addToast,
                          quantityCount,
                          selectedProductColor,
                          selectedProductSize
                        )
                      }
                      disabled={productCartQuantity >= productStock}
                    >
                      Add To Cart
                    </button>
                  ) : (
                    <button disabled>Out of Stock</button>
                  )}
                </div>

                {product.category ? (
                  <div className='pro__details-meta '>
                    <span>Categories :</span>
                    <ul>
                      {product.category.map((single, key) => {
                        return (
                          <li key={key}>
                            <Link to={process.env.PUBLIC_URL + "/shop"}>
                              {single}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}

                {product.tag ? (
                  <div className='pro__details-meta'>
                    <span>Tags :</span>
                    <ul>
                      {product.tag.map((single, key) => {
                        return (
                          <li key={key}>
                            <Link
                              to={
                                process.env.PUBLIC_URL + "/shop-grid-standard"
                              }
                            >
                              {single}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ProductModal;
