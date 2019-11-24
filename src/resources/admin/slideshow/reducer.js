import { GETDATASLIDESHOW, ADDDATASLIDESHOW, UPLOAD, DELETEDATASLIDESHOW, EDITDATASLIDESHOW } from "./constants";

const initialState = {
  data: []
};

const slideshow = (state = initialState, action) => {
  switch (action.type) {
    case GETDATASLIDESHOW:
      return { ...state, data: action.payload.data };
    case ADDDATASLIDESHOW:
      return { ...state, addSlideShow: action.payload };
    case UPLOAD:
      return { ...state, upload: action.payload.image };
    case DELETEDATASLIDESHOW:
      return { ...state, deleteSlideShow: action.payload };
    case EDITDATASLIDESHOW:
      return { ...state, editSlideShow: action.payload };
    default:
      return state;
  }
};

export default slideshow;
