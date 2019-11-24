import Signin from "../../../components/admin/userAdmin/Signin";
import {connect} from "react-redux";
import { loginAdmin } from "../../../resources/admin/userAdmin/action";


export default connect(null,{loginAdmin})(Signin);