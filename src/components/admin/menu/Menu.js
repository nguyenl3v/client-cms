import React from "react";
import { Link } from "react-router-dom";
import { Row } from "../../../styled/Row";
import { ToastContainer } from "react-toastify";

export default function Menu({ menu, deleteDataMenu }) {
  const { data } = menu;
  const deleteItem = (e, id) => {
    e.preventDefault();
    deleteDataMenu(id);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Admin Menu</h2>
        <Link to="/admin/menu/add" className="btn btn-primary">
          Add Menu
        </Link>
      </Row>
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>title</th>
            <th>link</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.link}</td>
              <td>
                <Link to={"/admin/menu/edit/" + item._id}>
                  <i className="fa fa-edit" />
                </Link>
              </td>
              <td>
                <Link to="/admin/menu" onClick={e => deleteItem(e, item._id)}>
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
