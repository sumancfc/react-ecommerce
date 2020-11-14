import { combineReducers } from "redux";
import productReducer from "./productReducers";
import wishlistReducer from "./wishlistReducers";

const rootReducer = combineReducers({
  productData: productReducer,
  wishlistData: wishlistReducer,
});

export default rootReducer;
