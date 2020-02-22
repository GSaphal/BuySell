import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="menu">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="icon-uilove icon-uilove-realestate"></span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu-content"
            aria-controls="menu-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu-content">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Listings
                </a>
                <div className="dropdown-menu">
                  <a href="/real-estate/list" className="dropdown-item">
                    Real Estate
                  </a>
                  <a href="/list-view" className="dropdown-item">
                    Vechiles
                  </a>
                  <a href="/list-view" className="dropdown-item">
                    Company
                  </a>
                  <a href="/list-view" className="dropdown-item">
                    Job Vacancy
                  </a>

                  <a href="/map-view" className="dropdown-item">
                    Map View
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/#">
                  Job Vacancy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  FAQ
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item dropdown user-account">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span
                    className="user-image"
                    style={{ backgroundImage: "url(' img/demo/profile3.jpg')" }}
                  ></span>
                  Hi, John
                </a>
                <div className="dropdown-menu">
                  <a href="/#" className="dropdown-item">
                    My Profile
                  </a>
                  <a href="/#" className="dropdown-item">
                    Change Password
                  </a>
                  <a href="/#" className="dropdown-item">
                    Notifications
                  </a>
                  <a href="my_membership.html" className="dropdown-item">
                    Membership
                  </a>
                  <a href="/#" className="dropdown-item">
                    Payments
                  </a>
                  <a href="/#" className="dropdown-item">
                    Account
                  </a>
                </div>
              </li> */}
              <li className="nav-item">
                <Link to="/login" className="nav-link nav-btn">
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
