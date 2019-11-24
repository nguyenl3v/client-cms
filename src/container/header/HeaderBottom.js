import HeaderBottom from "../../components/header/HeaderBottom";
import { getValueSearch } from "../../resources/search/action";
import { connect } from "react-redux";

const mapStateToprops = state => ({
  data: state.search.data,
  loading: state.search.show
});

export default connect(mapStateToprops, { getValueSearch })(HeaderBottom);
