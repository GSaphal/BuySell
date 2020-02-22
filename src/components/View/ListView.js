import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import ViewHeader from "./ViewHeader";
import ListViewData from "./ListViewData";
import ViewModal from "./ViewModal";

export default class ListView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ViewHeader />
        <div id="content" className="pt0 pb0">
          <ListViewData />
          <ViewModal />
          <Footer />
        </div>
      </div>
    );
  }
}
