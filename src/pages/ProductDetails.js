import React from "react";
import { useSelector } from "react-redux";
import SingleProductDesc from "../components/single-product/SingleProductDesc";
import SingleProductTop from "../components/single-product/SingleProductTop";
import Layout from "../components/Layouts";
import Breadcrumb from "../components/common/breadcrumb";

const ProductDetails = ({ match }) => {
  const itemId = match.params.id;

  const product = useSelector(
    (state) =>
      state.productData.products.filter((single) => single.id == itemId)[0]
  );

  console.log(product);
  return (
    <Layout>
      <Breadcrumb pageTitle='Product Details' />

      <SingleProductTop product={product} />

      <SingleProductDesc />
    </Layout>
  );
};

export default ProductDetails;
