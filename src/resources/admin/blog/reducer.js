import { GETDATABLOG, UPLOADIMAGEBLOG, ADDDATABLOG, DELETEDATABLOG,EDITDATABLOG } from "./constant";

const initialState = {
  data: []
};

const adminBlog = (state = initialState, action) => {
  switch (action.type) {
    case GETDATABLOG:
      return { ...state, data: action.payload.data };
    case UPLOADIMAGEBLOG:
      return { ...state, image: action.payload.files };
    case ADDDATABLOG:
      return { ...state, addBlog: action.payload };
    case DELETEDATABLOG:
      return { ...state, deleteBlog: action.payload };
    case EDITDATABLOG:
      return { ...state, editDataBlog: action.payload };
    default:
      return state;
  }
};

export default adminBlog;
