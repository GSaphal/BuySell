import React, { Component } from "react";

export default class Featured extends Component {
  render() {
    return (
      <div className="feature-box centered gray">
        <div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="main-title">
                  <span>Featured Properties</span>
                </div>
                <div className="main-title-description">
                  Thinking abroad? You can now dream and discover international
                  properties
                </div>
                <div className="clearfix" />
                <div className="mt50 mb50">
                  <div className="featured-gallery v2 item-listing grid">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="item item-lg">
                          <div
                            className="item-image"
                            style={{
                              backgroundImage: "url(img/demo/property/13.jpg)"
                            }}
                          >
                            <a href="/single-view">
                              <div className="item-meta">
                                <div className="item-info">
                                  <h3 className="item-title">
                                    3 bed semi-detached house
                                  </h3>
                                  <div className="item-location">
                                    <i className="fa fa-map-marker" />
                                    {"{"}" "{"}"}
                                    Kirkstone Road, Middlesbrough TS3
                                  </div>
                                </div>
                                <div className="item-price">
                                  $420,000 <small>$777 / sq m</small>
                                </div>
                              </div>
                              <div className="item-badges">
                                <div className="item-badge-right">For Sale</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="item item-md">
                              <div
                                className="item-image"
                                style={{
                                  backgroundImage:
                                    "url(img/demo/property/2.jpg)"
                                }}
                              >
                                <a href="/single-view">
                                  <div className="item-meta">
                                    <div className="item-info">
                                      <h3 className="item-title">
                                        3 bed semi-detached house
                                      </h3>
                                      <div className="item-location">
                                        <i className="fa fa-map-marker" />
                                        Kirkstone Road, Middlesbrough TS3
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      $420,000 <small>$777 / sq m</small>
                                    </div>
                                  </div>
                                  <div className="item-badges">
                                    <div className="item-badge-right">
                                      For Sale
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="item item-sm">
                              <div
                                className="item-image"
                                style={{
                                  backgroundImage:
                                    "url(img/demo/property/3.jpg)"
                                }}
                              >
                                <a href="/single-view">
                                  <div className="item-meta">
                                    <div className="item-info">
                                      <h3 className="item-title">
                                        3 bed semi-detached house
                                      </h3>
                                      <div className="item-location">
                                        <i className="fa fa-map-marker" />
                                        Kirkstone Road, Middlesbrough TS3
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      $420,000 <small>$777 / sq m</small>
                                    </div>
                                  </div>
                                  <div className="item-badges">
                                    <div className="item-badge-right">
                                      For Sale
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="item item-sm">
                              <div
                                className="item-image"
                                style={{
                                  backgroundImage:
                                    "url(img/demo/property/4.jpg)"
                                }}
                              >
                                <a href="/single-view">
                                  <div className="item-meta">
                                    <div className="item-info">
                                      <h3 className="item-title">
                                        3 bed semi-detached house
                                      </h3>
                                      <div className="item-location">
                                        <i className="fa fa-map-marker" />
                                        Kirkstone Road, Middlesbrough TS3
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      $420,000 <small>$777 / sq m</small>
                                    </div>
                                  </div>
                                  <div className="item-badges">
                                    <div className="item-badge-right">
                                      For Sale
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a href="/list-view" className="btn btn-xlg btn-link">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
