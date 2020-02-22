import React, { Component } from "react";
import Navbar from "../../partials/Navbar";
import Footer from "../../partials/Footer";
import RealEstateBody from "./List/RealEstateBody";

export default class RealEstateSingle extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="content" className="pt0 pb0">
          <RealEstateBody />

          <Footer />
        </div>
      </div>
    );
  }
}
