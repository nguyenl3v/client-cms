import { GETDATAREVIEW, POSTDATAREVIEW } from "./constant";

export const _getDataReview = data => ({
  type: GETDATAREVIEW,
  payload: {
    data
  }
});
export const postDataReview = (name, rating, evaluate, idProduct) => ({
  type: POSTDATAREVIEW,
  payload: {
    name,
    rating,
    evaluate,
    idProduct
  }
});
