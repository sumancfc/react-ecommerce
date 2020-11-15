import React from "react";
import ProductGridList from "./ProductGridList";

const ShopProducts = ({ products, layout }) => {
  return (
    <div className='shop__bottom-area'>
      {/* <div className='tab-content jump'> */}
      <div className={`row ${layout ? layout : ""}`}>
        <ProductGridList products={products} />
      </div>
    </div>
  );
};

export default ShopProducts;
