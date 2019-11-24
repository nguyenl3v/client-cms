import React, { useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Row } from "../../../styled/Row";
import { Link } from "react-router-dom";
import { FormControl } from "../../../styled/FormControl";
import { FieldsProduct } from "../../../styled/FieldsProduct";
import Dropzone from "react-dropzone";
import { API } from "../../../config/defaultApi";

export default function EditProduct({
  product,
  match,
  uploadProduct,
  editDataProduct,
  categories
}) {
  const { data } = product;
  const cate = categories.data;
  const { id } = match.params;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [priceSale, setPriceSale] = useState(0);
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");
  const filerData = data.length > 0 && data.find(item => item._id === id);
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
  const viewColor = color => (
    <React.Fragment>
      {color && color.map((item, index) => <div key={index}>{item}</div>)}
    </React.Fragment>
  );
  const viewSize = size => (
    <React.Fragment>
      {size && size.map((item, index) => <div key={index}>{item}</div>)}
    </React.Fragment>
  );
  const viewImage = image =>
    image &&
    image.map((item, index) => (
      <img style={{width:100}} src={`${API}/upload/product/${item}`} alt="product" key={index} />
    ));
  const editProduct = e => {
    e.preventDefault();
    const fileURL = filerData.image[0].match(/^([0-9])\w+/g);
    editDataProduct(
      name,
      price,
      priceSale,
      description,
      color,
      size,
      fileURL[0],
      categorie,
      id
    );
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Row>
        <h2>Edit Product</h2>
        <Link to="/admin/product" className="btn btn-primary">
          Back To Product
        </Link>
      </Row>
      <form method="post" onSubmit={e => editProduct(e)}>
        <div className="form-group">
          <label>name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={filerData.name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select onChange={e => setCategorie(e.target.value)}>
            <option>select option</option>
            {cate.map((item, index) => (
              <option key={index} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>price</label>
          <input
            type="number"
            className="form-control"
            defaultValue={filerData.price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>price sale</label>
          <input
            type="number"
            className="form-control"
            defaultValue={filerData.priceSale}
            onChange={e => setPriceSale(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>description</label>
          <textarea
            type="text"
            className="form-control"
            rows="10"
            defaultValue={filerData.description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <FieldsProduct>
          <div id="color">{viewColor(filerData.color)}</div>
          <div id="size">{viewSize(filerData.size)}</div>
        </FieldsProduct>
        <FormControl>
          <div>
            <label>color</label>
            <input type="text" ref={colors} />
          </div>
          <div className="btn btn-primary" onClick={() => addColor()}>
            add color
          </div>
          <div>
            <label>size</label>
            <input type="text" ref={sizes} />
          </div>
          <div className="btn btn-primary" onClick={() => addSize()}>
            add size
          </div>
        </FormControl>
        <div className="my-4">{viewImage(filerData.image)}</div>
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
        <button className="btn btn-success" type="submit">
          save edit product
        </button>
      </form>
    </div>
  );
}
