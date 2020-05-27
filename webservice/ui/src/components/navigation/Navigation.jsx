import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import "./Navigation.css";

// const icon = require( "assets/images/intel-people-counter.svg" );

const Navigation = ( { toggleStats, statsOn, toggleCamera, cameraOn } ) => (
  <nav className="navigation">
    <div className="navBtns">
      <a className={ `navBtn history ${ cameraOn ? "active" : "" }` } onClick={ toggleCamera }><FontAwesome name="camera" size="2x" /></a>
    </div>
    <span className="logo-title" />
    <div className="navBtns">
      <a className={ `navBtn history ${ statsOn ? "active" : "" }` } onClick={ toggleStats }><FontAwesome name="area-chart" size="2x" /></a>
    </div>
  </nav>
);

Navigation.propTypes = {
  toggleStats: PropTypes.func.isRequired,
  statsOn: PropTypes.bool.isRequired,
  toggleCamera: PropTypes.func.isRequired,
  cameraOn: PropTypes.bool.isRequired,
};

Navigation.defaultProps = {

/*  label: undefined,
  click: undefined,
  data: undefined,*/
};

export default Navigation;
