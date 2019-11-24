import React, { useState } from "react";
import SlideSlick from "../../react-slick/SlideSlick";
import AddCartSuccess from "../../container/addCartSuccess/AddCartSuccess";
import ProductPrice from "./ProductPrice";
import ProductImage from "./ProductImage";
import ProductFunctionalsButton from "./ProductFunctionalsButton";

export default function ProductItem({
  data,
  addCart,
  addWishlist,
  deleteWishlist,
  wl,
  showquickview
}) {
  const [modalCart, setModal] = useState(false);
  const [id, setID] = useState("");
  const [modalCartItem, setModalCartItem] = useState(null);
  let setting = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: data.length > 4 ? 4 : data.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  const hiddenModalCart = () => {
    setModal(false);
  };
  return (
    <div className="tabs-content">
      {modalCart && (
        <AddCartSuccess
          id={id}
          hiddenModalCart={hiddenModalCart}
          modalCartItem={modalCartItem}
        />
      )}
      <SlideSlick setting={setting}>
        {data.map((item, index) => (
          <div key={index} className="grid-item">
            <div className="grid-view-item">
              <ProductImage
                image0={item.image[0]}
                image1={item.image[1]}
                price={item.price}
                priceSale={item.priceSale}
                name={item.name}
                id={item._id}
              />
              <ProductFunctionalsButton
                addCart={addCart}
                setModal={setModal}
                setID={setID}
                addToWishlist={addWishlist}
                deleteWl={deleteWishlist}
                wl={wl}
                showquickview={showquickview}
                item={{ ...item, quantity: 1 }}
                setModalCartItem={setModalCartItem}
              />
            </div>
            <div className="grid-view-item-content">
              <div className="grid-view-item-title">
                <a href={"/productdetails/" + item._id}>{item.name}</a>
              </div>
              <ProductPrice price={item.price} priceSale={item.priceSale} />
            </div>
          </div>
        ))}
      </SlideSlick>
    </div>
  );
}
