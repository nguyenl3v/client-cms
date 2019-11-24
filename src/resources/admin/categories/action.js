import { GETDATACATEGORIES, ADDDATACATEGORIES, DELETEDATACATEGORIES, EDITDATACATEGORIES } from "./constants";
export const _getDataCategories = data => ({
  type: GETDATACATEGORIES,
  payload: {
    data
  }
});
export const addDataCategories = (name, slug) => ({
  type: ADDDATACATEGORIES,
  payload: {
    name,
    slug
  }
});
export const deleteDataCategories = id => ({
  type: DELETEDATACATEGORIES,
  payload: {
   id
  }
});
export const editDataCategories = (name, slug, id) => ({
  type: EDITDATACATEGORIES,
  payload: {
   name,
   slug,
   id
  }
});
