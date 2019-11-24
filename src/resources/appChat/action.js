import { GETUSERADMIN, GETMESSAGE, TOGGLEMESSAGE, GETMESSAGEADMIN, GETUSERCUSTOMER } from "./constant";

export const getUserAdmin = user => ({
  type: GETUSERADMIN,
  payload: {
    user
  }
});

export const getMessage = msg => ({
  type: GETMESSAGE,
  payload: {
    msg
  }
});
export const getMessageAdmin = msg => ({
  type: GETMESSAGEADMIN,
  payload: {
    msg
  }
});
export const getUserCustomer = user => ({
  type: GETUSERCUSTOMER,
  payload: {
    user
  }
});

export const toggleMessage = toggle => ({
  type: TOGGLEMESSAGE,
  payload: {
    toggle
  }
});
