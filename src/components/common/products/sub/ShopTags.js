import React from "react";
import { setActiveSort } from "../../../../helpers/products";

const ShopTags = ({ tags, getSort }) => {
  return (
    <div className='sidebar__widget pt-40 mt-40 shop__sidebar-border'>
      <h4 className='sidebar__title'>Popular Tags</h4>
      <div className='sidebar__widget-tag mt-20'>
        {tags ? (
          <ul>
            {tags.map((tag, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={(e) => {
                      getSort("tag", tag);
                      setActiveSort(e);
                    }}
                  >
                    {tag}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No tags found"
        )}
      </div>
    </div>
  );
};

export default ShopTags;
