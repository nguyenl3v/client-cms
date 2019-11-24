import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { API } from "../../../config/defaultApi";
import { Row } from "../../../styled/Row";
import { Link } from "react-router-dom";
import ReactPlyr from "../../../plyr/ReactPlyr";

function EditSlideShow({ slideshow, match, _editDataSlideShow, upload }) {
  const { id } = match.params;
  let { data } = slideshow;
  const filterData = data.length > 0 && data.find(item => item._id === id);
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [button, setbutton] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const urlFile = filterData.image && filterData.image.match(/([0-9])\w+/);
  const uploadSlide = files => {
    const data = new FormData();
    data.append("file", files);
    upload(data);
  };
  const saveEditSlideShow = e => {
    e.preventDefault();
    _editDataSlideShow(heading, title, button, buttonLink, urlFile[0], id);
  };
  return (
    <div className="container">
      <Row>
        <h2>Edit SlideShow</h2>
        <Link to="/admin/slideshow" className="btn btn-primary">
          Back to SlideShow
        </Link>
      </Row>
      <ToastContainer autoClose={2000} />
      <form method="post" onSubmit={e => saveEditSlideShow(e)}>
        <div className="form-group">
          <label>heading</label>
          <input
            type="text"
            className="form-control"
            defaultValue={filterData.heading}
            onChange={e => setHeading(e.target.value)}
          />
        </div>
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
          <label>button name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={filterData.button}
            onChange={e => setbutton(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>button Link</label>
          <input
            type="text"
            className="form-control"
            defaultValue={filterData.buttonLink}
            onChange={e => setButtonLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p>default image or video</p>
          {filterData && filterData.image.match(/\.(mp4)$/) ? (
            <div style={{ width: 150 }}>
              <ReactPlyr image={filterData.image} />
            </div>
          ) : (
            <img
              style={{ width: 50 }}
              src={`${API}/upload/slideshow/${filterData.image}`}
              alt="imageADM"
            />
          )}
        </div>
        <div className="form-group">
          <label>edit image or video</label>
          <input
            type="file"
            className="form-control"
            onChange={e => uploadSlide(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-success">
          save edit slideshow
        </button>
      </form>
    </div>
  );
}
export default EditSlideShow;
