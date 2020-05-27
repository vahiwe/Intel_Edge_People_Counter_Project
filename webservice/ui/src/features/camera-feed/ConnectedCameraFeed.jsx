import { connect } from "react-redux";
import CameraFeed from "./CameraFeed";

// maps the redux state to this components props
const mapStateToProps = state => ( {
  cameraOn: state.stats.cameraOn,
} );

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( CameraFeed );
