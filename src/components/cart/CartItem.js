import React from "react";
import {API} from "../../config/defaultApi";

export default function CartItem({ cart, deleteCart, addQuantity, clearCart }) {
  const deleteCartItem = cartItem => {
    deleteCart(cartItem);
  };
  const quantity = (item, quantity) => {
    if (quantity > 0) {
      addQuantity(item, quantity);
    } else {
      return;
    }
  };
  const clearCarts = () => {
    clearCart();
  };
  return (
    <div >
      <h2 className="text-center">shoppingCart</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">image</th>
            <th className="text-center">color</th>
            <th className="text-center">size</th>
            <th className="text-center">name</th>
            <th className="text-center">price</th>
            <th className="text-center">quantity</th>
            <th className="text-center">delete</th>
            <th className="text-center">total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td className="text-center">
                <img style={{width:"50px"}}
                  className="imagePreview"
                  src={`${API}/upload/product/${item.image[0]}`}
                  alt="cartImage"
                />
              </td>
              <td className="text-center">{item.color}</td>
              <td className="text-center">{item.size}</td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.price}</td>
              <td className="text-center">
                <span
                  className="add-quantity"
                  onClick={() => quantity(item, item.quantity + 1)}
                >
                  +
                </span>
                {item.quantity}
                <span
                  className="redution-quantity"
                  onClick={() => quantity(item, item.quantity - 1)}
                >
                  -
                </span>
              </td>
              <td className="text-center" onClick={() => deleteCartItem(item)}>
                <i className="fa fa-trash" />
              </td>
              <td className="text-center">{item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td onClick={() => clearCarts()}>
              <a className="btn btn-success" href="javascrip:void()">clear cart</a>
            </td>
            <td>
              <a className="btn btn-success" href="/checkout">check out</a>
            </td>
            <td>
            <a className="btn btn-success" href="/">Continue Shopping</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
