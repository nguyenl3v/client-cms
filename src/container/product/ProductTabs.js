import ProductTabs from "../../components/products/ProductTabs";
import { connect } from "react-redux";
import { addCart } from "../../resources/cart/action";
import { addWishlist, deleteWishlist } from "../../resources/wishlish/action";
import { showquickview } from "../../resources/quickview/action";

const mapStateToProps = state => ({
  product: state.product,
  categories: state.categories,
  wl: state.wishlish
});

export default connect(
  mapStateToProps,
  { addCart, deleteWishlist, addWishlist, showquickview }
)(ProductTabs);
