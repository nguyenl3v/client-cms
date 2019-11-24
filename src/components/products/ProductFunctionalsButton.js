import React from "react";
import { FunctionalsButton } from "./styled/GridViewItemContent";

export default function ProductFunctionalsButton({
  item,
  wl,
  setID,
  setModal,
  addCart,
  showquickview,
  deleteWl,
  addToWishlist,
  setModalCartItem
}) {
  const checkwishlist = product => {
    var check = wl.find(item => item._id === product._id);
    if (check) {
      return <i className="fa fa-check" onClick={() => deleteWl(product)}></i>;
    } else {
      return (
        <i className="fa fa-heart-o" onClick={() => addToWishlist(product)}></i>
      );
    }
  };
  const addToCart = p => {
    const cartItem = {
      name: p.name,
      price: p.price,
      priceSale: p.priceSale,
      description: p.description,
      _id: p._id,
      quantity: p.quantity,
      image: p.image,
      color: p.color[0],
      size: p.size[0]
    };
    setModalCartItem(cartItem);
    addCart(cartItem);
    setModal(true);
    setID(p._id);
  };
  const showQuickView = product => {
    showquickview(product);
  };
  return (
    <FunctionalsButton>
      <div className="add-cart-wrapper" onClick={() => addToCart(item)}>
        <i className="fa fa-cart-plus"></i>
      </div>
      <div className="add-wislish">{checkwishlist(item)}</div>
      <div className="quickview" onClick={() => showQuickView(item)}>
        <i className="fa fa-eye" aria-hidden="true"></i>
      </div>
    </FunctionalsButton>
  );
}
