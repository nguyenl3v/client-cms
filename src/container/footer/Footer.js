import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  data: state.adminFooter.data
});

export default connect(mapStateToProps, null)(Footer);
