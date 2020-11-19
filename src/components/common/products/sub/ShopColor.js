import React from "react";
import { setActiveSort } from "../../../../helpers/products";

const ShopColor = ({ colors, getSort }) => {
  return (
    <div className='sidebar__widget pt-40 mt-40 shop__sidebar-border'>
      <h4 className='sidebar__title'>Colors</h4>
      <div className='sidebar__widget-list mt-20'>
        {colors ? (
          <ul>
            <li>
              <div className='sidebar__widget-list-left'>
                <button
                  onClick={(e) => {
                    getSort("color", "");
                    setActiveSort(e);
                  }}
                >
                  <span className='checkmark' /> All Colors
                </button>
              </div>
            </li>
            {colors.map((color, key) => {
              return (
                <li key={key}>
                  <div className='sidebar__widget-list-left'>
                    <button
                      onClick={(e) => {
                        getSort("color", color);
                        setActiveSort(e);
                      }}
                    >
                      <span className='checkmark' /> {color}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No Colors found"
        )}
      </div>
    </div>
  );
};

export default ShopColor;
