import { GETDATAORDER, ADDDATAORDER } from "./constant";

export const _getDataOrder = data => ({
  type: GETDATAORDER,
  payload: {
    data
  }
});

export const addDataOrder = (
  name,
  email,
  address,
  city,
  province,
  postalCode,
  phone,
  cart
) => ({
  type: ADDDATAORDER,
  payload: {
    name,
    email,
    address,
    city,
    province,
    postalCode,
    phone,
    cart
  }
});
