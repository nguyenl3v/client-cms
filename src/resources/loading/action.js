import {SHOWLOADING, HIDDENLOADING} from "./constant";

export const showLoading = () => {
  return {
    type: SHOWLOADING
  };
};
export const hiddenLoading = () => {
  return {
    type: HIDDENLOADING
  };
};
