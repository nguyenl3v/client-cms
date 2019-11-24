import styled from "styled-components";

export const GridViewItemContent = styled.div`
  .grid-view-item-title,
  .grid-view-item-price,
  .quantity {
    height: 40px;
    line-height: 40px;
  }
  .add-cart {
    display: inline-block;
    padding: 12px 30px;
    background: #f2cb6c;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 15px;
  }
  .add-wislish {
    display: inline-block;
    width: 50px;
    border: 1px solid #cccccc;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      background: #f2cb6c;
    }
  }
  .swatches-container {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: bold;
      font-size: 20px;
    }
    ul {
      li {
        display: inline-block;
        padding: 5px;
        border: 1px solid #cccccc;
        margin-right: 5px;
        cursor: pointer;
      }
    }
    .wrapper-size .active {
      box-shadow: 1px 1px 5px #e4e4e4;
      color: #f59678;
    }
    .wrapper-color {
      display: flex;
      align-items: center;
      .active {
        box-shadow: 1px 1px 5px #e4e4e4;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const RenderColor = styled.li`
  background: ${props => props.valColor};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
export const FunctionalsButton = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  @media (max-width: 991px) {
    .add-cart-wrapper,
    .add-wislish,
    .quickview {
      transform: translate(0%, 0%) !important;
    }
  }
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
  .add-wislish {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #cccccc;
    background: #51e451;
    transform: translate(0%, 120%);
    i {
      font-size: 20px;
      color: white;
      filter: drop-shadow(0px -1px 6px black);
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

export const ProductOnSale = styled.div`
  position: absolute;
  z-index: 2;
  top: 18px;
  right: 18px;
  padding: 0 6px;
  line-height: 18px;
  height: 18px;
  font-weight: 300;
  text-align: center;
  border-radius: 2px;
  font-size: 12px;
  background: #ea3131;
  span {
    color: white;
  }
`;
export const GridViewItemPrice = styled.div`
  .money-sale {
    opacity: 0.8;
    text-decoration: line-through;
    color: #d9d9d9;
    margin-right: 10px;
  }
  .price-sale,
  .money {
    font-weight: 700;
  }
`;
