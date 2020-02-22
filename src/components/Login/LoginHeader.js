import React, { Component } from "react";

export default class LoginHeader extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-12 col-lg-10 col-xl-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/login">Account</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Login
                </li>
              </ol>
            </nav>
            <div className="page-header">
              <h1>Please sign in or register</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
