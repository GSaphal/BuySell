import React, { Component } from "react";
const infoNepal = require("info-nepal");
const allDistricts = infoNepal.allDistricts;

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: allDistricts
    };
  }

  render() {
    return (
      <div className="col-md-4 col-lg-3">
        <button
          id="toggle-filters"
          className="btn btn-primary btn-circle mobile-filter"
        >
          <i className="fa fa-filter" />
        </button>
        <div id="sidebar" className="sidebar-left">
          <button className="close-panel btn btn-white">
            <i className="fa fa-long-arrow-left" />
          </button>
          <div className="sidebar_inner">
            <div id="filters">
              <div className="card">
                <div className="card-header">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#p_budget"
                      aria-expanded="true"
                      aria-controls="p_type"
                    >
                      Budget
                      <i className="fa fa-caret-down float-right" />
                    </a>
                  </h4>
                </div>
                <div
                  id="p_budget"
                  className="panel-collapse collapse"
                  role="tabpanel"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control input-sm"
                            placeholder="Min"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control input-sm"
                            placeholder="Max"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#p_type"
                      aria-expanded="true"
                      aria-controls="p_type"
                    >
                      Property Type
                      <i className="fa fa-caret-down float-right" />
                    </a>
                  </h4>
                </div>
                <div
                  id="p_type"
                  className="panel-collapse collapse show"
                  role="tabpanel"
                >
                  <div className="card-body">
                    <div className="checkbox ">
                      <input type="checkbox" defaultValue={1} id="house" />
                      <label htmlFor="property">Property</label>
                    </div>
                    <div className="checkbox ">
                      <input type="checkbox" defaultValue={1} id="property" />
                      <label htmlFor="company">Company</label>
                    </div>
                    <div className="checkbox ">
                      <input type="checkbox" defaultValue={1} id="company" />
                      <label htmlFor="rent">Rent</label>
                    </div>
                    <div className="checkbox ">
                      <input type="checkbox" defaultValue={1} id="rent" />
                      <label htmlFor="jobcompany">Job Company</label>
                    </div>
                    <div className="checkbox ">
                      <input type="checkbox" defaultValue={1} id="vechiles" />
                      <label htmlFor="vechiles">Vechiles</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#p_features"
                      aria-expanded="true"
                      aria-controls="p_features"
                    >
                      Location
                      <i className="fa fa-caret-down float-right" />
                    </a>
                  </h4>
                </div>
                <div
                  id="p_features"
                  className="panel-collapse collapse show"
                  role="tabpanel"
                >
                  <div className="card-body">
                    <label for="inputState" className="py-1">
                      District
                    </label>

                    <select id="inputState" className="form-control">
                      {this.state.district.map(d => (
                        <option value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
