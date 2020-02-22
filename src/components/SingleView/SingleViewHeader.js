import React, { Component } from "react";

export default class SingleViewHeader extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-12 col-lg-12 col-xl-10">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/list-view">Property for sale</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                2 Storay Home for Sell
              </li>
            </ol>
            <div className="page-header bordered mb0">
              <div className="row">
                <div className="col-md-8">
                  <a href="/list-view" className="btn-return" title="Back">
                    <i className="fa fa-angle-left" />
                  </a>
                  <h1>
                    2 Storay Home for Sell
                    <span className="label label-bordered">For sale</span>
                    <small>
                      <i className="fa fa-map-marker" /> Mahalaxmi,Dhumbarai-9 ,
                      Nepal
                    </small>
                  </h1>
                </div>
                <div className="col-md-4">
                  <div className="price">
                    £250,000 <small>$900/sq ft</small>
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
