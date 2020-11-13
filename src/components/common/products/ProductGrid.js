import React from "react";
import SectionTitle from "../section-title";
import ProductItem from "./sub/ProductItem";
import "./Products.css";

const ProductGrid = ({ category, limit }) => {
  return (
    <div className='product__area pt-80 pb-100'>
      <div className='container'>
        <SectionTitle
          title='Best Products'
          desc='lorem ipsum lorem ipsum lorem ipsumv lorem ipsum'
        />
        <div className='row'>
          <ProductItem category={category} limit={limit} type='bestSeller' />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
