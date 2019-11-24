import {SHOWQUICKVIEW, HIDDEMQUICKVIEW} from "./constant";
const initialState = [];

const quickview = (state = initialState, action) => {
  let tempQuickView = [...state];
  switch (action.type) {
    case SHOWQUICKVIEW:
      tempQuickView.push(action.payload.item);
      return tempQuickView;
    case HIDDEMQUICKVIEW:
      tempQuickView = [];
      return tempQuickView;
    default:
      return state;
  }
};
export default quickview;
