import Header from "../../components/header/Header";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  menu: state.adminMenu,
  cart: state.shoppingCart,
  wl: state.wishlish,
  user: state.user,
  token: state.user.token
});
export default connect(mapStateToProps)(Header);
