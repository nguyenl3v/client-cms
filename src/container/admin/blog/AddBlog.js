import AddBlog from "../../../components/admin/blog/AddBlog";
import { connect } from "react-redux";
import {
  uploadImageBlog,
  addDataBlog
} from "../../../resources/admin/blog/action";

export default connect(null, { uploadImageBlog, addDataBlog })(AddBlog);
