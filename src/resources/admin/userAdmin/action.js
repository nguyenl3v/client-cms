import { LOGINADMIN } from "./constant";

export const loginAdmin = (email, password) => ({
  type: LOGINADMIN,
  payload: {
    email,
    password
  }
});
