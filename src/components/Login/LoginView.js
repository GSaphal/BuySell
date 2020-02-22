import React, { Component } from "react";
export default class LoginView extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center align-items-center">
          <div className="col col-md-6  col-lg-5 col-xl-4">
            <ul className="nav nav-tabs tab-lg" role="tablist">
              <li role="presentation" className="nav-item">
                <a className="nav-link active" href="/login">
                  Sign In
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="login">
                <form>
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
                  <p className="text-lg-right">
                    <a href="forgot-password.html">Forgot Password</a>
                  </p>
                  <div className="checkbox">
                    <input type="checkbox" id="remember_me" />
                    <label htmlFor="remember_me">Remember Me</label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
            <div> </div>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div className="socal-login-buttons">
              <a href="/#" className="btn btn-social btn-block btn-facebook">
                <i className="icon fa fa-facebook" /> Continue with Facebook
              </a>
              <a href="/#" className="btn btn-social btn-block btn-twitter">
                <i className="icon fa fa-twitter" /> Continue with Twitter
              </a>
              <a href="/#" className="btn btn-social btn-block btn-google">
                <i className="icon fa fa-google" /> Continue with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
