import React, { useState } from "react";
import { Row } from "../../../styled/Row";
import {Link} from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AddMenu({ addDataMenu }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const addMenu = e => {
    e.preventDefault();
    addDataMenu(title, link);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Add Admin Menu</h2>
        <Link to="/admin/menu" className="btn btn-primary">Back To Admin Menu</Link>
      </Row>
      <form method="post" onSubmit={e => addMenu(e)}>
        <div className="form-group">
          <label>title</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setTitle(e.target.value)}
            placeholder="title"
          />
        </div>
        <div className="form-group">
          <label>link</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setLink(e.target.value)}
            placeholder="link"
          />
        </div>
        <button type="submit" className="btn btn-success">
          save add menu
        </button>
      </form>
    </div>
  );
}
