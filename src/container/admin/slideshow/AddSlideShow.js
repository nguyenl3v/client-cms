import AddSlideShow from "../../../components/admin/slideshow/AddSlideShow";
import { connect } from "react-redux";
import {addDataSlideShow, upload} from "../../../resources/admin/slideshow/action";

export default connect(
  null,
  { addDataSlideShow, upload }
)(AddSlideShow);
