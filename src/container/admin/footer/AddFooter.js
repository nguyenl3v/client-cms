import AddFooter from "../../../components/admin/footer/AddFooter";
import { connect } from "react-redux";
import {
  uploadLogoFooter,
  addDataFooter
} from "../../../resources/admin/footer/action";

export default connect(null, { uploadLogoFooter, addDataFooter })(AddFooter);
