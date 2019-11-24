import { fork, all } from "redux-saga/effects";
import adminMenu from "./resources/admin/menu/saga";
import categories from "./resources/admin/categories/saga";
import slideshow from "./resources/admin/slideshow/saga";
import product from "./resources/admin/product/saga";
import userAdmin from "./resources/admin/userAdmin/saga";
import user from "./resources/user/saga";
import adminBlog from "./resources/admin/blog/saga";
import search from "./resources/search/saga";
import adminFooter from "./resources/admin/footer/saga";
import order from "./resources/order/saga";

const sagas = [
  ...adminMenu,
  ...categories,
  ...slideshow,
  ...product,
  ...userAdmin,
  ...user,
  ...adminBlog,
  ...search,
  ...adminFooter,
  ...order
];
function* rootSaga() {
  const globalFork = sagas.map(saga => fork(saga));
  yield all([...globalFork]);
}

export default rootSaga;
