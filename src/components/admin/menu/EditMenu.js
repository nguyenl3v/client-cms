import React, { useState } from "react";
import { Row } from "../../../styled/Row";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function EditMenu({ match, Menu, editDataMenu }) {
  const { id } = match.params;
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const { data } = Menu;
  const filterData = data.length > 0 && data.find(item => item._id === id);
  const editMenu = e => {
    e.preventDefault();
    editDataMenu(title, link, id);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Edit Admin Menu</h2>
        <Link to="/admin/menu" className="btn btn-primary">
          Back To Admin Menu
        </Link>
      </Row>
      <form method="post" onSubmit={e => editMenu(e)}>
        <div className="form-group">
          <label>title</label>
          <input
            type="text"
            className="form-control"
            defaultValue={filterData.title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>link</label>
          <input
            type="text"
            className="form-control"
            defaultValue={filterData.link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          save edit menu
        </button>
      </form>
    </div>
  );
}
