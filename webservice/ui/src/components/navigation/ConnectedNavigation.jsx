import { connect } from "react-redux";
import Navigation from "./Navigation";
import { toggleStats, toggleCamera } from "../../dux/stats";

// maps the redux state to this components props
const mapStateToProps = state => ( {
  statsOn: state.stats.statsOn,
  cameraOn: state.stats.cameraOn,
} );

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ( {
  toggleStats: () => {
    dispatch( toggleStats() );
  },
  toggleCamera: () => {
    dispatch( toggleCamera() );
  },
} );

export default connect( mapStateToProps, mapDispatchToProps )( Navigation );
