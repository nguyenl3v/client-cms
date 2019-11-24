import SignUp from "../../components/user/SignUp";
import {connect} from "react-redux";
import {userRegister} from "../../resources/user/action";


export default connect(null,{userRegister})(SignUp);