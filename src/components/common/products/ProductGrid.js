import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const ProductGrid = () => {
  let datas = [
    {
      id: 1,
      image: "assets/images/product/1.jpg",
      category: "Chair",
      price: "201",
      link: "/shop",
      title: "Golden Easy Spot Chair.",
      discount: "",
      tag: "Best Seller",
    },
    {
      id: 2,
      image: "assets/images/product/2.jpg",
      category: "Chair",
      price: "201",
      link: "/shop",
      title: "Golden Easy Spot Chair.",
    },
    {
      id: 3,
      image: "assets/images/product/3.jpg",
      category: "Chair",
      price: "201",
      link: "/shop",
      title: "Golden Easy Spot Chair.",
      discount: "-10%",
      old: "230",
    },
    {
      id: 4,
      image: "assets/images/product/4.jpg",
      category: "Chair",
      price: "201",
      link: "/shop",
      title: "Golden Easy Spot Chair.",
      outOfStock: "Stock <br /> Out",
    },
    {
      id: 5,
      image: "assets/images/product/5.jpg",
      category: "Chair",
      price: "201",
      link: "/shop",
      title: "Golden Easy Spot Chair.",
      new: "New",
    },
  ];
  return (
    <div className='row'>
      {datas.map((data) => (
        <div key={data.id} className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
          <div className='product__wrap mb-35'>
            <div className='product__img mb-15'>
              <Link to='/'>
                <img src={data.image} alt='product' />
              </Link>
              {data.discount && (
                <span className='price__dec'>{data.discount}</span>
              )}
              {data.outOfStock && (
                <span className='new__stock'>
                  <span></span>
                </span>
              )}
              {data.new && <span className='price__dec font__dec'>NEW</span>}
              <div className='product__action'>
                <Link
                  data-toggle='modal'
                  data-target='#exampleModal'
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
              <span>{data.category}</span>
              <h4>
                <Link to='/product'>{data.title}</Link>
              </h4>
              <div className='price__add-to-cart'>
                <div className='product__price'>
                  <span>${data.price}</span>
                  {data.old && <span className='old'>${data.old}</span>}
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
    </div>
  );
};

export default ProductGrid;
