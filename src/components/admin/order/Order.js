import React from "react";
import { Row } from "../../../styled/Row";
import { API } from "../../../config/defaultApi";
import styled from "styled-components";

export default function Order({ order }) {
  const viewCArt = (cart, user) => {
    return (
      <React.Fragment>
        {cart.map((item, index) => (
          <React.Fragment key={index}>
            <div className="col-2 flex-rows">
              <img src={`${API}/upload/product/${item.image[0]}`} alt="order" />
              <span>{item.name}</span>
            </div>
            <div className="col-2 flex-rows">
              <span>color:{item.color}</span>
              <span>size:{item.size}</span>
            </div>
            <div className="col-2 flex-rows">
              <span>
                price:
                {item.priceSale > 0
                  ? item.priceSale * item.quantity
                  : item.price * item.quantity}
              </span>
              <span>customer:{user}</span>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  };
  return (
    <StyledOrder>
      <Row>
        <h2>Admin Order</h2>
      </Row>
      <hr />
      <div className="row">
        {order.map((item, index) => (
          <React.Fragment key={index}>
            {viewCArt(item.cart, item.name)}
            <div className="col-2 flex-rows ">
              <span>address:{item.address}</span>
              <span>city:{item.city}</span>
            </div>
            <div className="col-2 flex-rows">
              <span>postal code:{item.postalCode}</span>
              <span>province:{item.province}</span>
            </div>
            <div className="col-2 flex-rows">
              <span>email:{item.email}</span>
              <span>phone:{item.phone}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <hr />
    </StyledOrder>
  );
}

const StyledOrder = styled.div`
  img {
    width: 100px;
    display: block;
  }
  span {
    font-size: 13px;
    padding: 5px 0px;
  }
  .flex-rows {
    display: flex;
    flex-direction: column;
  }
`;
