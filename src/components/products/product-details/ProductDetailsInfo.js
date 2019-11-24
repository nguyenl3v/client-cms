import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import ProductRelated from "./ProductRelated";
import { ToastContainer } from "react-toastify";
import Moment from "react-moment";
import "moment/locale/vi";
import { socket } from "../../../config/socketio";

export default function ProductDetailsInfo({
  data,
  productRelated,
  product,
  addCart,
  deleteWishlist,
  addWishlist,
  showquickview,
  wl,
  review,
  user,
  id
}) {
  const r = review.data;
  const dataReview = r.filter(item => item.id === id);
  const name = user.name;
  const [active, setActive] = useState(0);
  let [rating, setRating] = useState(0);
  let [posts, setPosts] = useState("");
  const categories = ["Description", "Review"];
  const submitReview = e => {
    e.preventDefault();
    socket.emit("post/review", {name, rating, posts, id});
    setRating(0);
    setPosts("");
  };
  return (
    <ProductInfo className="product-details-info">
      <ToastContainer autoClose={2000} />
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => setActive(index)}
            key={index}
            className={active === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <ProductContent>
        <div className={active === 0 ? "tab-content d-block" : "d-none"}>
          {data}
        </div>
        <div className={active === 1 ? "tab-content d-block" : "d-none"}>
          <form method="post" onSubmit={e => submitReview(e)}>
            <div className="form-group">
              <label className="d-block">rating</label>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </div>
            <div className="form-group">
              <label>review product</label>
              <textarea
                rows="5"
                className="form-control"
                value={posts}
                onChange={e => setPosts(e.target.value)}
              />
            </div>
            {!name ? (
              <a href="/login">Login</a>
            ) : (
              <button type="submit" className="btn btn-success">
                sumbit review
              </button>
            )}
          </form>
          {dataReview.map((item, index) => (
            <div className="customer-review" key={index}>
              <div>
                <b>{item.name}</b>:{" "}
                <Moment local fromNow>
                  {item.date}
                </Moment>
              </div>
              <Rating
                name="disabled"
                size="small"
                readOnly
                value={item.rating}
              />
              <div>{item.posts}</div>
            </div>
          ))}
        </div>
      </ProductContent>
      <ProductRelated
        data={productRelated}
        product={product}
        addCart={addCart}
        deleteWishlist={deleteWishlist}
        addWishlist={addWishlist}
        showquickview={showquickview}
        wl={wl}
      />
    </ProductInfo>
  );
}
const ProductInfo = styled.div`
  margin: 50px 0px;
  ul {
    display: flex;
    li {
      padding-right: 50px;
      cursor: pointer;
    }
    .active {
      font-weight: 700;
    }
  }
`;
const ProductContent = styled.div`
  .tab-content {
    border: 1px solid #cccccc;
    padding: 15px;
  }
  .customer-review {
    padding: 15px 0px;
  }
`;
