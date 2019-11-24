import { addDataMenu } from "../../../resources/admin/menu/action";
import { connect } from "react-redux";
import AddMenu from "../../../components/admin/menu/AddMenu";

export default connect(
  null,
  { addDataMenu }
)(AddMenu);
