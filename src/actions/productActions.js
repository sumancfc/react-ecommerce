import { FETCH_PRODUCTS_SUCCESS } from "../constants";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

//get Products
export const fetchProducts = (products) => {
  return (dispatch) => {
    dispatch(fetchProductsSuccess(products));
  };
};
