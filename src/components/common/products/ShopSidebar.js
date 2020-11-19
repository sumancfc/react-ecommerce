import React from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
} from "../../../helpers/products";
import ShopCategories from "./sub/ShopCategories";
import ShopColor from "./sub/ShopColor";
import ShopSearch from "./sub/ShopSearch";
import ShopTags from "./sub/ShopTags";

const ShopSidebar = ({ products, getSort }) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueColors = getIndividualColors(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className='sidebar__wrapper'>
      <ShopSearch />

      <ShopCategories categories={uniqueCategories} getSort={getSort} />

      <ShopColor colors={uniqueColors} getSort={getSort} />

      <ShopTags tags={uniqueTags} getSort={getSort} />
    </div>
  );
};

export default ShopSidebar;
