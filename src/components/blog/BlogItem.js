import React from "react";
import { API } from "../../config/defaultApi";
import html from "react-inner-html";

export default function BlogItem({ data, match }) {
  const { id } = match.params;
  const filterData = data.length > 0 && data.find(item => item._id === id);
  return (
    <div className="container">
      <article className="blog-item">
        <div className="grid-view-item-blog-content">
          <div className="blog-image">
            {filterData.image && (
              <img src={`${API}/upload/blog/${filterData.image}`} alt="blog" />
            )}
          </div>
          <div className="blog-item-heading">
            <h2>{filterData.heading}</h2>
          </div>
          <div className="blog-text-content" {...html(filterData.description)} />
        </div>
      </article>
    </div>
  );
}
