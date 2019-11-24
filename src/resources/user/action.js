import { USERREGISTER, USERLOGIN, GETUSER } from "./constant";

export const userRegister = (name, email, password, password2) => ({
  type: USERREGISTER,
  payload: {
    name,
    email,
    password,
    password2
  }
});

export const userLogin = (email, password) => ({
  type: USERLOGIN,
  payload: {
    email,
    password
  }
});

export const _getUser = user => ({
  type: GETUSER,
  payload: {
    user
  }
});
