import React from "react";
import "./CameraFeed.css";
import PropTypes from "prop-types";
import { HTTP, SETTINGS } from "../../constants/constants";

class CameraFeed extends React.Component {
  constructor( props ) {
    super( props );
    this.mjpgSrc = HTTP.CAMERA_FEED;
    this.refreshImage = this.refreshImage.bind( this );
    this.mjpgSrc = HTTP.CAMERA_FEED;

    this.state = {
      mjpgSrc: this.mjpgSrc,
      show: true
    };
  }
  refreshImage() {
    const d = new Date();
    this.setState( { mjpgSrc: `${ this.mjpgSrc }?ver=${ d.getTime() }` } );
    // this.setState({show : !this.state.show})

  }

  render() {
    const width = SETTINGS.CAMERA_FEED_WIDTH;//640
    // const imgStyle = this.props.cameraOn ? { "maxWidth": `${ width }px` } : { "maxWidth": `0px` };
    const imgStyle ={ "maxWidth": `${ width }px` };
    return (
      <div className={`camera-feed`} >
        <div className={`camera-feed-container`}>
          <img src={ this.state.mjpgSrc } alt="camera feed" style={{ ...imgStyle}} onClick={ this.refreshImage } className="camera-feed-img" />
        </div>
      </div>
    );
  }
}

CameraFeed.propTypes = {
  cameraOn: PropTypes.bool.isRequired,
};

CameraFeed.defaultProps = {
};

export default CameraFeed;
