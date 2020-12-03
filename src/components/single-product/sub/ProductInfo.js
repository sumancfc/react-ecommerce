import React from "react";

const ProductInfo = () => {
  return (
    <div className='col-lg-6 col-md-6'>
      <div className='product__details-content product__details-content-modify'>
        <span>Life Style</span>
        <h2>LaaVista Depro, FX 829 v1</h2>
        <div className='product__rating-review'>
          <div className='product__rating'>
            <i className='la la-star'></i>
            <i className='la la-star'></i>
            <i className='la la-star'></i>
            <i className='la la-star'></i>
            <i className='la la-star-half-o'></i>
          </div>
          <div className='product__rating'>
            <span>40+ Reviews</span>
          </div>
        </div>
        <div className='pro__details-color-wrap'>
          <span>Color:</span>
          <div className='pro__details-color-content'>
            <ul>
              <li className='green'></li>
              <li className='yellow'></li>
              <li className='red'></li>
              <li className='blue'></li>
            </ul>
          </div>
        </div>
        <div className='pro__details-size'>
          <span>Size:</span>
          <div className='pro__details-size-content'>
            <ul>
              <li>
                <a href='#'>s</a>
              </li>
              <li>
                <a href='#'>m</a>
              </li>
              <li>
                <a href='#'>xl</a>
              </li>
              <li>
                <a href='#'>xxl</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='pro__details-price-wrap'>
          <div className='product__price'>
            <span>$210.00</span>
            <span className='old'>$230.00</span>
          </div>
          <div className='dec__rang'>
            <span>- 30%</span>
          </div>
        </div>
        <div className='pro__details-quality'>
          <div className='cart__plus-minus'>
            <input
              className='cart__plus-minus-box'
              type='text'
              name='qtybutton'
              value='02'
            />
          </div>
        </div>
        <div className='pro__details-compare-wishlist'>
          <div className='pro__details-compare'>
            <a title='Add To Compare' href='#'>
              <i className='la la-retweet'></i> Compare
            </a>
          </div>
          <div className='pro__details-wishlist'>
            <a title='Add To Wishlist' href='#'>
              <i className='la la-heart-o'></i> Add to wish list
            </a>
          </div>
        </div>
        <div className='pro__details-buy-now btn-hover btn-hover-radious'>
          <a href='#'>Add To Cart</a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
