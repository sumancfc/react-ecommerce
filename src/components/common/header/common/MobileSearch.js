import React from "react";

const MobileSearch = () => {
  return (
    <div className='offcanvas__mobile-search'>
      <form action='#'>
        <input
          type='search'
          placeholder='Search ...'
          onChange={(e) => e.target.value}
        />
        <button type='submit'>
          <i className='fa fa-search' />
        </button>
      </form>
    </div>
  );
};

export default MobileSearch;
