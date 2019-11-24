import BlogPage from "../../components/blog/BlogPage";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  data: state.adminBlog.data
});

export default connect(mapStateToProps, null)(BlogPage);
