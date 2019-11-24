import React from "react";
import { GridViewItemPrice } from "./styled/GridViewItemContent";

export default function ProductPrice({price, priceSale}) {
  return (
    <GridViewItemPrice>
      <span className={priceSale > 0 ? "money-sale" : "money"}>
        {" "}
        &#x00024;{price}
      </span>
      {priceSale > 0 && (
        <span className="price-sale"> &#x00024;{priceSale}</span>
      )}
    </GridViewItemPrice>
  );
}
