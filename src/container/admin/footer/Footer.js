import Footer from "../../../components/admin/footer/Footer";
import { connect } from "react-redux";
import { deleteDataFooter } from "../../../resources/admin/footer/action";

const mapStateToProps = state => ({
  data: state.adminFooter.data
});

export default connect(mapStateToProps, { deleteDataFooter })(Footer);
