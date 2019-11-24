import React, { useState } from "react";
import { API } from "../../config/defaultApi";
import { ToastContainer } from "react-toastify";

function CheckOut({ cart, addDataOrder }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddess] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState(0);
  const [phone, setPhone] = useState(0);
  const addOrder = e => {
    e.preventDefault();
    addDataOrder(name, email, address, city, province, postalCode, phone, cart);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <div className="row">
        <div className="col-8">
          <h2>Checkout</h2>
          <hr />
          <form method="post" onSubmit={e => addOrder(e)}>
            <div className="form-group">
              <label>name</label>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>email</label>
              <input
                type="text"
                className="form-control"
                placeholder="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>address</label>
              <input
                type="text"
                className="form-control"
                placeholder="address"
                onChange={e => setAddess(e.target.value)}
              />
            </div>
            <div className="half-form">
              <div className="form-group pr-3">
                <label>city</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="city"
                  onChange={e => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>province</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="province"
                  onChange={e => setProvince(e.target.value)}
                />
              </div>
            </div>
            <div className="half-form">
              <div className="form-group pr-3">
                <label>postal code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="postal code"
                  onChange={e => setPostalCode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="phone"
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary form-control">
              Complete Order
            </button>
          </form>
        </div>
        <div className="col-4">
          <div className="order-cart">
            <h2>Your Order</h2>
            <hr />
            {cart.map((item, index) => (
              <div key={index}>
                <img
                  src={`${API}/upload/product/${item.image[0]}`}
                  alt="order"
                />
                <h3>{item.name}</h3>
                <span>
                  {item.priceSale > 0
                    ? item.priceSale * item.quantity
                    : item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
