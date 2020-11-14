import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../../helpers/products";
import ProductItem from "./ProductItem";

const ProductItems = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
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
  };
};

export default connect(mapStateToProps)(ProductItems);
