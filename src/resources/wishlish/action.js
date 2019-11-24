import {ADDWISHLISH, DELETEWISHLISH} from "./constant";

export const addWishlist = item => {
  return {
    type: ADDWISHLISH,
    payload: {
      item
    }
  };
};
export const deleteWishlist = item => {
  return {
    type: DELETEWISHLISH,
    payload: {
      item
    }
  };
};
