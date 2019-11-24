import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import HeaderBottom from "../../container/header/HeaderBottom";
import { Route } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";

export default function Header({ menu, cart, wl, user, token }) {
  const { getUser } = user;
  const { data } = menu;
  const cartCount = () => {
    return cart.reduce((total, count) => {
      return total + count.quantity;
    }, 0);
  };
  const userLogout = () => {
    sessionStorage.removeItem("userToken");
  };
  return (
    <section id="header">
      <nav id="header-moblie">
        <HeaderMobile
          token={token}
          getUser={getUser}
          userLogout={userLogout}
          wl={wl}
          cartCount={cartCount}
          data={data}
        />
      </nav>
      <header>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-md-3 hidden-md-down">
                <HeadInFo>
                  <div className="info-icon pr-3">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0100/9192/1467/files/03_Home_01_40x.jpg?v=1539746692"
                      alt="iconHead"
                    />
                  </div>
                  <div className="info">
                    <h4>Call us</h4>
                    <p>(633) 497-1888</p>
                  </div>
                </HeadInFo>
              </div>
              <div className="col-lg-6 col-md-12">
                <LogoHead>
                  <a href="/">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0100/9192/1467/files/03_01_logo_360x.png?v=1542784148"
                      alt="logoHead"
                    />
                  </a>
                </LogoHead>
              </div>
              <div className="col-md-3 hidden-md-down">
                <SiteHeadIcon>
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
                        <i
                          className="fa fa-user-circle-o"
                          aria-hidden="true"
                        ></i>
                      </a>
                    )}
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
                    <a href="/cart" className="cart-icon-count">
                      <i className="fa fa-cart-plus" aria-hidden="true"></i>
                      <span>{cartCount()}</span>
                    </a>
                  </div>
                </SiteHeadIcon>
              </div>
              <div className="col-md-12 hidden-md-down">
                <Menu data={data} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="header-bottom hidden-md-down"
          style={{ width: "100%", background: "#f2cb6c" }}
        >
          <Route path="/" exact component={HeaderBottom} />
        </div>
      </header>
    </section>
  );
}

const HeadInFo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 30px 0px;
  .info {
    p,
    h4 {
      margin: 0px;
    }
  }
`;

const LogoHead = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    height: 100px;
  }
`;

export const SiteHeadIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  b {
    white-space: nowrap;
    cursor: pointer;
  }
  i {
    font-size: 25px;
    cursor: pointer;
  }
  .header-user {
    text-align: right;
    b {
      padding-right: 10px;
    }
    span {
      cursor: pointer;
    }
    &:hover {
      i {
        color: #f2cb6c;
      }
    }
  }
  .header-wishlish,
  .header-cart {
    width: 50px;
    text-align: right;
    position: relative;
    &:hover {
      i {
        color: #f2cb6c;
      }
    }
    span {
      background: #3b755f;
      position: absolute;
      width: 16px;
      height: 16px;
      text-align: center;
      line-height: 16px;
      right: -13px;
      border-radius: 50%;
      color: white;
      top: -5px;
      font-size: 12px;
    }
  }
`;
