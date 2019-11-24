import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function SignIn({ userLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signinUser = e => {
    e.preventDefault();
    userLogin(email, password);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <div className="container">
        <h2>Login</h2>
        <hr/>
        <form method="post" onSubmit={e => signinUser(e)}>
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
          <a className="d-block py-3" href="/register">Create account</a>
        </form>
      </div>
    </div>
  );
}
