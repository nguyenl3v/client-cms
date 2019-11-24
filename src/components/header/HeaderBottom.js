import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { API } from "../../config/defaultApi";
import { to_slug } from "../slug/slug";

export default function HeaderBottom({ getValueSearch, data, loading }) {
  const [toggle, setToggle] = useState(true);
  const searchProduct = e => {
    getValueSearch(e.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="vertical-menu" style={{ position: "relative" }}>
            <HeadingVertical onClick={() => setToggle(!toggle)}>
              Departments
            </HeadingVertical>
            <VerticalItem className={toggle ? "d-block" : "d-none"}>
              <li>
                <Link to="/">Fresh Fruit</Link>
              </li>
              <li>
                <Link to="/">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="/">Milk, Butter & Eggs</Link>
              </li>
              <li>
                <Link to="/">Chilled Desserts</Link>
              </li>
              <li>
                <Link to="/">Fresh Meat & Poultry</Link>
              </li>
              <li>
                <Link to="/">Cheese</Link>
              </li>
              <li>
                <Link to="/">Chilled Fish & Seafood</Link>
              </li>
              <li>
                <Link to="/">Chilled Fruit Juice</Link>
              </li>
              <li>
                <Link to="/">Fresh Salad & Dips</Link>
              </li>
            </VerticalItem>
          </div>
        </div>
        <div className="col-md-9 py-1">
          <FormField>
            <input
              type="text"
              placeholder="search"
              onKeyUp={e => searchProduct(e)}
            />
            <button className="btn btn-success">search</button>
          </FormField>
          <Search>
            {loading && <span>loading ...</span>}
            {data.length > 0 && (
              <div>
                {data.map((item, index) => (
                  <div className="product-search-item" key={index}>
                    <div>
                      <a
                        href={
                          "/productdetails/" +
                          to_slug(item.name) +
                          "/" +
                          item._id +
                          ".html"
                        }
                      >
                        {" "}
                        <img
                          src={`${API}/upload/product/${item.image[0]}`}
                          alt="product"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href={
                          "/productdetails/" +
                          to_slug(item.name) +
                          "/" +
                          item._id +
                          ".html"
                        }
                      >
                        {item.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Search>
        </div>
      </div>
    </div>
  );
}

const FormField = styled.form`
  display: flex;
  input {
    width: 100%;
    outline: none;
    height: 50px;
    padding-left: 20px;
    line-height: 50px;
    border-radius: 5px;
    border-color: transparent;
  }
`;

const VerticalItem = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0px 30px;
  width: 100%;
  border: 2px solid #cccc;
  z-index: 1;
  a {
    text-decoration: none;
  }
  li {
    height: 47px;
    line-height: 47px;
    border-bottom: 1px solid #cccc;
  }
  li:last-child {
    border-bottom: 0px solid;
  }
`;
const HeadingVertical = styled.h4`
  height: 60px;
  background: #3b755f;
  line-height: 60px;
  margin: 0px;
  padding: 0px 20px;
  cursor: pointer;
`;
const Search = styled.div`
  position: absolute;
  z-index: 3;
  width: calc(100% - 30px);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 1px 1px 10px #cccccc;
  img {
    width: 150px;
  }
  .product-search-item {
    display: flex;
  }
`;
