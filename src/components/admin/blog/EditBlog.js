import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Row } from "../../../styled/Row";
import { Link } from "react-router-dom";
import CKEditor from "ckeditor4-react";
import { API } from "../../../config/defaultApi";

export default function EditBlog({
  data,
  match,
  uploadImageBlog,
  editDataBlog
}) {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const { id } = match.params;
  const filterData = data.length > 0 && data.find(item => item._id === id);
  const uploadImage = files => {
    const data = new FormData();
    data.append("file", files);
    uploadImageBlog(data);
  };
  const saveEditBlog = e => {
    e.preventDefault();
    const urlFile = filterData.image.match(/^([0-9])\w+/g);
    editDataBlog(heading, description, urlFile[0], id);
  };
  return (
    <div className="container">
      <Row>
        <h2>Edit Blog</h2>
        <Link to="/admin/blog" className="btn btn-primary">
          Back To Blog
        </Link>
      </Row>
      <ToastContainer autoClose={2000} />
      <form method="post" onSubmit={e => saveEditBlog(e)}>
        <div className="form-group">
          <label>heading</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setHeading(e.target.value)}
            placeholder="heading"
            defaultValue={filterData.heading}
          />
        </div>
        <div className="form-group">
          <CKEditor
            data={filterData.description}
            onChange={evt => setDescription(evt.editor.getData())}
            onBeforeLoad={CKEDITOR => (CKEDITOR.disableAutoInline = true)}
          />
        </div>
        {filterData.image && (
          <div className="form-group">
            <p>default image</p>
            <img
              style={{ width: 50 }}
              src={`${API}/upload/blog/${filterData.image}`}
              alt="imageADM"
            />
          </div>
        )}
        <div className="form-group">
          <label>edit image</label>
          <input
            type="file"
            className="form-control"
            onChange={e => uploadImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-success">
          save edit blog
        </button>
      </form>
    </div>
  );
}
