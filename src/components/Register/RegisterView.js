import React, { Component } from "react";
export default class RegisterView extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center align-items-center">
          <div className="col col-md-6  col-lg-5 col-xl-4">
            <ul className="nav nav-tabs tab-lg" role="tablist">
              <li role="presentation" className="nav-item">
                <a href="/login" className="nav-link">
                  Sign In
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a className="nav-link active" href="/register">
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="login">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                      By registering I accept our Terms of Use and Privacy.
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </form>
              </div>
            </div>
            <div> </div>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div className="socal-login-buttons">
              {" "}
              <a href="/#" className="btn btn-social btn-block btn-facebook">
                <i className="icon fa fa-facebook" /> Continue with Facebook
              </a>{" "}
              <a href="/#" className="btn btn-social btn-block btn-twitter">
                <i className="icon fa fa-twitter" /> Continue with Twitter
              </a>{" "}
              <a href="/#" className="btn btn-social btn-block btn-google">
                <i className="icon fa fa-google" /> Continue with Google
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
