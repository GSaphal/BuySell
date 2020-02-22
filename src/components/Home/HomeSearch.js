import React, { Component } from "react";

class HomeSearch extends Component {
  render() {
    return (
      <div className="home-search">
        <div className="swiper-container item-listing grid featured-gallery featured-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="item">
                <div className="item-image">
                  <a href="/single-view">
                    <div
                      className="image"
                      style={{
                        backgroundImage: 'url("img/demo/property/13.jpg")'
                      }}
                    />
                    <div className="item-meta">
                      <div className="item-info">
                        <h3 className="item-title">
                          3 bed semi-detached house
                        </h3>
                        <div className="item-location">
                          <i className="fa fa-map-marker" /> Kirkstone Road,
                          Middlesbrough TS3
                        </div>
                      </div>
                      <div className="item-price">
                        $420,000 <small>$777 / sq m</small>
                      </div>
                    </div>
                    <div className="item-badges">
                      <div className="item-badge-left">Sponsored</div>
                      <div className="item-badge-right">For Sale</div>
                    </div>
                  </a>
                  <a href="/#" className="save-item">
                    <i className="fa fa-star" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="item-image">
                  <a href="/single-view">
                    <div
                      className="image"
                      style={{
                        backgroundImage: 'url("img/demo/property/2.jpg")'
                      }}
                    />
                    <div className="item-meta">
                      <div className="item-info">
                        <h3 className="item-title">
                          3 bed semi-detached house
                        </h3>
                        <div className="item-location">
                          <i className="fa fa-map-marker" /> Kirkstone Road,
                          Middlesbrough TS3
                        </div>
                      </div>
                      <div className="item-price">
                        $420,000 <small>$777 / sq m</small>
                      </div>
                    </div>
                    <div className="item-badges">
                      <div className="item-badge-left">Sponsored</div>
                      <div className="item-badge-right">For Sale</div>
                    </div>
                  </a>
                  <a href="/#" className="save-item">
                    <i className="fa fa-star" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="item-image">
                  <a href="/single-view">
                    <div
                      className="image"
                      style={{
                        backgroundImage: 'url("img/demo/property/3.jpg")'
                      }}
                    />
                    <div className="item-meta">
                      <div className="item-info">
                        <h3 className="item-title">
                          3 bed semi-detached house
                        </h3>
                        <div className="item-location">
                          <i className="fa fa-map-marker" /> Kirkstone Road,
                          Middlesbrough TS3
                        </div>
                      </div>
                      <div className="item-price">
                        $420,000 <small>$777 / sq m</small>
                      </div>
                    </div>
                    <div className="item-badges">
                      <div className="item-badge-left">Sponsored</div>
                      <div className="item-badge-right">For Sale</div>
                    </div>
                  </a>
                  <a href="/#" className="save-item">
                    <i className="fa fa-star" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="item-image">
                  <a href="/single-view">
                    <div
                      className="image"
                      style={{
                        backgroundImage: 'url("img/demo/property/4.jpg")'
                      }}
                    />
                    <div className="item-meta">
                      <div className="item-info">
                        <h3 className="item-title">
                          3 bed semi-detached house
                        </h3>
                        <div className="item-location">
                          <i className="fa fa-map-marker" /> Kirkstone Road,
                          Middlesbrough TS3
                        </div>
                      </div>
                      <div className="item-price">
                        $420,000 <small>$777 / sq m</small>
                      </div>
                    </div>
                    <div className="item-badges">
                      <div className="item-badge-left">Sponsored</div>
                      <div className="item-badge-right">For Sale</div>
                    </div>
                  </a>
                  <a href="/#" className="save-item">
                    <i className="fa fa-star" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="item-image">
                  <a href="/single-view">
                    <div
                      className="image"
                      style={{
                        backgroundImage: 'url("img/demo/property/5.jpg")'
                      }}
                    />
                    <div className="item-meta">
                      <div className="item-info">
                        <h3 className="item-title">
                          3 bed semi-detached house
                        </h3>
                        <div className="item-location">
                          <i className="fa fa-map-marker" /> Kirkstone Road,
                          Middlesbrough TS3
                        </div>
                      </div>
                      <div className="item-price">
                        $420,000 <small>$777 / sq m</small>
                      </div>
                    </div>
                    <div className="item-badges">
                      <div className="item-badge-left">Sponsored</div>
                      <div className="item-badge-right">For Sale</div>
                    </div>
                  </a>
                  <a href="/#" className="save-item">
                    <i className="fa fa-star" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Add Arrows */}
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
        <div className="search-form v4">
          <div className="container">
            <div className="row justify-content-lg-center">
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
                  <div className="col-md-7">
                    <div className="form-group">
                      <select className="form-control form-control-lg ui-select">
                        <option value>Property Type</option>
                        <option value="realestate">Real Estate</option>
                        <option value="vechile">Vechile</option>
                        <option value="jobcompany">Job Company</option>
                        <option value="rent">Rent</option>
                        <option value="company">Company</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-5">
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
    );
  }
}
export default HomeSearch;
