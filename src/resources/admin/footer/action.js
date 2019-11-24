import {
  GETDATAFOOTER,
  ADDDATAFOOTER,
  UPLOADLOGOFOOTER,
  DELETEDATAFOOTER,
  EDITDATAFOOTER
} from "./constant";

export const _getDataFooter = data => ({
  type: GETDATAFOOTER,
  payload: {
    data
  }
});

export const addDataFooter = (heading, width, description) => ({
  type: ADDDATAFOOTER,
  payload: {
    heading,
    width,
    description
  }
});

export const uploadLogoFooter = logo => ({
  type: UPLOADLOGOFOOTER,
  payload: {
    logo
  }
});

export const deleteDataFooter = (id, urlFile) => ({
  type: DELETEDATAFOOTER,
  payload: {
    id,
    urlFile
  }
});

export const editDataFooter = (heading, width, description, urlFile, id) => ({
  type: EDITDATAFOOTER,
  payload: {
    heading,
    width,
    description,
    urlFile,
    id
  }
});
