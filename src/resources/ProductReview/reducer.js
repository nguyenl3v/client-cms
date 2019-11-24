import { GETDATAREVIEW, POSTDATAREVIEW } from "./constant";
const initialState = {
  data: []
};
const review = (state = initialState, action) => {
  switch (action.type) {
    case GETDATAREVIEW:
      return { ...state, data: action.payload.data };
    case POSTDATAREVIEW:
      return { ...state, postReview: action.payload };
    default:
      return state;
  }
};

export default review;
