import {connect} from "react-redux";
import EditMenu from "../../../components/admin/menu/EditMenu";
import {editDataMenu} from "../../../resources/admin/menu/action";

const mapStateToProps = state => ({
  Menu:state.adminMenu
})
export default connect(mapStateToProps, {editDataMenu})(EditMenu);