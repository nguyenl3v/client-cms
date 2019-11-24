import { GETDATACATEGORIES, ADDDATACATEGORIES, DELETEDATACATEGORIES, EDITDATACATEGORIES } from "./constants";
const initialState = {
  data: []
};
const categories = (state = initialState, action) => {
  switch (action.type) {
    case GETDATACATEGORIES:
      return { ...state, data: action.payload.data };
    case ADDDATACATEGORIES:
      return { ...state, addCategories: action.payload };
    case DELETEDATACATEGORIES:
      return { ...state, deleteCategories: action.payload.id };
    case EDITDATACATEGORIES:
      return { ...state, editCategories: action.payload };
    default:
      return state;
  }
};
export default categories;
