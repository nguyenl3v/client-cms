import {ADDWISHLISH, DELETEWISHLISH} from "./constant";
const data = JSON.parse(localStorage.getItem("wishlist"));
const initialState = data ? data : [];

const wishlist = (state = initialState, action) => {
  let tempWishlist = [...state];
  let index;
  switch (action.type) {
    case ADDWISHLISH:
      index = findIndexWishlist(tempWishlist, action.payload.item);
      if (index === -1) {
        tempWishlist.push(action.payload.item);
      }
      localStorage.setItem("wishlist", JSON.stringify(tempWishlist));
      return tempWishlist;
    case DELETEWISHLISH:
      index = findIndexWishlist(tempWishlist, action.payload.item);
      if (index !== -1) {
        tempWishlist.splice(index, 1);
      }
      localStorage.setItem("wishlist", JSON.stringify(tempWishlist));
      return tempWishlist;
    default:
      return state;
  }
};
const findIndexWishlist = (wishlist, action) => {
  let index = -1;
  for (var i = 0; i < wishlist.length; i++) {
    if (wishlist[i]._id === action._id) {
      index = i;
    }
  }
  return index;
};
export default wishlist;
