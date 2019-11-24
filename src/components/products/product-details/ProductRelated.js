import React, { useState } from "react";
import AddCartSuccess from "../../../container/addCartSuccess/AddCartSuccess";
import SlideSlick from "../../../react-slick/SlideSlick";
import Quickview from "../../../container/quickview/Quickview";
import styled from "styled-components";
import ProductImage from "../ProductImage";
import ProductFunctionalsButton from "../ProductFunctionalsButton";
import ProductPrice from "../ProductPrice";

export default function ProductRelated({
  data,
  product,
  wl,
  addCart,
  deleteWishlist,
  addWishlist,
  showquickview
}) {
  const products = product.data;
  const [modalCart, setModal] = useState(false);
  const [id, setID] = useState("");
  const [modalCartItem, setModalCartItem] = useState(null);
  const hiddenModalCart = () => {
    setModal(false);
  };
  const productRelated = products.filter(item => item.categories === data);
  const setting = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: productRelated.length > 4 ? 4 : productRelated.length,
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
  return (
    <ProductRelateds>
      {modalCart && (
        <AddCartSuccess
          id={id}
          hiddenModalCart={hiddenModalCart}
          modalCartItem={modalCartItem}
        />
      )}
      <Quickview />
      <h2>Product Related</h2>
      <SlideSlick setting={setting}>
        {productRelated.map((item, index) => (
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
                item={item}
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
    </ProductRelateds>
  );
}
const ProductRelateds = styled.div`
  h2 {
    text-align: center;
    padding: 20px 0px;
  }
`;
