import {
  GETDATAPRODUCT,
  ADDDATAPRODUCT,
  UPLOADPRODUCT,
  DELETEDATAPRODUCT,
  EDITDATAPRODUCT
} from "./constants";
const initialState = {
  data: []
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case GETDATAPRODUCT:
      return { ...state, data: action.payload.data };
    case ADDDATAPRODUCT:
      return { ...state, addData: action.payload };
    case UPLOADPRODUCT:
      return { ...state, addImage: action.payload.image };
    case DELETEDATAPRODUCT:
      return { ...state, deleteProduct: action.payload.id };
    case EDITDATAPRODUCT:
      return { ...state, editProduct: action.payload };
    default:
      return state;
  }
};

export default product;
