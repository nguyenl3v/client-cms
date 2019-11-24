import {
  VALUESEARCH,
  SHOWLOADING,
  HIDDENLOADING,
  DATASEARCH
} from "./constant";

export const getValueSearch = value => ({
  type: VALUESEARCH,
  payload: {
    value
  }
});

export const showLoading = () => ({
  type: SHOWLOADING
});

export const hiddenLoading = () => ({
  type: HIDDENLOADING
});

export const dataSearch = data => ({
  type: DATASEARCH,
  payload: {
    data
  }
});
