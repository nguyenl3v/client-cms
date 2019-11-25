import { combineReducers } from "redux";
import adminMenu from "./resources/admin/menu/reducer";
import categories from "./resources/admin/categories/reducer";
import slideshow from "./resources/admin/slideshow/reducer";
import product from "./resources/admin/product/reducer";
import shoppingCart from "./resources/cart/reducer";
import wishlish from "./resources/wishlish/reducer";
import quickview from "./resources/quickview/reducer";
import userAdmin from "./resources/admin/userAdmin/reducer";
import user from "./resources/user/reducer";
import review from "./resources/ProductReview/reducer";
import appChat from "./resources/appChat/reducer";
import adminBlog from "./resources/admin/blog/reducer";
import search from "./resources/search/reducer";
import adminFooter from "./resources/admin/footer/reducer";
import order from "./resources/order/reducer";
import loading from "./resources/loading/reducer";

const rootReducer = combineReducers({
  adminMenu,
  categories,
  slideshow,
  product,
  adminBlog,
  shoppingCart,
  wishlish,
  quickview,
  userAdmin,
  user,
  review,
  appChat,
  search,
  adminFooter,
  order,
  loading
});
export default rootReducer;
