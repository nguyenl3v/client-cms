import { USERREGISTER, USERLOGIN, GETUSER } from "./constant";
const initialState = {
  token:sessionStorage.getItem("userToken"),
  getUser:[]
};

const userRegister = (state = initialState, action) => {
  switch (action.type) {
    case USERREGISTER:
      return { ...state, userRegister: action.payload };
    case USERLOGIN:
      return { ...state, userLogin: action.payload };
    case GETUSER:
      return { ...state, getUser: action.payload.user };
    default:
      return state;
  }
};
export default userRegister;
