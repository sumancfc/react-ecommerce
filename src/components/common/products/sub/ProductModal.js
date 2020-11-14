import React, { useState, useEffect, Fragment, useRef } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const ProductModal = (props) => {
  const { product } = props;

  //   const gallerySwiperRef = useRef(null);
  //   const thumbnailSwiperRef = useRef(null);

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
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>

        <div className='modal-body'>
          <div className='row'>
            <div className='col-md-5 col-sm-12 col-xs-12'>
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

            <div className='col-md-7 col-sm-12 col-xs-12'>
              <div className='product__details-content quickview__content'>
                <span>{product.category}</span>
                <h2>{product.name}</h2>
                <div className='product__ratting-review'>
                  <div className='product__ratting'>
                    <i className='la la-star'></i>
                    <i className='la la-star'></i>
                    <i className='la la-star'></i>
                    <i className='la la-star'></i>
                    <i className='la la-star-half-o'></i>
                  </div>
                  <div className='product__review'>
                    <span>40+ Reviews</span>
                  </div>
                </div>
                <div className='pro__details-color-wrap'>
                  <span>Color:</span>
                  <div className='pro__details-color-content'>
                    <ul>
                      <li className='green'></li>
                      <li className='yellow'></li>
                      <li className='red'></li>
                      <li className='blue'></li>
                    </ul>
                  </div>
                </div>
                <div className='pro__details-size'>
                  <span>Size:</span>
                  <div className='pro__details-size-content'>
                    <ul>
                      <li>
                        <a href='#'>s</a>
                      </li>
                      <li>
                        <a href='#'>m</a>
                      </li>
                      <li>
                        <a href='#'>xl</a>
                      </li>
                      <li>
                        <a href='#'>xxl</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='pro__details-price-wrap'>
                  <div className='product__price'>
                    <span>${product.price}</span>
                    <span className='old'>${product.price}</span>
                  </div>
                  <div className='dec__rang'>
                    <span>- 30%</span>
                  </div>
                </div>
                <div className='pro__details-quality'>
                  <div className='cart__plus-minus'>
                    <input
                      className='cart__plus-minus-box'
                      type='text'
                      name='qtybutton'
                      value='02'
                    />
                  </div>
                </div>
                <div className='pro__details-compare-wishlist'>
                  <div className='pro__details-compare'>
                    <a title='Add To Compare' href='#'>
                      <i className='la la-retweet'></i> Compare
                    </a>
                  </div>
                  <div className='pro__details-wishlist'>
                    <a title='Add To Wishlist' href='#'>
                      <i className='la la-heart-o'></i> Add to wish list
                    </a>
                  </div>
                </div>
                <div className='pro__details-buy-now btn-hover btn-hover-radious'>
                  <a href='#'>Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default connect()(ProductModal);
