import { combineReducers } from "redux";
import compareReducer from "./compareReducers";
import productReducer from "./productReducers";
import wishlistReducer from "./wishlistReducers";

const rootReducer = combineReducers({
  productData: productReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
});

export default rootReducer;
