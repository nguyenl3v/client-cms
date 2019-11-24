import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function SignUp({ userRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const signUpUser = e => {
    e.preventDefault();
    userRegister(name, email, password, password2);
  };
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <div className="container">
        <h2>Register</h2>
        <hr />
        <form method="post" onSubmit={e => signUpUser(e)}>
          <div className="form-group">
            <label>name</label>
            <input
              type="text"
              className="form-control"
              onChange={e => setName(e.target.value)}
            />
          </div>
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
          <div className="form-group">
            <label>confirm password</label>
            <input
              type="password"
              className="form-control"
              onChange={e => setPassword2(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!name || !email || !password || !password2 ? true : false}
          >
            Register
          </button>
          <a className="d-block py-3" href="/login">LogIn</a>
        </form>
      </div>
    </div>
  );
}
