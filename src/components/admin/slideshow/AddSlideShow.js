import React, { useState } from "react";
import { Row } from "../../../styled/Row";
import { ToastContainer } from "react-toastify";
import {Link} from "react-router-dom";

export default function AddSlideShow({ addDataSlideShow, upload }) {
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [button, setButton] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const _upload = files => {
    const data = new FormData();
    data.append("file", files);
    upload(data);
  };
  const addSlideShow = e => {
    e.preventDefault();
    addDataSlideShow(heading, title, button, buttonLink);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Add SlideShow</h2>
        <Link to="/admin/slideshow" className="btn btn-primary">
          Back To Admin SlideShow
        </Link>
      </Row>
      <form method="post" onSubmit={e => addSlideShow(e)}>
        <div className="form-group">
          <label>heading</label>
          <input
            type="text"
            className="form-control"
            placeholder="heading"
            onChange={e => setHeading(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>title</label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>button</label>
          <input
            type="text"
            className="form-control"
            placeholder="button"
            onChange={e => setButton(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>button Link</label>
          <input
            type="text"
            className="form-control"
            placeholder="button Link"
            onChange={e => setButtonLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>image</label>
          <input
            type="file"
            className="form-control"
            placeholder="image"
            onChange={e => _upload(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-success">
          add slideshow
        </button>
      </form>
    </div>
  );
}
