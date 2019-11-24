import React from 'react'
import { API } from '../../config/defaultApi';
import { ProductOnSale } from './styled/GridViewItemContent';
import { to_slug } from '../slug/slug';
import {Link} from "react-router-dom";

export default function ProductImage({image0,image1, price, priceSale, name, id}) {
  const showProductSale = (p, s) => {
    const count = Math.ceil(((p - s) / p) * 100);
    return <span>-{count}%</span>;
  };
  return (
    <Link
    className={image1 && "grid-view-item-link"}
    to={"/productdetails/" + to_slug(name) + "/" + id + ".html"}
  >
    <div className={image1 && "grid-view-item-image"}>
      <img
        src={`${API}/upload/product/${image0}`}
        alt="productTabs"
      />
      {image1 && (
        <img
          src={`${API}/upload/product/${image1}`}
          alt="productTabs"
        />
      )}
    </div>
    {priceSale > 0 && (
      <ProductOnSale className="product-on-sale">
        {showProductSale(price, priceSale)}
      </ProductOnSale>
    )}
  </Link>
  )
}
