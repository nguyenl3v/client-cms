import React, { useState } from "react";
import Categories from "./Categories";
import ProductItem from "./ProductItem";
import styled from "styled-components";
import Quickview from "../../container/quickview/Quickview";

export default function ProductTabs({
  product,
  categories,
  addCart,
  addWishlist,
  deleteWishlist,
  wl,
  showquickview
}) {
  const dataProduct = product.data;
  const dataCategories = categories.data;
  const [products, setProduct] = useState([]);
  const [i, setI] = useState(0);
  const filterProduct = (cate, index) => {
    if (cate === "All") {
      setProduct(dataProduct);
    } else {
      const data = dataProduct.filter(item => item.categories === cate);
      setProduct(data);
    }
    setI(index); 
  };
  return (
    <section id="productTabs">
      <Quickview />
      <div className="container">
        <ProductTabsWrapper>
          <div className="product-categories">
            <Categories data={dataCategories} filterProduct={filterProduct} i={i} />
          </div>
          <div className="product-grid-item">
            <ProductItem
              data={products.length > 0 ? products : dataProduct}
              addCart={addCart}
              deleteWishlist={deleteWishlist}
              addWishlist={addWishlist}
              wl={wl}
              showquickview={showquickview}
            />
          </div>
        </ProductTabsWrapper>
      </div>
    </section>
  );
}

const ProductTabsWrapper = styled.div`
  padding: 50px 0px;
  .grid-view-item-content {
    text-align: center;
  }
`;
