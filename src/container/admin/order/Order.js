import Order from "../../../components/admin/order/Order";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  order: state.order.data
});

export default connect(mapStateToProps, null)(Order);
