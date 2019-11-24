import AddProduct from "../../../components/admin/product/AddProduct";
import { connect } from "react-redux";
import {
  addDataProduct,
  uploadProduct
} from "../../../resources/admin/product/action";

const mapStateToProps = state => ({
  categories:state.categories
});
export default connect(
  mapStateToProps,
  { addDataProduct, uploadProduct }
)(AddProduct);
