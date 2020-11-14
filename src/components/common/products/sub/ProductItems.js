import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../../helpers/products";
import { addToWishlist } from "../../../../actions/wishlistActions";
import ProductItem from "./ProductItem";

const ProductItems = ({ products, addToWishlist, wishlistItems }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <ProductItem
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

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productData.products,
      ownProps.category,
      ownProps.limit,
      ownProps.type
    ),
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductItems);
