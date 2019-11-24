import BlogItem from "../../components/blog/BlogItem";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  data: state.adminBlog.data
});

export default connect(mapStateToProps, null)(BlogItem);
