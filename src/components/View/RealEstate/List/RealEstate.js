import React, { Component } from "react";
import Navbar from "../../../partials/Navbar";
import Footer from "../../../partials/Footer";
import RealEstateBody from "./RealEstateBody";

export default class RealEstate extends Component {
  render() {
    return (
      <div>
        <Navbar /> <RealEstateBody />
        <Footer />
      </div>
    );
  }
}
