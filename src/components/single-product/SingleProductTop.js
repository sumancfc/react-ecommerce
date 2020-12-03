import React from "react";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscount } from "../../helpers/products";
import ProductImageSlider from "./sub/ProductImageSlider";
import ProductInfo from "./sub/ProductInfo";

const SingleProductTop = ({ product }) => {
  const cartItems = useSelector((state) => state.cartData);
  const wishlistItem = useSelector((state) =>
    state.wishlistData.filter((wishlistItem) => wishlistItem.id === product.id)
  )[0];
  const compareItem = useSelector((state) =>
    state.compareData.filter((compareItem) => compareItem.id === product.id)
  )[0];

  const { addToast } = useToasts();

  // console.log(compareItem);

  const discountedPrice = getDiscount(product.price, product.discount);
  const finalProductPrice = Number(product.price).toFixed(2);
  const finalDiscountedPrice = Number(discountedPrice).toFixed(2);

  return (
    <div className='product__details-area pt-90 pb-90'>
      <div className='container'>
        <div className='row'>
          <ProductImageSlider product={product} />

          <ProductInfo
            product={product}
            discountedPrice={discountedPrice}
            finalProductPrice={finalProductPrice}
            finalDiscountedPrice={finalDiscountedPrice}
            cartItems={cartItems}
            wishlistItem={wishlistItem}
            compareItem={compareItem}
            addToast={addToast}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductTop;
