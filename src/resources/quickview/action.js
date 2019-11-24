import {SHOWQUICKVIEW, HIDDEMQUICKVIEW} from "./constant";
export const showquickview = item => {
  return {
    type: SHOWQUICKVIEW,
    payload: {
      item
    }
  };
};
export const hiddenquickview = () => {
  return {
    type: HIDDEMQUICKVIEW
  };
};
