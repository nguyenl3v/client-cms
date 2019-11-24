import React from "react";
import { Row } from "../../../styled/Row";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { API } from "../../../config/defaultApi";

export default function Product({ product, deleteDataProduct }) {
  const { data } = product;
  const deleteItem = (e, id, file) => {
    e.preventDefault();
    const fileURL = file.match(/([0-9])\w+/);
    deleteDataProduct(id, fileURL[0]);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Admin Product</h2>
        <Link to="/admin/product/add" className="btn btn-primary">
          Add Product
        </Link>
      </Row>
      <table className="table table">
        <thead className="thead-inverse">
          <tr>
            <th>name</th>
            <th>image</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <img
                  style={{ width: 50 }}
                  src={`${API}/upload/product/${item.image[0]}`}
                  alt="product"
                />
              </td>
              <td>
                <Link to={"/admin/product/edit/" + item._id}>
                  <i className="fa fa-edit" />
                </Link>
              </td>
              <td>
                <Link
                  to="/admin/product"
                  onClick={e => deleteItem(e, item._id, item.image[0])}
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
