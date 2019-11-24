import {ADDTOCART, ADDQUANTITY, DELETECART, CLEARCART} from "./constants";
export const addCart = item => {
  return {
    type: ADDTOCART,
    payload: {
      item
    }
  };
};
export const addQuantity = (item,quantity) => {
  return {
    type: ADDQUANTITY,
    payload: {
      item,
      quantity
    }
  };
};
export const deleteCart = item => {
  return {
    type: DELETECART,
    payload: {
      item
    }
  };
};
export const clearCart = () => {
  return {
    type: CLEARCART,
  };
};

