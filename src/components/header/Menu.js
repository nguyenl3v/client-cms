import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu({ data }) {
  return (
    <NavHeader>
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </NavHeader>
  );
}

const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  ul{
    display:flex;
  }
  li {
    list-style: none;
    padding-right:20px;
    a {
      text-decoration: none;
      color:#000000;
      font-weight:600;
    }
    &:hover{
      a{
        color:#f2cb6c;
      }
    }
  }
`;

