import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiteHeadIcon } from "./Header";
import styled from "styled-components";

export default function HeaderMobile({
  token,
  getUser,
  cartCount,
  userLogout,
  wl,
  data
}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <React.Fragment>
      <SiteHeadIcon>
        <div className="header-icon-menu" onClick={() => setToggleMenu(true)}>
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="header-wishlish">
          <div className="wishlish-icon-count">
            <a href="/wishlish" className="cart-icon-count">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
              <span>{wl.length}</span>
            </a>
          </div>
        </div>
        <div className="header-cart">
          <div>
            {" "}
            <a href="/cart" className="cart-icon-count">
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
              <span>{cartCount()}</span>
            </a>
          </div>
        </div>
      </SiteHeadIcon>
      <ListMenu show={toggleMenu ? true : false}>
        <div
          className="hidden-list-menu-mobile"
          onClick={() => setToggleMenu(false)}
        >
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div className="list-menu-mobile-content">
          <div className="search-mobile">
            <input type="text" placeholder="search" />
            <button className="btn btn-success">search</button>
          </div>
          <div className="menu">
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-user">
            {token ? (
              <div className="user-profile">
                {getUser.name && <b>Hi! {getUser.name}</b>}
                {getUser.name && (
                  <a href="/" onClick={() => userLogout()}>
                    (LogOut)
                  </a>
                )}
              </div>
            ) : (
              <a href="/login" className="cart-icon-count">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>
      </ListMenu>
    </React.Fragment>
  );
}
const ListMenu = styled.div`
  position: fixed;
  width: 300px;
  left: ${props => (props.show ? "0px" : "-350px")};
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  box-shadow: 2px -2px 10px #2b2a2a;
  transition: 1s ease-in-out;
  .list-menu-mobile-content {
    width: 100%;
    height: 100%;
    padding: 0px 25px 30px 25px;
    input {
      padding: 6px 0px;
      border-radius: 5px;
      border: 1px solid transparent;
    }
    .menu {
      a {
        color: wheat;
      }
    }
    .header-user {
      b {
        color: wheat;
      }
    }
  }
  .hidden-list-menu-mobile {
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
`;
