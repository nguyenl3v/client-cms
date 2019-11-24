import React from "react";
import { ToastContainer } from "react-toastify";
import { Row } from "../../../styled/Row";
import { Link } from "react-router-dom";
import { API } from "../../../config/defaultApi";

export default function Blog({ data, deleteDataBlog }) {
  const deleteItem = (e, id, file) => {
    e.preventDefault();
    const fileURL = file.match(/^([0-9])\w+/g);
    deleteDataBlog(id, fileURL[0]);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Admin Blog</h2>
        <Link to="/admin/blog/add" className="btn btn-primary">
          Add Blog
        </Link>
      </Row>
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>image</th>
            <th>heading</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  style={{ width: 150 }}
                  src={`${API}/upload/blog/${item.image}`}
                  alt="blog"
                />
              </td>
              <td>{item.heading}</td>
              <td>
                <Link to={"/admin/blog/edit/" + item._id}>
                  <i className="fa fa-edit" />
                </Link>
              </td>
              <td>
                <Link to="/admin/blog" onClick={e => deleteItem(e, item._id, item.image)}>
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
