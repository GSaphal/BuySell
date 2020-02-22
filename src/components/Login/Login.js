import React, { Component } from "react";
import LoginView from "./LoginView";
import Navbar from "../partials/Navbar";
import LoginHeader from "./LoginHeader";
import Footer from "../partials/Footer";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LoginHeader />
        <div id="content" className="pt0 pb0">
          <LoginView />
          <Footer />
        </div>
      </div>
    );
  }
}
