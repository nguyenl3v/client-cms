import AddCategories from "../../../components/admin/categories/AddCategories";
import {connect} from "react-redux";
import { addDataCategories } from "../../../resources/admin/categories/action";

export default connect(null,{addDataCategories})(AddCategories);