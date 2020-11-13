import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../../../helpers/products";

const ProductItem = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
          <div className='product__wrap mb-35'>
            <div className='product__img mb-15'>
              <Link to='/'>
                <img src={product.image[0]} alt='product' />
              </Link>
              {product.discount && (
                <span className='price__dec'>{product.discount}</span>
              )}
              {product.outOfStock && (
                <span className='new__stock'>
                  <span></span>
                </span>
              )}
              {product.new && <span className='price__dec font__dec'>NEW</span>}
              <div className='product__action'>
                <Link
                  product-toggle='modal'
                  product-target='#exampleModal'
                  title='Quick View'
                  to='#'
                >
                  <i className='la la-plus'></i>
                </Link>
                <Link title='Wishlist' to='#'>
                  <i className='la la-heart-o'></i>
                </Link>
                <Link title='Compare' to='#'>
                  <i className='la la-retweet'></i>
                </Link>
              </div>
            </div>
            <div className='product__content'>
              <span>{product.category}</span>
              <h4>
                <Link to='/product'>{product.name}</Link>
              </h4>
              <div className='price__add-to-cart'>
                <div className='product__price'>
                  <span>${product.price}</span>
                  {product.old && <span className='old'>${product.old}</span>}
                </div>
                <div className='product-add-to-cart'>
                  <Link title='Add To Cart' to='/'>
                    + Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productData.products,
      ownProps.category,
      ownProps.limit,
      ownProps.type
    ),
  };
};

export default connect(mapStateToProps)(ProductItem);
