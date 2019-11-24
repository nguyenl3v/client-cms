import {
  GETDATASLIDESHOW,
  ADDDATASLIDESHOW,
  UPLOAD,
  DELETEDATASLIDESHOW,
  EDITDATASLIDESHOW
} from "./constants";

export const _getDataSlideShow = data => ({
  type: GETDATASLIDESHOW,
  payload: {
    data
  }
});
export const addDataSlideShow = (heading, title, button, buttonLink) => ({
  type: ADDDATASLIDESHOW,
  payload: {
    heading,
    title,
    button,
    buttonLink
  }
});
export const upload = image => ({
  type: UPLOAD,
  payload: {
    image
  }
});
export const deleteDataSlideShow = (id, file) => ({
  type: DELETEDATASLIDESHOW,
  payload: {
    id,
    file
  }
});
export const _editDataSlideShow = (
  heading,
  title,
  button,
  buttonLink,
  urlFile,
  id
) => ({
  type: EDITDATASLIDESHOW,
  payload: {
    heading,
    title,
    button,
    buttonLink,
    urlFile,
    id
  }
});
