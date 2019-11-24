import React from "react";
import SlideSlick from "../../react-slick/SlideSlick";
import { to_slug } from "../slug/slug";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {API} from "../../config/defaultApi";

export default function BlogPage({ data }) {
  const setting = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    padding: "15px",
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="container">
      <article>
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
      </article>
    </div>
  );
}
