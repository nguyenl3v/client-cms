import Admin from "../../components/admin/Admin";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  toggle: state.appChat.toggleMSG
});

export default connect(mapStateToProps, null)(Admin);
