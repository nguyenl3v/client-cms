import Blog from "../../components/blog/Blog";
import { connect } from "react-redux";

const mapStateToprops = state => ({
  data: state.adminBlog.data
});

export default connect(mapStateToprops, null)(Blog);
