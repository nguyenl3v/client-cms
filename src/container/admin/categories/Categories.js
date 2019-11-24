import Categories from "../../../components/admin/categories/Categories";
import { connect } from "react-redux";
import { deleteDataCategories } from "../../../resources/admin/categories/action";

const mapstateToProps = state => ({
  categories: state.categories
});
export default connect(
  mapstateToProps,
  { deleteDataCategories }
)(Categories);
