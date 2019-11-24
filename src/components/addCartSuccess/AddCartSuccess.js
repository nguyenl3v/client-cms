import React from "react";
import { API } from "../../config/defaultApi";
import styled from "styled-components";
import ProductPrice from "../products/ProductPrice";

export default function AddCartSuccess({ cart, id, modalCartItem, hiddenModalCart }) {
  const data = cart.filter(item => item._id === id);
  const loopCartItem = () => {
    let cartIndex = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].color === modalCartItem.color && data[i].size === modalCartItem.size) {
        cartIndex = i;
        break;
      }
    }
    return cartIndex;
  }
  const index = loopCartItem();
  return (
    <BackGroundModal onClick={() => hiddenModalCart()}>
      <ModalCart>
        <p>Add item to cart successfully</p>
        <div className="row">
          <div className="col-6">
            <img src={`${API}/upload/product/${data[index].image[0]}`} alt="product" />
          </div>
          <div className="col-6">
            <div className="ggrid-view-item-content">
              <div className="grid-view-item-title">
                <span>{data[index].name}</span>
              </div>
              <ProductPrice price={data[index].price} priceSale={data[index].priceSale} />
              <span>Quantity:{data[index].quantity}</span>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="modal-cart-title">
            <span>There are {data[index].quantity} items in your cart</span>
          </div>
          <div className="modal-cart-total">
            <span>
              Toal:{" "}
              {data[index].priceSale > 0
                ? data[index].priceSale * data[index].quantity
                : data[index].price * data[index].quantity}
            </span>
          </div>
          <div className="modal-view-cart">
            <a href="/cart" className="btn btn-success">
              View Cart
            </a>
            <a href="/checkout" className="btn btn-success">
              Check Out
            </a>
          </div>
        </div>
      </ModalCart>
    </BackGroundModal>
  );
}
const ModalCart = styled.div`
  position: fixed;
  z-index: 222;
  max-width: 100%;
  top: 50%;
  background: #ffffff;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 0px 0px 6px 1px #6f455a;
  padding: 15px;
  .modal-view-cart {
    display: flex;
    justify-content: center;
    a {
      margin: 0px 15px;
    }
  }
  p {
    color: #75c435;
  }
`;
const BackGroundModal = styled.div`
  position: fixed;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  z-index: 1111;
  top: 0;
  left: 0;
`;
