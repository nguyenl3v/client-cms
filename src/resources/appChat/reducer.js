import {
  GETUSERADMIN,
  GETMESSAGE,
  TOGGLEMESSAGE,
  GETMESSAGEADMIN,
  GETUSERCUSTOMER
} from "./constant";
const initialState = {
  msg: [],
  user: [],
  toggleMSG: false,
  messageAdmin: [],
  userCustomer: []
};
const appChat = (state = initialState, action) => {
  switch (action.type) {
    case GETUSERADMIN:
      return { ...state, user: action.payload.user };
    case GETMESSAGE:
      return { ...state, msg: action.payload.msg };
    case TOGGLEMESSAGE:
      return { ...state, toggleMSG: action.payload.toggle };
    case GETMESSAGEADMIN:
      return { ...state, messageAdmin: action.payload.msg };
    case GETUSERCUSTOMER:
      return { ...state, userCustomer: action.payload.user };
    default:
      return state;
  }
};
export default appChat;
