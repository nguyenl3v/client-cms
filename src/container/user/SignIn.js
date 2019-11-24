import SignIn from "../../components/user/SignIn";
import {connect} from "react-redux";
import {userLogin} from "../../resources/user/action";


export default connect(null,{userLogin})(SignIn);