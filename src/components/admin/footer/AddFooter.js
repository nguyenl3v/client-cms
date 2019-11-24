import React, { useState } from "react";
import { Row } from "../../../styled/Row";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CKEditor from "ckeditor4-react";

export default function AddFooter({ uploadLogoFooter, addDataFooter }) {
  const [heading, setHeading] = useState("");
  const [width, setWidth] = useState("");
  const [description, setDescription] = useState("");
  const fakeData = [
    { col: "col-lg-1", width: "8.3%" },
    { col: "col-lg-2", width: "16.6%" },
    { col: "col-lg-3", width: "25%" },
    { col: "col-lg-4", width: "33%" },
    { col: "col-lg-5", width: "41%" },
    { col: "col-lg-6", width: "50%" },
    { col: "col-lg-7", width: "58%" },
    { col: "col-lg-8", width: "64%" },
    { col: "col-lg-9", width: "75%" },
    { col: "col-lg-10", width: "83%" },
    { col: "col-lg-11", width: "91%" },
    { width: "100%", col: "col-lg-12" }
  ];
  const uploadLogo = files => {
    const data = new FormData();
    data.append("file", files);
    uploadLogoFooter(data);
  };
  const addFooter = e => {
    e.preventDefault();
    addDataFooter(heading, width, description);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Add Admin Footer</h2>
        <Link to="/admin/footer" className="btn btn-primary">
          Back To Admin Footer
        </Link>
      </Row>
      <form method="post" onSubmit={e => addFooter(e)}>
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
          <label>logo</label>
          <input
            type="file"
            className="form-control"
            onChange={e => uploadLogo(e.target.files[0])}
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
          <select  onChange={e => setWidth(e.target.value)}>
            <option>selected width</option>
            {fakeData.map((item, index) => (
              <option
                key={index}
                value={item.col}
              >
                {item.width}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          save add footer
        </button>
      </form>
    </div>
  );
}
