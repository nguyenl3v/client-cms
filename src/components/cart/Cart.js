import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cart, addQuantity, deleteCart, clearCart }) {
  return (
    <div className="container">
      {cart.length > 0 ? (
        <CartItem
          cart={cart}
          addQuantity={addQuantity}
          deleteCart={deleteCart}
          clearCart={clearCart}
        />
      ) : (
        <div className="text-center">
          <h2>cart empty</h2>
          <a href="/">Continue Shopping</a>
        </div>
      )}
    </div>
  );
}
