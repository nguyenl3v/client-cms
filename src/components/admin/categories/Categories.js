import React from "react";
import { Row } from "../../../styled/Row";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Categories({ categories, deleteDataCategories }) {
  const { data } = categories;
  const deleteItem = (e, id) => {
    e.preventDefault();
    deleteDataCategories(id);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Admin Categories</h2>
        <Link to="/admin/categories/add" className="btn btn-primary">
          Add Categories
        </Link>
      </Row>
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>name</th>
            <th>slug</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.slug}</td>
              <td>
                <Link to={"/admin/categories/edit/" + item._id}>
                  <i className="fa fa-edit" />
                </Link>
              </td>
              <td>
                <Link
                  to="/admin/categories"
                  onClick={e => deleteItem(e, item._id)}
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
