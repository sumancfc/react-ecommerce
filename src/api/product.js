import products from "./productData.json";

const TIMEOUT = 1000;

export default {
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
