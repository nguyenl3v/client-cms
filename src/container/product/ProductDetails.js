import ProductDetails from "../../components/products/product-details/ProductDetails";
import { connect } from "react-redux";
import { addCart } from "../../resources/cart/action";
import { addWishlist, deleteWishlist } from "../../resources/wishlish/action";
import { showquickview } from "../../resources/quickview/action";
import {postDataReview} from "../../resources/ProductReview/action";

const mapStateToProps = state => ({
  product: state.product,
  wl: state.wishlish,
  review: state.review,
  user:state.user.getUser,
});

export default connect(
  mapStateToProps,
  { addCart, deleteWishlist, addWishlist, showquickview, postDataReview }
)(ProductDetails);
