import EditProduct from "../../../components/admin/product/EditProduct";
import { connect } from "react-redux";
import {
  uploadProduct,
  editDataProduct
} from "../../../resources/admin/product/action";

const mapStateToProps = state => ({
  product: state.product,
  categories: state.categories
});
export default connect(
  mapStateToProps,
  { uploadProduct, editDataProduct }
)(EditProduct);
