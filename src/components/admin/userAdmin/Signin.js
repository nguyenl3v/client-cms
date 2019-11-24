import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Signin({ loginAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signinAdmin = e => {
    e.preventDefault();
    loginAdmin(email, password);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3 text-center">Admin SignIn</h1>
        </div>
      </div>
      <div className="container">
        <form method="post" onSubmit={e => signinAdmin(e)}>
          <div className="form-group">
            <label>email</label>
            <input
              type="text"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <input
              type="password"
              className="form-control"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!email || !password ? true : false}
          >
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
}
