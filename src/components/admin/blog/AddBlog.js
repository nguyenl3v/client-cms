import React, { useState } from "react";
import { Row } from "../../../styled/Row";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import CKEditor from "ckeditor4-react";

export default function AddBlog({ uploadImageBlog, addDataBlog }) {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const uploadImage = files => {
    const data = new FormData();
    data.append("file", files);
    uploadImageBlog(data);
  };

  const addBlog = e => {
    e.preventDefault();
    addDataBlog(heading, description);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Add Admin Blog</h2>
        <Link to="/admin/blog" className="btn btn-primary">
          Back To Admin Blog
        </Link>
      </Row>
      <form method="post" onSubmit={e => addBlog(e)} encType="multipart/form-data">
        <div className="form-group">
          <label>heading</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setHeading(e.target.value)}
            placeholder="heading"
          />
        </div>
        <div className="form-group">
          <CKEditor
            data="<p>description</p>"
            onChange={evt => setDescription(evt.editor.getData())}
            onBeforeLoad={CKEDITOR => (CKEDITOR.disableAutoInline = true)}
          />
        </div>
        <div className="form-group">
          <label>upload image</label>
          <input
            type="file"
            className="form-control"
            onChange={e => uploadImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-success">
          submit add blog
        </button>
      </form>
    </div>
  );
}
