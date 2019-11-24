import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Row } from "../../../styled/Row";
import Dropzone from "react-dropzone";
import { ToastContainer } from "react-toastify";
import { FormControl } from "../../../styled/FormControl";
import { FieldsProduct } from "../../../styled/FieldsProduct";

export default function AddProduct({
  addDataProduct,
  uploadProduct,
  categories
}) {
  const { data } = categories;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [priceSale, setPriceSale] = useState(0);
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");
  const colors = useRef(null);
  const sizes = useRef(null);
  const color = [];
  const size = [];

  const addColor = () => {
    const c = document.createElement("div");
    const drawc = document.getElementById("color");
    color.push(colors.current.value);
    c.innerHTML = colors.current.value;
    colors.current.value = "";
    drawc.appendChild(c);
  };
  const addSize = () => {
    const draws = document.getElementById("size");
    const s = document.createElement("div");
    size.push(sizes.current.value);
    s.innerHTML = sizes.current.value;
    draws.appendChild(s);
    sizes.current.value = "";
  };

  const uploadImage = async files => {
    const data = new FormData();
    for (var i = 0; i < files.length; i++) {
      await data.append("file", files[i]);
    }
    uploadProduct(data);
  };
  const addProduct = e => {
    e.preventDefault();
    addDataProduct(name, price, priceSale, description, color, size, categorie);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Add Product</h2>
        <Link to="/admin/product" className="btn btn-primary">
          Back To Product
        </Link>
      </Row>
      <form method="post" onSubmit={e => addProduct(e)}>
        <div className="form-group">
          <label>product name </label>
          <input
            type="text"
            className="form-control"
            placeholder="product name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select onChange={e => setCategorie(e.target.value)}>
            <option>select option</option>
            {data.map((item, index) => (
              <option key={index} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>product price </label>
          <input
            type="number"
            className="form-control"
            placeholder="product price"
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>product price sale </label>
          <input
            type="number"
            className="form-control"
            placeholder="product price sale"
            onChange={e => setPriceSale(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>product description </label>
          <textarea
            type="text"
            className="form-control"
            onChange={e => setDescription(e.target.value)}
            placeholder="product description"
          />
        </div>
        <FieldsProduct>
          <div id="color"></div>
          <div id="size"></div>
        </FieldsProduct>
        <FormControl>
          <div>
            <label>product color </label>
            <input type="text" placeholder="product color" ref={colors} />
          </div>
          <div className="btn btn-primary" onClick={() => addColor()}>
            add color
          </div>
          <div>
            <label>product size </label>
            <input type="text" placeholder="product size" ref={sizes} />
          </div>
          <div className="btn btn-primary" onClick={() => addSize()}>
            add size
          </div>
        </FormControl>
        <div className="form-group">
          <label>product image </label>
          <Dropzone onDrop={files => uploadImage(files)}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps({
                  className: "dropzone form-control",
                  onDrop: event => event.stopPropagation()
                })}
              >
                <input {...getInputProps()} />
                <p>upload</p>
              </div>
            )}
          </Dropzone>
        </div>
        <button type="submit" className="btn btn-success">
          add product
        </button>
      </form>
    </div>
  );
}
