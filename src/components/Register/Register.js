import React, { Component } from "react";
import RegisterHeader from "./RegisterHeader";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import RegisterView from "./RegisterView";

export default class Register extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RegisterHeader />
        <div id="content" className="pt0 pb0">
          <RegisterView />
          <Footer />
        </div>
      </div>
    );
  }
}
