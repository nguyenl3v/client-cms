import React from "react";
import { Link } from "react-router-dom";
import { Row } from "../../../styled/Row";
import { ToastContainer } from "react-toastify";
import { API } from "../../../config/defaultApi";

export default function Footer({ data, deleteDataFooter }) {
  const deleteItem = (e, id, fileImage) => {
    e.preventDefault();
    const urlFile = fileImage.match(/^([0-9])\w+/g);
    deleteDataFooter(id, urlFile[0]);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Admin Footer</h2>
        <Link to="/admin/footer/add" className="btn btn-primary">
          Add Footer
        </Link>
      </Row>
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>heading</th>
            <th>logo</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.heading}</td>
              <td>
                {item.logo ? (
                  <img src={`${API}/upload/footer/${item.logo}`} alt="logo" />
                ) : (
                  "no image"
                )}
              </td>
              <td>
                <Link to={"/admin/footer/edit/" + item._id}>
                  <i className="fa fa-edit" />
                </Link>
              </td>
              <td>
                <Link
                  to="/admin/footer"
                  onClick={e => deleteItem(e, item._id, item.logo)}
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
