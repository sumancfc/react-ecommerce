import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscount } from "../../../../helpers/products";
import ProductModal from "./ProductModal";

const ProductGLSingle = ({ product, addToWishlist, wishlistItem }) => {
  const { addToast } = useToasts();
  const [sModal, setSModal] = useState(false);

  const discountedPrice = getDiscount(product.price, product.discount);
  const finalProductPrice = product.price;
  const finalDiscountedPrice = discountedPrice;

  return (
    <>
      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6 display__list'>
        <div className='product__wrap mb-35'>
          <div className='product__img mb-15'>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                src={process.env.PUBLIC_URL + product.image[0]}
                alt={product.name}
              />
            </Link>
            {product.discount ? (
              <span className='price__dec'>-{product.price}%</span>
            ) : (
              ""
            )}

            {product.new ? (
              <span className='price__dec font__dec'>NEW</span>
            ) : (
              ""
            )}

            <div className='product__action'>
              <Link onClick={() => setSModal(true)} title='Quick View'>
                <i className='la la-plus'></i>
              </Link>
              <Link
                className={wishlistItem !== undefined ? "active" : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                onClick={() => addToWishlist(product, addToast)}
                to='#'
              >
                <i className='la la-heart-o'></i>
              </Link>
              <Link title='Compare' to='#'>
                <i className='la la-retweet'></i>
              </Link>
            </div>
          </div>
          <div className='product__content'>
            <span>{product.category}</span>
            <h4>
              <Link to='product-details.html'>{product.name}</Link>
            </h4>
            <div className='price__add-to-cart'>
              <div className='product__price'>
                {discountedPrice !== null ? (
                  <>
                    <span>${finalDiscountedPrice}</span>
                    <span className='old-price'>${finalProductPrice}</span>
                  </>
                ) : (
                  <span>${finalProductPrice} </span>
                )}
              </div>
              <div className='product-add-to-cart'>
                <Link title='Add To Cart' to='#'>
                  + Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='shop__list-wrap mb-30'>
          <div className='row'>
            <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6'>
              <div className='product__list-img'>
                <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                  <img
                    src={process.env.PUBLIC_URL + product.image[0]}
                    alt={product.name}
                  />
                </Link>
                <div className='product__list-quickview'>
                  <Link onClick={() => setSModal(true)} title='Quick View'>
                    <i className='la la-plus'></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-8 col-lg-7 col-md-6 col-sm-6'>
              <div className='shop__list-content'>
                <span>{product.category}</span>
                <h4>
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                    {product.name}
                  </Link>
                </h4>
                <div className='pro__list-price'>
                  {discountedPrice !== null ? (
                    <>
                      <span>${finalDiscountedPrice}</span>{" "}
                      <span className='old-price'>${finalProductPrice}</span>
                    </>
                  ) : (
                    <span>${finalProductPrice} </span>
                  )}
                </div>
                <p>{product.shortDetails}</p>
                <div className='product__list-action'>
                  <Link
                    className={wishlistItem !== undefined ? "active" : ""}
                    disabled={wishlistItem !== undefined}
                    title={
                      wishlistItem !== undefined
                        ? "Added to wishlist"
                        : "Add to wishlist"
                    }
                    onClick={() => addToWishlist(product, addToast)}
                    to='#'
                  >
                    <i className='la la-heart-o'></i>
                  </Link>
                  <Link title='Compare' to='#'>
                    <i className='la la-retweet'></i>
                  </Link>
                  <Link title='Add To Cart' to='#'>
                    <i className='la la-shopping-cart'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductModal
        onHide={() => setSModal(false)}
        show={sModal}
        product={product}
      />
    </>
  );
};

export default ProductGLSingle;
