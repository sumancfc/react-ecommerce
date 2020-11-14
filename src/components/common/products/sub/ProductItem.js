import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";

const ProductItem = ({ product }) => {
  const [sModal, setSModal] = useState(false);
  return (
    <Fragment>
      <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
        <div className='product__wrap mb-35'>
          <div className='product__img mb-15'>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img src={product.image[0]} alt={product.name} />
            </Link>
            {product.discount ? (
              <span className='price__dec'>{product.discount}</span>
            ) : (
              ""
            )}
            {product.outOfStock ? (
              <span className='new__stock'>
                <span>{product.outOfStock}</span>
              </span>
            ) : (
              ""
            )}
            {product.new ? (
              <span className='price__dec font__dec'>NEW</span>
            ) : (
              ""
            )}
            <div className='product__action'>
              <Link onClick={() => setSModal(true)} title='Quick View'>
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

      <ProductModal
        onHide={() => setSModal(false)}
        show={sModal}
        product={product}
      />
    </Fragment>
  );
};

export default ProductItem;
