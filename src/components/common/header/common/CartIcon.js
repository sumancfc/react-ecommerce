import React from "react";
import { connect } from "react-redux";
import { deleteFromCart } from "../../../../actions/cartActions";
import HeaderMenuCart from "./HeaderMenuCart";

const CartIcon = ({ cartItems, deleteFromCart }) => {
  // console.log(cartItems);
  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("show");
  };

  return (
    <div className='header__cart header__cart-white'>
      <button className='header__cart-active' onClick={(e) => handleClick(e)}>
        <i className='la la-shopping-cart'></i> <br />
        <span className='cart__items-count'>
          {cartItems && cartItems.length ? cartItems.length : 0}
        </span>
      </button>
      <HeaderMenuCart cartData={cartItems} deleteFromCart={deleteFromCart} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
