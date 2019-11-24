import Quickview from "../../components/quickview/Quickview";
import { connect } from "react-redux";
import {
  showquickview,
  hiddenquickview
} from "../../resources/quickview/action";
import { addCart } from "../../resources/cart/action";

const mapStateToProps = state => ({
  dataQuickview: state.quickview
});

export default connect(
  mapStateToProps,
  { showquickview, hiddenquickview, addCart }
)(Quickview);
