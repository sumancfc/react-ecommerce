import React from "react";
import { connect } from "react-redux";
import { addToWishlist } from "../../../../actions/wishlistActions";
import ProductGLSingle from "./ProductGLSingle";

const ProductGridList = ({ products, addToWishlist, wishlistItems }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <ProductGLSingle
            key={product.id}
            product={product}
            addToWishlist={addToWishlist}
            wishlistItem={
              wishlistItems.filter(
                (wishlistItem) => wishlistItem.id === product.id
              )[0]
            }
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.wishlistData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGridList);
