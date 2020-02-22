import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ViewHeader extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="search-form">
            <div className="card">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="form-group">
                        <select
                          className="form-control form-control-lg ui-select"
                          data-placeholder="Property Type"
                        >
                          <option value="property">Property</option>
                          <option value="company">Company</option>
                          <option value="vechiles">Vechiles</option>
                          <option value="rent">Rent</option>
                          <option value="jobcompany">Job Company</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary btn-block"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/list-view">Property for Sale</Link>
                  </li>
                </ol>
              </nav>
              <div className="page-header">
                <h1>Property for Sale</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
