import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import MapContainer from "./MapContainer";
import MapDescription from "./MapDescription";
import MapSide from "./MapSide";
export default class MapView extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="map-listing">
          <div className="row no-gutters has-map fixed">
            <MapContainer />
            <MapDescription />
          </div>
          <button
            id="toggle-filters"
            className="btn btn-primary btn-circle mobile-filter"
          >
            <i className="fa fa-filter" />
          </button>
          <MapSide />
        </div>
        <div className="clearfix"></div>
        <Footer />
      </div>
    );
  }
}
