import { LOGINADMIN } from "./constant";
const initialState = {};

const adminSignin = (state = initialState, action) => {
  switch (action.type) {
    case LOGINADMIN:
      return {...state, user:action.payload}
    default:
      return state;
  }
}
export default adminSignin;