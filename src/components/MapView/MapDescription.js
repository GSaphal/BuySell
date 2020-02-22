import React, { Component } from "react";

export default class MapDescription extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-7 col-xl-6">
        <div className="search-results">
          <div className="search-form map-search-form ">
            <div className="card mb-0 mt-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="form-group">
                        <select className="form-control ui-select">
                          <option value="Property">Real Estate</option>
                          <option value="Company">Company</option>
                          <option value="Rent">Rent</option>
                          <option value="Job Company">Job Company</option>
                          <option value="Vechiles">Vechiles</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
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
          <div className="search-results-list">
            <div className="page-header">
              <h1>Property for Sale</h1>
            </div>
            <div className="sorting">
              <div className="row justify-content-between">
                <div className="col-sm-6 col-lg-4">
                  <div className="form-group">
                    <select className="form-control ui-select">
                      <option selected="selected">Most recent</option>
                      <option>Highest price</option>
                      <option>Lowest price</option>
                      <option>Most reduced</option>
                      <option>Most popular</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="btn-group float-right" role="group">
                    <a href="/grid-view" className="btn btn-light">
                      <i className="fa fa-th" />
                    </a>
                    <a href="/map-view" className="btn btn-light active">
                      <i className="fa fa-bars" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="item-listing list">
              <div className="item">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="item-image">
                      <a href="/single-view">
                        <img
                          src="img/demo/property/1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="item-badges">
                          <div className="item-badge-left">Sponsored</div>
                          <div className="item-badge-right">For Sale</div>
                        </div>
                        <div className="item-meta">
                          <div className="item-price">
                            $420,000
                            <small>$777 / sq m</small>
                          </div>
                        </div>
                      </a>
                      <a href="/#" className="save-item">
                        <i className="fa fa-star" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="item-info">
                      <h3 className="item-title">
                        <a href="/single-view">
                          3 bed semi-detached house for sale
                        </a>
                      </h3>
                      <div className="item-location">
                        <i className="fa fa-map-marker" /> Kirkstone Road,
                        Middlesbrough TS3
                      </div>
                      <div className="item-details-i">
                        <span
                          className="bedrooms"
                          data-toggle="tooltip"
                          title="3 Bedrooms"
                        >
                          3 <i className="fa fa-bed" />
                        </span>
                        <span
                          className="bathrooms"
                          data-toggle="tooltip"
                          title="2 Bathrooms"
                        >
                          2 <i className="fa fa-bath" />
                        </span>
                      </div>
                      <div className="item-details">
                        <ul>
                          <li>
                            Sq Ft <span>730-2600</span>
                          </li>
                          <li>
                            Type <span>Apartments</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="added-on">Listed on 19th Feb 2017</div>
                      </div>
                      <div className="col-md-6">
                        <a href="/#" className="added-by">
                          by John Doe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="item-image">
                      <a href="/single-view">
                        <img
                          src="img/demo/property/2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="item-badges">
                          <div className="item-badge-left">Sponsored</div>
                          <div className="item-badge-right">For Sale</div>
                        </div>
                        <div className="item-meta">
                          <div className="item-price">
                            $420,000
                            <small>$777 / sq m</small>
                          </div>
                        </div>
                      </a>
                      <a href="/#" className="save-item">
                        <i className="fa fa-star" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="item-info">
                      <h3 className="item-title">
                        <a href="/single-view">
                          3 bed semi-detached house for sale
                        </a>
                      </h3>
                      <div className="item-location">
                        <i className="fa fa-map-marker" /> Kirkstone Road,
                        Middlesbrough TS3
                      </div>
                      <div className="item-details-i">
                        <span
                          className="bedrooms"
                          data-toggle="tooltip"
                          title="3 Bedrooms"
                        >
                          3 <i className="fa fa-bed" />
                        </span>
                        <span
                          className="bathrooms"
                          data-toggle="tooltip"
                          title="2 Bathrooms"
                        >
                          2 <i className="fa fa-bath" />
                        </span>
                      </div>
                      <div className="item-details">
                        <ul>
                          <li>
                            Sq Ft <span>730-2600</span>
                          </li>
                          <li>
                            Type <span>Apartments</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="added-on">Listed on 19th Feb 2017</div>
                      </div>
                      <div className="col-md-6">
                        <a href="/#" className="added-by">
                          by John Doe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="item-image">
                      <a href="/single-view">
                        <img
                          src="img/demo/property/3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="item-badges">
                          <div className="item-badge-left">Sponsored</div>
                          <div className="item-badge-right">For Sale</div>
                        </div>
                        <div className="item-meta">
                          <div className="item-price">
                            $420,000
                            <small>$777 / sq m</small>
                          </div>
                        </div>
                      </a>
                      <a href="/#" className="save-item">
                        <i className="fa fa-star" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="item-info">
                      <h3 className="item-title">
                        <a href="/single-view">
                          3 bed semi-detached house for sale
                        </a>
                      </h3>
                      <div className="item-location">
                        <i className="fa fa-map-marker" /> Kirkstone Road,
                        Middlesbrough TS3
                      </div>
                      <div className="item-details-i">
                        <span
                          className="bedrooms"
                          data-toggle="tooltip"
                          title="3 Bedrooms"
                        >
                          3 <i className="fa fa-bed" />
                        </span>
                        <span
                          className="bathrooms"
                          data-toggle="tooltip"
                          title="2 Bathrooms"
                        >
                          2 <i className="fa fa-bath" />
                        </span>
                      </div>
                      <div className="item-details">
                        <ul>
                          <li>
                            Sq Ft <span>730-2600</span>
                          </li>
                          <li>
                            Type <span>Apartments</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="added-on">Listed on 19th Feb 2017</div>
                      </div>
                      <div className="col-md-6">
                        <a href="/#" className="added-by">
                          by John Doe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="item-image">
                      <a href="/single-view">
                        <img
                          src="img/demo/property/4.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="item-badges">
                          <div className="item-badge-left">Sponsored</div>
                          <div className="item-badge-right">For Sale</div>
                        </div>
                        <div className="item-meta">
                          <div className="item-price">
                            $420,000
                            <small>$777 / sq m</small>
                          </div>
                        </div>
                      </a>
                      <a href="/#" className="save-item">
                        <i className="fa fa-star" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="item-info">
                      <h3 className="item-title">
                        <a href="/single-view">
                          3 bed semi-detached house for sale
                        </a>
                      </h3>
                      <div className="item-location">
                        <i className="fa fa-map-marker" /> Kirkstone Road,
                        Middlesbrough TS3
                      </div>
                      <div className="item-details-i">
                        <span
                          className="bedrooms"
                          data-toggle="tooltip"
                          title="3 Bedrooms"
                        >
                          3 <i className="fa fa-bed" />
                        </span>
                        <span
                          className="bathrooms"
                          data-toggle="tooltip"
                          title="2 Bathrooms"
                        >
                          2 <i className="fa fa-bath" />
                        </span>
                      </div>
                      <div className="item-details">
                        <ul>
                          <li>
                            Sq Ft <span>730-2600</span>
                          </li>
                          <li>
                            Type <span>Apartments</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="added-on">Listed on 19th Feb 2017</div>
                      </div>
                      <div className="col-md-6">
                        <a href="/#" className="added-by">
                          by John Doe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="item-image">
                      <a href="/single-view">
                        <img
                          src="img/demo/property/5.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="item-badges">
                          <div className="item-badge-left">Sponsored</div>
                          <div className="item-badge-right">For Sale</div>
                        </div>
                        <div className="item-meta">
                          <div className="item-price">
                            $420,000
                            <small>$777 / sq m</small>
                          </div>
                        </div>
                      </a>
                      <a href="/#" className="save-item">
                        <i className="fa fa-star" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="item-info">
                      <h3 className="item-title">
                        <a href="/single-view">
                          3 bed semi-detached house for sale
                        </a>
                      </h3>
                      <div className="item-location">
                        <i className="fa fa-map-marker" /> Kirkstone Road,
                        Middlesbrough TS3
                      </div>
                      <div className="item-details-i">
                        <span
                          className="bedrooms"
                          data-toggle="tooltip"
                          title="3 Bedrooms"
                        >
                          3 <i className="fa fa-bed" />
                        </span>
                        <span
                          className="bathrooms"
                          data-toggle="tooltip"
                          title="2 Bathrooms"
                        >
                          2 <i className="fa fa-bath" />
                        </span>
                      </div>
                      <div className="item-details">
                        <ul>
                          <li>
                            Sq Ft <span>730-2600</span>
                          </li>
                          <li>
                            Type <span>Apartments</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="added-on">Listed on 19th Feb 2017</div>
                      </div>
                      <div className="col-md-6">
                        <a href="/#" className="added-by">
                          by John Doe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="item-image">
                      <a href="/single-view">
                        <img
                          src="img/demo/property/6.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="item-badges">
                          <div className="item-badge-left">Sponsored</div>
                          <div className="item-badge-right">For Sale</div>
                        </div>
                        <div className="item-meta">
                          <div className="item-price">
                            $420,000
                            <small>$777 / sq m</small>
                          </div>
                        </div>
                      </a>
                      <a href="/#" className="save-item">
                        <i className="fa fa-star" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="item-info">
                      <h3 className="item-title">
                        <a href="/single-view">
                          3 bed semi-detached house for sale
                        </a>
                      </h3>
                      <div className="item-location">
                        <i className="fa fa-map-marker" /> Kirkstone Road,
                        Middlesbrough TS3
                      </div>
                      <div className="item-details-i">
                        <span
                          className="bedrooms"
                          data-toggle="tooltip"
                          title="3 Bedrooms"
                        >
                          3 <i className="fa fa-bed" />
                        </span>
                        <span
                          className="bathrooms"
                          data-toggle="tooltip"
                          title="2 Bathrooms"
                        >
                          2 <i className="fa fa-bath" />
                        </span>
                      </div>
                      <div className="item-details">
                        <ul>
                          <li>
                            Sq Ft <span>730-2600</span>
                          </li>
                          <li>
                            Type <span>Apartments</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="added-on">Listed on 19th Feb 2017</div>
                      </div>
                      <div className="col-md-6">
                        <a href="/#" className="added-by">
                          by John Doe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/#">
                    «
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    »
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
