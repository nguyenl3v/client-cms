import EditCategories from "../../../components/admin/categories/EditCategories";
import { connect } from "react-redux";
import { editDataCategories } from "../../../resources/admin/categories/action";

const mapStateToProps = state => ({
  categories: state.categories
});
export default connect(
  mapStateToProps,
  {editDataCategories}
)(EditCategories);
