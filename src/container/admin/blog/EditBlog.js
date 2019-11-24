import EditBlog from "../../../components/admin/blog/EditBlog";
import { connect } from "react-redux";
import {
  uploadImageBlog,
  editDataBlog
} from "../../../resources/admin/blog/action";

const mapStateToProps = state => ({
  data: state.adminBlog.data
});

export default connect(mapStateToProps, { uploadImageBlog, editDataBlog })(
  EditBlog
);
