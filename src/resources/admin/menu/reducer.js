import { GETDATAMENU, DELETEDATAMENU, ADDDATAMENU, EDITDATAMENU } from "./constants";
const initialState = {
  data: []
};

const adminMenu = (state = initialState, action) => {
  switch (action.type) {
    case GETDATAMENU:
      return { ...state, data: action.payload.data };
    case DELETEDATAMENU:
      return { ...state, delete: action.payload.id };
    case ADDDATAMENU:
      return { ...state, addDataMenu: action.payload };
    case EDITDATAMENU:
      return { ...state, editDataMenu: action.payload };
    default:
      return state;
  }
};
export default adminMenu;
