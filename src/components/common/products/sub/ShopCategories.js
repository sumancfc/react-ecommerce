import React from "react";
import { setActiveSort } from "../../../../helpers/products";

const ShopCategories = ({ categories, getSort }) => {
  return (
    <div className='sidebar__widget shop__sidebar-border pt-40'>
      <h4 className='sidebar__title'>Categories</h4>
      <div className='sidebar__widget-list mt-20'>
        {categories ? (
          <ul>
            <li>
              <div className='sidebar__widget-list-left'>
                <button
                  onClick={(e) => {
                    getSort("category", "");
                    setActiveSort(e);
                  }}
                >
                  <span className='checkmark' /> All Categories
                </button>
              </div>
            </li>
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className='sidebar__widget-list-left'>
                    <button
                      onClick={(e) => {
                        getSort("category", category);
                        setActiveSort(e);
                      }}
                    >
                      <span className='checkmark' /> {category}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>
    </div>
  );
};

export default ShopCategories;
