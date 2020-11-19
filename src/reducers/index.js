import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import compareReducer from "./compareReducers";
import productReducer from "./productReducers";
import wishlistReducer from "./wishlistReducers";

const rootReducer = combineReducers({
  cartData: cartReducer,
  productData: productReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
});

export default rootReducer;
