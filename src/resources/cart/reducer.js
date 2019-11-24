import { ADDTOCART, ADDQUANTITY, DELETECART, CLEARCART } from "./constants";
const data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? data : [];

const shoppingCart = (state = initialState, action) => {
  let tempCart = [...state];
  let index;
  let cartIndex;
  let updateCart = true;
  switch (action.type) {
    case ADDTOCART:
      index = findIndextoCart(state, action.payload.item);
      if (index !== -1) {
        cartIndex = loopCartIndex(tempCart, action.payload.item);
        if (cartIndex !== -1) {
          tempCart[cartIndex].quantity += action.payload.item.quantity;
          updateCart = false;
        }
        if (updateCart) {
          tempCart.push(action.payload.item);
        }
      } else {
        tempCart.push(action.payload.item);
      }
      localStorage.setItem("cart", JSON.stringify(tempCart));
      return tempCart;
    case ADDQUANTITY:
      index = findIndextoCart(state, action.payload.item);
      if (index !== -1) {
        cartIndex = loopCartIndex(tempCart, action.payload.item);
        tempCart[cartIndex].quantity = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(tempCart));
      return tempCart;
    case DELETECART:
      index = findIndextoCart(state, action.payload.item);
      if (index !== -1) {
        cartIndex = loopCartIndex(tempCart, action.payload.item);
        tempCart.splice(cartIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(tempCart));
      return tempCart;
    case CLEARCART:
      tempCart = [];
      localStorage.removeItem("cart");
      return tempCart;
    default:
      return state;
  }
};
const findIndextoCart = (cart, action) => {
  let index = -1;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]._id === action._id) {
      index = i;
    }
  }
  return index;
};
const loopCartIndex = (cart, action) => {
  let cartIndex = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].color === action.color && cart[i].size === action.size) {
      cartIndex = i;
      break;
    }
  }
  return cartIndex;
};
export default shoppingCart;
