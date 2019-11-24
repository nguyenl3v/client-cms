import {
  GETDATAFOOTER,
  ADDDATAFOOTER,
  UPLOADLOGOFOOTER,
  DELETEDATAFOOTER,
  EDITDATAFOOTER
} from "./constant";
const initialState = {
  data: []
};

const adminFooter = (state = initialState, action) => {
  switch (action.type) {
    case GETDATAFOOTER:
      return { ...state, data: action.payload.data };
    case ADDDATAFOOTER:
      return { ...state, addData: action.payload };
    case UPLOADLOGOFOOTER:
      return { ...state, logo: action.payload.logo };
    case DELETEDATAFOOTER:
      return { ...state, deleteItemData: action.payload };
    case EDITDATAFOOTER:
      return { ...state, editData: action.payload };
    default:
      return state;
  }
};
export default adminFooter;
