import React, { Component } from "react";

export default class MapContainer extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-5 col-xl-6">
        <div id="map-wrapper">
          <div className="map-panel">
            <div id="map_wrapper">
              <div id="map_canvas" className="mapping" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
