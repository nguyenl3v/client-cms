import SlideShow from "../../../components/admin/slideshow/SlideShow";
import { connect } from "react-redux";
import {deleteDataSlideShow} from "../../../resources/admin/slideshow/action";


const mapStateToProps = state => ({
  slideshow: state.slideshow
});
export default connect(
  mapStateToProps,
  {deleteDataSlideShow}
)(SlideShow);
