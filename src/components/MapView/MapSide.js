import React, { Component } from "react";

export default class MapSide extends Component {
  render() {
    return (
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
                    Budget <i className="fa fa-caret-down float-right" />
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
                    Property Type <i className="fa fa-caret-down float-right" />
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
                    <label htmlFor="property">Real Estate</label>
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
                  <div className="checkbox">
                    <input type="checkbox" defaultValue id="address" />
                    <label htmlFor="address"> Address</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" defaultValue id="parking" />
                    <label htmlFor="parking"> City</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" defaultValue id="district" />
                    <label htmlFor="district"> District</label>
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
