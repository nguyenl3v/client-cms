import AppChat from "../../components/appChat/AppChat";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  userShop: state.appChat,
  user:state.user.getUser,
  msg:state.appChat.msg,
});

export default connect(
  mapStateToProps,
  null
)(AppChat);
