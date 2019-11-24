import React from "react";
import styled from "styled-components";

export default function Categories({ data, filterProduct, i }) {
  let cate = new Set(data);
  let tempCate = Array.from(cate);
  tempCate = tempCate.length > 0 ? [{ name: "All" }, ...tempCate] : [];
  return (
    <CategoriesWrapper>
      {tempCate.map((item, index) => (
        <li key={index} className={i === index ? "active" : ""} onClick={() => filterProduct(item.name,index)}>{item.name}</li>
      ))}
    </CategoriesWrapper>
  );
}
const CategoriesWrapper = styled.ul`
  display:flex;
  justify-content:center
  li{
    list-style:none;
    margin-left: 25px;
    font-weight: 700;
    cursor:pointer;
    position:relative;
  }
  li:first-child:before,li:nth-child(2):before {
    position: absolute;
    content: "";
    width: 3px;
    height: 15px;
    background: #d8dade;
    right: -15px;
    top: 4px;
  }
  li:hover{
    color:#ff8181;
  }
  .active{
    color:#ff8181;
  }
`;