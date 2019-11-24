import WishLish from "../../components/wishlish/WishLish";
import { connect } from "react-redux";
import { addCart } from "../../resources/cart/action";
import { showquickview } from "../../resources/quickview/action";

const mapStateToProps = state => ({
  wishlish: state.wishlish
});

export default connect(mapStateToProps,{addCart, showquickview})(WishLish);
