import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import SingleViewHeader from "./SingleViewHeader";
import SingleViewBody from "./SingleViewBody";
import SingleComment from "./SingleComment";
export default class SingleView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SingleViewHeader />
        <div id="content" className="item-single">
          <SingleViewBody />
          <SingleComment />
        </div>

        <Footer />
      </div>
    );
  }
}
