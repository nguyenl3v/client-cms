import { GETDATAORDER, ADDDATAORDER } from "./constant";
const initialState = {
  data: []
};
const order = (state = initialState, action) => {
  switch (action.type) {
    case GETDATAORDER:
      return { ...state, data: action.payload.data };
    case ADDDATAORDER:
      return { ...state, addData: action.payload };
    default:
      return state;
  }
};
export default order;