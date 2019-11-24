import SlideShow from "../../components/slideshow/SlideShow";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  slideshow: state.slideshow
});

export default connect(
  mapStateToProps,
  null
)(SlideShow);
