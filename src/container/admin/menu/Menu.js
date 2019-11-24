
import { connect } from "react-redux";
import Menu from "../../../components/admin/menu/Menu";
import {deleteDataMenu} from "../../../resources/admin/menu/action";

const mapStateToProps = state => ({
  menu: state.adminMenu
});
export default connect(
  mapStateToProps,
  {deleteDataMenu}
)(Menu);
