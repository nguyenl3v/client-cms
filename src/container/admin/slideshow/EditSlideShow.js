import EditSlideShow from "../../../components/admin/slideshow/EditSlideShow";
import { connect } from "react-redux";
import {_editDataSlideShow, upload} from "../../../resources/admin/slideshow/action";

const mapStatetoProps = state => ({
  slideshow: state.slideshow
});
export default connect(
  mapStatetoProps,
  {_editDataSlideShow, upload}
)(EditSlideShow);
