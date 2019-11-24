import CheckOut from "../../components/order/CheckOut";
import { connect } from "react-redux";
import { addDataOrder } from "../../resources/order/action";

const mapStateToProps = state => ({
  cart: state.shoppingCart
});

export default connect(mapStateToProps, { addDataOrder })(CheckOut);
