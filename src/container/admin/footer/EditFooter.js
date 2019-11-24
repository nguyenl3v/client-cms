import EditFooter from "../../../components/admin/footer/EditFooter";
import { connect } from "react-redux";
import {
  uploadLogoFooter,
  editDataFooter
} from "../../../resources/admin/footer/action";

const mapStateToProps = state => ({
  data: state.adminFooter.data
});

export default connect(mapStateToProps, { uploadLogoFooter, editDataFooter })(
  EditFooter
);
