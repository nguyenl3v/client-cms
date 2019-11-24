import {
  GETDATAPRODUCT,
  ADDDATAPRODUCT,
  UPLOADPRODUCT,
  DELETEDATAPRODUCT,
  EDITDATAPRODUCT
} from "./constants";

export const _getDataProduct = data => ({
  type: GETDATAPRODUCT,
  payload: {
    data
  }
});
export const addDataProduct = (
  name,
  price,
  priceSale,
  description,
  color,
  size,
  categories
) => ({
  type: ADDDATAPRODUCT,
  payload: {
    name,
    price,
    priceSale,
    description,
    color,
    size,
    categories
  }
});

export const uploadProduct = image => ({
  type: UPLOADPRODUCT,
  payload: {
    image
  }
});
export const deleteDataProduct = (id, file) => ({
  type: DELETEDATAPRODUCT,
  payload: {
    id,
    file
  }
});
export const editDataProduct = (
  name,
  price,
  priceSale,
  description,
  color,
  size,
  urlFile,
  categories,
  id
) => ({
  type: EDITDATAPRODUCT,
  payload: {
    name,
    price,
    priceSale,
    description,
    color,
    size,
    urlFile,
    categories,
    id
  }
});
