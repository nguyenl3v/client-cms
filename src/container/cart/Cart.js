import Cart from "../../components/cart/Cart";
import { connect } from "react-redux";
import { addQuantity, deleteCart, clearCart } from "../../resources/cart/action";

const mapStateToProps = state => ({
  cart: state.shoppingCart
});

export default connect(
  mapStateToProps,
  { addQuantity, deleteCart, clearCart }
)(Cart);
