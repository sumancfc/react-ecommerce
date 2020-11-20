import React from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscount } from "../../../../helpers/products";

const HeaderMenuCart = ({ cartData, deleteFromCart }) => {
  const { addToast } = useToasts();
  let cartTotalPrice = 0;

  const closeCart = () => {
    const clsCart = document.querySelector(".shopping__cart-content");
    clsCart.classList.remove("show");
  };
  return (
    <div className='shopping__cart-content'>
      {cartData && cartData.length >= 1 ? (
        <>
          <div className='shopping__cart-title'>
            <h4>Your Cart</h4>
            <Link className='shopping__cart-close' to='#' onClick={closeCart}>
              <i className='la la-close'></i>
            </Link>
          </div>
          <ul>
            {cartData.map((single, i) => {
              const discountedPrice = getDiscount(
                single.price,
                single.discount
              );
              const finalProductPrice = Number(single.price).toFixed(2);
              const finalDiscountedPrice = Number(discountedPrice).toFixed(2);

              discountedPrice != null
                ? (cartTotalPrice += finalDiscountedPrice * single.quantity)
                : (cartTotalPrice += finalProductPrice * single.quantity);

              return (
                <li key={i} className='shopping__cart-single'>
                  <div className='shopping__cart-img'>
                    <Link to={"/product/" + single.id}>
                      <img
                        src={single.image[0]}
                        alt={single.name}
                        className='img-fluid'
                      />
                    </Link>
                  </div>
                  <div className='shopping__cart-s-title'>
                    <h4>
                      <Link to={"/product/" + single.id}>{single.name}</Link>
                    </h4>
                    <span>
                      $
                      {discountedPrice !== null
                        ? finalDiscountedPrice
                        : finalProductPrice}
                    </span>
                  </div>
                  <div className='shopping__cart-s-delete'>
                    <button onClick={() => deleteFromCart(single, addToast)}>
                      <i className='la la-trash'></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className='shopping__cart-bottom'>
            <div className='shopping__cart-total'>
              <h4>
                Subtotal
                <span className='shopping__cart-price'>
                  {cartTotalPrice.toFixed(2)}
                </span>
              </h4>
            </div>
            <div className='shopping__cart-btn btn-hover default-btn text-center'>
              <Link className='default-btn' to='/cart'>
                View Cart
              </Link>
              <Link className='black' to='/checkout'>
                Continue to Checkout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <p className='text-center'>No items added to cart</p>
      )}
    </div>
  );
};

export default HeaderMenuCart;
