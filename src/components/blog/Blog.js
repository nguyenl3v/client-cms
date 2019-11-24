import React from "react";
import SlideSlick from "../../react-slick/SlideSlick";
import { API } from "../../config/defaultApi";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import styled from "styled-components";
import { to_slug } from "../slug/slug";

export default function Blog({ data }) {
  const setting = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    padding: "15px",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  return (
    <section id="Blog">
      <Article className="container">
        <SlideSlick setting={setting}>
          {data.map((item, index) => (
            <div className="grid-item-blog p-3" key={index}>
              <div className="blog-image">
                <Link
                  to={
                    "/blog/" + item._id + "/" + to_slug(item.heading) + ".html"
                  }
                >
                  <img src={`${API}/upload/blog/${item.image}`} alt="blog" />
                </Link>
              </div>
              <div className="grid-view-item-text-content">
                <h2>{item.heading}</h2>
                <span className="article-date">
                  <Moment format="MMM D YYYY" locale="en">
                    {item.date}
                  </Moment>
                </span>
                <div className="red-more-blog">
                  <Link
                    to={
                      "/blog/" +
                      item._id +
                      "/" +
                      to_slug(item.heading) +
                      ".html"
                    }
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </SlideSlick>
      </Article>
    </section>
  );
}
const Article = styled.article`
  h2 {
    font-size: 18px;
    line-height: 30px;
    text-transform: capitalize;
    font-weight: 700;
    padding: 20px 0px 0px;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 13px;
    }
  }
  .article-date {
    font-size: 12px;
    text-transform: capitalize;
    font-style: italic;
    color: #777777;
  }
  a {
    font-size: 12px;
    font-weight: 600;
    color: #777777;
  }
`;
