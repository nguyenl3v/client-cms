import React from "react";
import { API } from "../../config/defaultApi";
import html from "react-inner-html";
import styled from "styled-components";

export default function Footer({ data }) {
  return (
    <StyledFooter id="footer">
      <div className="container">
        <hr />
        <div className="row">
          {data.map((item, index) => (
            <div className={item.width + " col-6"} key={index}>
              <div className="footer-item-content">
                {item.heading && (
                  <div>
                    <h2>{item.heading}</h2>
                  </div>
                )}
                {item.logo && (
                  <div className="logo-footer">
                    <img src={`${API}/upload/footer/${item.logo}`} alt="logo" />
                  </div>
                )}
                <div {...html(item.description)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled.section`
padding:25px 0px;
  .logo-footer {
    padding: 20px 0px;
  }
  .footer-item-content {
    h2 {
      padding: 20px 0px;
      font-size: 25px;
    }
    a{
      text-decoration: none;
      line-height: 30px;
      color:#999999
    }
    p {
      line-height: 30px
      color:#999999;
    }
    a:hover {
      color:#f2cb6c;
    }
  }
`;
