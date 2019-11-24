import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "../../../styled/Row";
import { ToastContainer } from "react-toastify";

export default function EditCategories({
  match,
  categories,
  editDataCategories
}) {
  const { id } = match.params;
  const { data } = categories;
  const flilterData = data.length > 0 && data.find(item => item._id === id);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const editCategories = e => {
    e.preventDefault();
    editDataCategories(name, slug, id);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Edit Categories</h2>
        <Link to="/admin/categories" className="btn btn-primary">
          Back To Categories
        </Link>
      </Row>
      <form method="post" onSubmit={e => editCategories(e)}>
        <div className="form-group">
          <label>name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={flilterData.name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>slug</label>
          <input
            type="text"
            className="form-control"
            defaultValue={flilterData.slug}
            onChange={e => setSlug(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          save edit categories
        </button>
      </form>
    </div>
  );
}
