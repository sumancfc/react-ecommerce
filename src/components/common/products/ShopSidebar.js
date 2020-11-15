import React from "react";

const ShopSidebar = () => {
  return (
    <div className='sidebar__wrapper'>
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
      <div className='sidebar__widget shop__sidebar-border pt-40'>
        <h4 className='sidebar__title'>Shop By Categories</h4>
        <div className='shop__category mt-20'>
          <ul id='faq'>
            <li>
              <a
                data-toggle='collapse'
                data-parent='#faq'
                href='#shop__category-1'
              >
                Women Fashion <i className='la la-angle-down'></i>
              </a>
              <ul
                id='shop__category-1'
                className='panel-collapse collapse show'
              >
                <li>
                  <a href='#'>Dress </a>
                </li>
                <li>
                  <a href='#'>Shoes</a>
                </li>
                <li>
                  <a href='#'>Sunglasses </a>
                </li>
                <li>
                  <a href='#'>Sweater </a>
                </li>
                <li>
                  <a href='#'>Handbag </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                data-toggle='collapse'
                data-parent='#faq'
                href='#shop__category-2'
              >
                Men Fashion <i className='la la-angle-down'></i>
              </a>
              <ul id='shop__category-2' className='panel-collapse collapse'>
                <li>
                  <a href='#'>Shirt </a>
                </li>
                <li>
                  <a href='#'>Shoes</a>
                </li>
                <li>
                  <a href='#'>Sunglasses </a>
                </li>
                <li>
                  <a href='#'>Sweater </a>
                </li>
                <li>
                  <a href='#'>Jacket </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                data-toggle='collapse'
                data-parent='#faq'
                href='#shop__category-3'
              >
                Furniture <i className='la la-angle-down'></i>
              </a>
              <ul id='shop__category-3' className='panel-collapse collapse'>
                <li>
                  <a href='#'> Chair</a>
                </li>
                <li>
                  <a href='#'>Lift Chair</a>
                </li>
                <li>
                  <a href='#'>Bunk Bed</a>
                </li>
                <li>
                  <a href='#'>Computer Desk</a>
                </li>
                <li>
                  <a href='#'>Bookcase</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>Lamp</a>
            </li>
            <li>
              <a href='#'>Electronics</a>
            </li>
            <li>
              <a href='#'>Accessories</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='shop__price-filter mt-35 shop__sidebar-border pt-40 sidebar__widget'>
        <h4 className='sidebar__title'>Price Filter</h4>
        <div className='price__filter mt-20'>
          <span>Range: $100.00 - 1.300.00 </span>
          <div id='slider__range'></div>
          <div className='price__slider-amount'>
            <div className='label-input'>
              <input
                type='text'
                id='amount'
                name='price'
                placeholder='Add Your Price'
              />
            </div>
            <button type='button'>Filter</button>
          </div>
        </div>
      </div>
      <div className='sidebar__widget shop__sidebar-border pt-40 mt-40'>
        <h4 className='sidebar__title'>Refine By</h4>
        <div className='sidebar__widget-list mt-20'>
          <ul>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' />
                <a href='#'>
                  On Sale <span>4</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  New <span>5</span>
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  In Stock <span>6</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebar__widget pt-40 mt-40 shop__sidebar-border'>
        <h4 className='sidebar__title'>Colour</h4>
        <div className='sidebar__widget-list mt-20'>
          <ul>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  Green <span>7</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  Cream <span>8</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  Blue <span>9</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  Black <span>3</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebar__widget pt-40 mt-40 shop__sidebar-border'>
        <h4 className='sidebar__title'>Size</h4>
        <div className='sidebar__widget-list mt-20'>
          <ul>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  XL <span>4</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  L <span>5</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  SM <span>6</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
            <li>
              <div className='sidebar__widget-list-left'>
                <input type='checkbox' value='' />
                <a href='#'>
                  XXL <span>7</span>{" "}
                </a>
                <span className='checkmark'></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebar__widget pt-40 mt-40 shop__sidebar-border'>
        <h4 className='sidebar__title'>Popular Tags</h4>
        <div className='sidebar__widget-tag mt-20'>
          <ul>
            <li>
              <a href='#'>Clothing</a>
            </li>
            <li>
              <a href='#'>Accessories</a>
            </li>
            <li>
              <a href='#'>For Men</a>
            </li>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>
              <a href='#'>Fashion</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
