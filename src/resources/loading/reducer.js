import { SHOWLOADING, HIDDENLOADING } from "./constant";
const initialState = {
  showLoading: false
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case SHOWLOADING:
      return { ...state, showLoading: true };
    case HIDDENLOADING:
      return { ...state, showLoading: false };
    default:
      return state;
  }
};

export default loading;
