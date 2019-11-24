import React, { useState } from "react";
import styled from "styled-components";
import AddCartSuccess from "../../container/addCartSuccess/AddCartSuccess";
import Quickview from "../../container/quickview/Quickview";
import ProductImage from "../products/ProductImage";
import ProductPrice from "../products/ProductPrice";

export default function WishLish({ wishlish, addCart, showquickview }) {
  const [modalCartItem, setModalCartItem] = useState(null);
  const [modalCart, setModal] = useState(false);
  const [id, setID] = useState("");
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
  const hiddenModalCart = () => {
    setModal(false);
  };
  const showQuickView = product => {
    showquickview(product);
  };
  return (
    <div className="container">
      {modalCart && (
        <AddCartSuccess
          id={id}
          hiddenModalCart={hiddenModalCart}
          modalCartItem={modalCartItem}
        />
      )}
      <Quickview />
      <div className="row">
        {wishlish.map((item, index) => (
          <div key={index} className="grid-item col-lg-3 col-6">
            <div className="grid-view-item">
            <ProductImage
                image0={item.image[0]}
                image1={item.image[1]}
                price={item.price}
                priceSale={item.priceSale}
                name={item.name}
                id={item._id}
              />
              <FunctionalsButton>
                <div
                  className="add-cart-wrapper"
                  onClick={() => addToCart(item)}
                >
                  <i className="fa fa-cart-plus"></i>
                </div>
                <div className="quickview" onClick={() => showQuickView(item)}>
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </div>
              </FunctionalsButton>
            </div>
            <div className="product-view-meta">
              <p>{item.name}</p>
              <ProductPrice price={item.price} priceSale={item.priceSale} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const FunctionalsButton = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  .add-cart-wrapper {
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #cccccc;
    background: #51e451;
    transform: translate(0%, 150%);
    i {
      filter: drop-shadow(0px -1px 6px black);
      font-size: 20px;
      color: white;
    }
  }
  .quickview {
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #cccccc;
    background: #51e451;
    transform: translate(0%, 100%);
    i {
      font-size: 20px;
      color: white;
      filter: drop-shadow(0px -1px 6px black);
    }
  }
`;
