import AddCartSuccess from "../../components/addCartSuccess/AddCartSuccess";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  cart: state.shoppingCart
});

export default connect(mapStateToProps)(AddCartSuccess);
