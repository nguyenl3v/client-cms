import React, { useState } from "react";
import ProductPrice from "../products/ProductPrice";
import SlickThumbnails from "../../react-slick/SlickThumbnails";
import AddCartSuccess from "../../container/addCartSuccess/AddCartSuccess";

function QuickView({ dataQuickview, hiddenquickview, addCart }) {
  let data = dataQuickview;
  let dataQuickView = data[0] ? [{ ...data[0], quantity: 1 }] : [];
  const [addQuantity, setaddQuantity] = useState(1);
  const [modalCartItem, setModalCartItem] = useState(null);
  const [modalCart, setModal] = useState(false);
  if (addQuantity > 1) {
    dataQuickView[0].quantity = addQuantity;
  }
  const quantity = quantity => {
    if (quantity > 0) {
      setaddQuantity(quantity);
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
  };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const hiddenQuickView = () => {
    hiddenquickview();
    setaddQuantity(1);
  };
  const hiddenModalCart = () => {
    setModal(false);
  };
  return (
    <React.Fragment>
      {modalCart && (
        <AddCartSuccess
          id={dataQuickView[0]._id}
          hiddenModalCart={hiddenModalCart}
          modalCartItem={modalCartItem}
        />
      )}
      {dataQuickView[0] && (
        <div className="modal-quickview">
          <div className="layout-quickview">
            <div className="design-quickview">
              <div
                className="hidden-quickview text-right"
                onClick={() => hiddenQuickView()}
              >
                <i className="fa fa-times-circle" />
              </div>
              <div className="row">
                <div className="col-6 pr-4">
                  <SlickThumbnails setting={settings} image={dataQuickView[0].image} />
                </div>
                <div className="col-6">
                  {dataQuickView.map((item, index) => (
                    <div key={index}>
                      <p>{item.name}</p>
                      <ProductPrice price={item.price} priceSale={item.priceSale} />
                      <div>
                        <span
                          className="add-quantity"
                          onClick={() => quantity(item.quantity + 1)}
                        >
                          +
                        </span>
                        {item.quantity}
                        <span
                          className="redution-quantity"
                          onClick={() => quantity(item.quantity - 1)}
                        >
                          -
                        </span>
                      </div>
                      <div
                        className="functional-buttons-quickview"
                        onClick={() => addToCart(item)}
                      >
                        Add To Cart
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default QuickView;
