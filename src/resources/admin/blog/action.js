import {
  GETDATABLOG,
  UPLOADIMAGEBLOG,
  ADDDATABLOG,
  DELETEDATABLOG,
  EDITDATABLOG
} from "./constant";

export const _getDataBlog = data => ({
  type: GETDATABLOG,
  payload: {
    data
  }
});

export const uploadImageBlog = files => ({
  type: UPLOADIMAGEBLOG,
  payload: {
    files
  }
});

export const addDataBlog = (heading, description) => ({
  type: ADDDATABLOG,
  payload: {
    heading,
    description
  }
});

export const deleteDataBlog = (id, urlFile) => ({
  type: DELETEDATABLOG,
  payload: {
    id,
    urlFile
  }
});

export const editDataBlog = (heading, description, urlFile, id) => ({
  type: EDITDATABLOG,
  payload: {
    heading,
    description,
    urlFile,
    id
  }
});
