import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import { fetchProducts } from "../actions/productActions";
import products from "../api/productData.json";

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);

store.dispatch(fetchProducts(products));
// console.log(products);

export default store;
