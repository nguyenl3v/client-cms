import React, { useState } from "react";
import ProductDetailsInfo from "./ProductDetailsInfo";
import ProductPrice from "../ProductPrice";
import {
  GridViewItemContent,
  RenderColor
} from "../styled/GridViewItemContent";
import SlickThumbnails from "../../../react-slick/SlickThumbnails";
import AddCartSuccess from "../../../container/addCartSuccess/AddCartSuccess";

const ProductDetails = ({
  wl,
  match,
  product,
  addCart,
  deleteWishlist,
  addWishlist,
  showquickview,
  review,
  user
}) => {
  const [sizeActive, setSizeActive] = useState(0);
  const [colorActive, setColorActive] = useState(0);
  const [addQuantity, setaddQuantity] = useState(1);
  const [c, setC] = useState("");
  const [s, setS] = useState("");
  const [modalCart, setModal] = useState(false);
  const [modalCartItem, setModalCartItem] = useState(null);

  const id = match.params.id;
  const { data } = product;
  let dataProductDetails =
    data.length > 0 ? data.find(item => item._id === id) : [];
  let productDetails =
    data.length > 0 ? [{ ...dataProductDetails, quantity: 1 }] : [];
  if (addQuantity > 1) {
    productDetails[0].quantity = addQuantity;
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
      color: c.length > 0 ? c : p.color[0],
      size: s.length > 0 ? s : p.size[0]
    };
    setModalCartItem(cartItem);
    addCart(cartItem);
    setModal(true);
  };
  const addToWishlist = product => {
    addWishlist(product);
  };
  const deleteWl = product => {
    deleteWishlist(product);
  };
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
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const hiddenModalCart = () => {
    setModal(false);
  };
  return (
    <div className="container">
      {modalCart && (
        <AddCartSuccess id={id} modalCartItem={modalCartItem} hiddenModalCart={hiddenModalCart} />
      )}
      {productDetails.length > 0 &&
        productDetails.map((item, index) => (
          <React.Fragment key={index}>
            <div className="row m-0">
              <div className="col-lg-5 col-12 col-md-5">
                {item.image && (
                  <SlickThumbnails setting={settings} image={item.image} />
                )}
              </div>
              <div className="col-lg-7">
                <GridViewItemContent>
                  <div className="grid-view-item-title">
                    <span>{item.name}</span>
                  </div>
                  <ProductPrice price={item.price} priceSale={item.priceSale} />
                  <div className="product-details-cart">
                    <div className="quantity">
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
                    <div className="swatches-container">
                      <div className="wrapper">
                        <span>size</span>
                        <ul className="wrapper-size">
                          {item.size.map((item, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSizeActive(index);
                                setS(item);
                              }}
                              className={sizeActive === index ? "active" : ""}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="wrapper">
                        <span>color</span>
                        <ul className="wrapper-color">
                          {item.color.map((item, index) => (
                            <RenderColor
                              key={index}
                              className={colorActive === index ? `active` : ""}
                              onClick={() => {
                                setColorActive(index);
                                setC(item);
                              }}
                              valColor={item}
                            ></RenderColor>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="add-cart" onClick={() => addToCart(item)}>
                        add to cart
                      </div>
                      <div className="add-wislish">{checkwishlist(item)}</div>
                    </div>
                  </div>
                </GridViewItemContent>
              </div>
            </div>
            <ProductDetailsInfo
              data={item.description}
              productRelated={item.categories}
              product={product}
              addCart={addCart}
              deleteWishlist={deleteWishlist}
              addWishlist={addWishlist}
              showquickview={showquickview}
              wl={wl}
              review={review}
              user={user}
              id={id}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default ProductDetails;
