import React from "react";
import { Row } from "../../../styled/Row";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { API } from "../../../config/defaultApi";
import ReactPlyr from "../../../plyr/ReactPlyr";

export default function SlideShow({ slideshow, deleteDataSlideShow }) {
  const { data } = slideshow;
  const deleteItem = (e, id, file) => {
    e.preventDefault();
    const fileURL = file.match(/([0-9])\w+/);
    deleteDataSlideShow(id, fileURL[0]);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Admin Slideshow</h2>
        <Link to="/admin/slideshow/add" className="btn btn-primary">
          Add SlideShow
        </Link>
      </Row>
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>heading</th>
            <th>title</th>
            <th>image</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.heading}</td>
              <td>{item.title}</td>
              <td>
                {item.image.match(/\.(mp4)$/) ? (
                  <div style={{ width: 250 }}>
                    <ReactPlyr image={item.image} />
                  </div>
                ) : (
                  <img
                    style={{ width: 50 }}
                    src={`${API}/upload/slideshow/${item.image}`}
                    alt="imageSlideShowADM"
                  />
                )}
              </td>
              <td>
                <Link to={"/admin/slideshow/edit/" + item._id}>
                  <i className="fa fa-edit" />
                </Link>
              </td>
              <td>
                <Link
                  to="/admin/slideshow"
                  onClick={e => deleteItem(e, item._id, item.image)}
                >
                  <i className="fa fa-trash" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
