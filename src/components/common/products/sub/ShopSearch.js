import React from "react";

const ShopSearch = () => {
  return (
    <div className='sidebar__widget'>
      <h4 className='sidebar__title'>Search</h4>
      <div className='sidebar__search mb-40 mt-20'>
        <form className='sidebar__side__menu-search-form' action='#'>
          <input type='text' placeholder='Search here...' />
          <button>
            <i className='la la-search'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
