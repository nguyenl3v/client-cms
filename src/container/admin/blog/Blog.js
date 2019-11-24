import Blog from "../../../components/admin/blog/Blog";
import { connect } from "react-redux";
import {deleteDataBlog} from "../../../resources/admin/blog/action";

const mapStateToProps = state => ({
  data: state.adminBlog.data
});

export default connect(mapStateToProps, {deleteDataBlog})(Blog);
