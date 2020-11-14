import {
  ADD_TO_WISHLIST,
  DELETE_ALL_FROM_WISHLIST,
  DELETE_FROM_WISHLIST,
} from "../constants";

export const addToWishlist = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Added To Wishlist", {
        appearance: "success",
        autoDismiss: true,
      });
    }
    dispatch({ type: ADD_TO_WISHLIST, payload: item });
    console.log(item);
  };
};

export const deleteFromWishlist = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_FROM_WISHLIST, payload: item });
  };
};

export const deleteAllFromWishlist = (addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Removed All from Wishlist", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_ALL_FROM_WISHLIST });
  };
};
