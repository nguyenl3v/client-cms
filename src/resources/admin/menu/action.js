import { GETDATAMENU, DELETEDATAMENU, ADDDATAMENU, EDITDATAMENU } from "./constants";
export const _getDataMenu = data => ({
  type: GETDATAMENU,
  payload: {
    data
  }
});
export const deleteDataMenu = id => ({
  type: DELETEDATAMENU,
  payload: {
    id
  }
});
export const addDataMenu = (title, link) => ({
  type: ADDDATAMENU,
  payload: {
    title,
    link
  }
});
export const editDataMenu = (title, link, id) => ({
  type: EDITDATAMENU,
  payload: {
    title,
    link,
    id
  }
});
