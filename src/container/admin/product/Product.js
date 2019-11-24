import Product from "../../../components/admin/product/Product";
import { connect } from "react-redux";
import {deleteDataProduct} from "../../../resources/admin/product/action";

const mapStateToProps = state => ({
  product: state.product
});
export default connect(
  mapStateToProps,
  {deleteDataProduct}
)(Product);
