import React from "react";
import { setActiveLayout } from "../../../helpers/products";

const ShopTopbar = ({
  layout,
  getFilterSort,
  productNum,
  productSortedNum,
}) => {
  return (
    <div className='shop__topbar-wrapper'>
      <div className='shop__topbar-left'>
        <div className='view__mode nav'>
          <a
            className='active'
            href='#shop-1'
            data-toggle='tab'
            onCLick={(e) => layout("grid two-column")}
          >
            <i className='la la-th'></i>
          </a>
          <a href='#shop-2' data-toggle='tab'>
            <i className='la la-list-ul'></i>
          </a>
        </div>
        <p>
          Showing {productSortedNum} of {productNum} result
        </p>
      </div>
      <div className='product__sorting-wrapper'>
        <div className='product__show shorting__style'>
          <label>Sort by:</label>
          <select onChange={(e) => getFilterSort("filterSort", e.target.value)}>
            <option value='default'>Default</option>
            <option value='priceHighToLow'>Price - High to Low</option>
            <option value='priceLowToHigh'>Price - Low to High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopTopbar;
