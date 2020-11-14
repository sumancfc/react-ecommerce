import { FETCH_PRODUCTS_SUCCESS } from "../constants";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload,
    };
  }
  return state;
};

export default productReducer;
