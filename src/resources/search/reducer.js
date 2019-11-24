import {
  VALUESEARCH,
  SHOWLOADING,
  HIDDENLOADING,
  DATASEARCH
} from "./constant";
const initialState = { show: false, data: [] };
const search = (state = initialState, action) => {
  switch (action.type) {
    case VALUESEARCH:
      return { ...state, value: action.payload.value };
    case SHOWLOADING:
      return { ...state, show: true };
    case HIDDENLOADING:
      return { ...state, show: false };
    case DATASEARCH:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};
export default search;
