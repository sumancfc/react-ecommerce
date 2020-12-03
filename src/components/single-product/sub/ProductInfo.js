import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../actions/cartActions";
import { addToWishlist } from "../../../actions/wishlistActions";
import { addToCompare } from "../../../actions/compareActions";
import { getProductCartQuantity } from "../../../helpers/products";

const ProductInfo = ({
  product,
  discountedPrice,
  finalProductPrice,
  finalDiscountedPrice,
  cartItems,
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

  const productCartQuantity = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  return (
    <div className='col-lg-6 col-md-6'>
      <div className='product__details-content product__details-content-modify'>
        <h2>{product.name}</h2>
        <div className='product__rating-review'>
          <div className='product__rating'>
            <i className='la la-star'></i>
            <i className='la la-star'></i>
            <i className='la la-star'></i>
            <i className='la la-star'></i>
            <i className='la la-star-half-o'></i>
          </div>
          <div className='product__rating'>
            <span>40+ Reviews</span>
          </div>
        </div>

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
                          single.color === selectedProductColor ? "checked" : ""
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
                                  singleSize.name === selectedProductSize
                                    ? "checked"
                                    : ""
                                }
                                onChange={() => {
                                  setSelectedProductSize(singleSize.name);
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
                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
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
                    <Link to={process.env.PUBLIC_URL + "/shop"}>{single}</Link>
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
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
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
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductInfo);
