import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../../helpers/products";
import { addToWishlist } from "../../../../actions/wishlistActions";
import { addToCart } from "../../../../actions/cartActions";
import { addToCompare } from "../../../../actions/compareActions";
import ProductItem from "./ProductItem";

const ProductItems = ({
  products,
  addToCart,
  cartItems,
  addToWishlist,
  wishlistItems,
  addToCompare,
  compareItems,
}) => {
  return (
    <>
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            cartItem={
              cartItems.filter((cartItem) => cartItem.id === product.id)[0]
            }
            addToWishlist={addToWishlist}
            wishlistItem={
              wishlistItems.filter(
                (wishlistItem) => wishlistItem.id === product.id
              )[0]
            }
            addToCompare={addToCompare}
            compareItem={
              compareItems.filter(
                (compareItem) => compareItem.id === product.id
              )[0]
            }
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productData.products,
      ownProps.category,
      ownProps.limit,
      ownProps.type
    ),
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductItems);
