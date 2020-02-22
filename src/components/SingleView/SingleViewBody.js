import React, { Component } from "react";

export default class SingleViewBody extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-12 col-lg-12 col-xl-10">
            <div className="row row justify-content-md-center has-sidebar">
              <div className="col-md-7 col-lg-8">
                <div>
                  <div className="item-gallery">
                    <div
                      className="swiper-container gallery-top"
                      data-pswp-uid={1}
                    >
                      <div className="swiper-wrapper lazyload">
                        <div className="swiper-slide">
                          <figure
                            itemProp="associatedMedia"
                            itemScope
                            itemType="http://schema.org/ImageObject"
                          >
                            <a
                              href="img/demo/property/1.jpg"
                              itemProp="contentUrl"
                              data-size="2000x1414"
                            >
                              <img
                                src="img/demo/property/1.jpg"
                                className="img-fluid swiper-lazy"
                                alt="Drawing Room"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure
                            itemProp="associatedMedia"
                            itemScope
                            itemType="http://schema.org/ImageObject"
                          >
                            <a
                              href="img/demo/property/2.jpg"
                              itemProp="contentUrl"
                              data-size="2000x1414"
                            >
                              <img
                                data-src="img/demo/property/2.jpg"
                                src="img/spacer.png"
                                className="img-fluid swiper-lazy"
                                alt="Drawing Room"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure
                            itemProp="associatedMedia"
                            itemScope
                            itemType="http://schema.org/ImageObject"
                          >
                            <a
                              href="img/demo/property/3.jpg"
                              itemProp="contentUrl"
                              data-size="2000x1414"
                            >
                              <img
                                data-src="img/demo/property/3.jpg"
                                src="img/spacer.png"
                                className="img-fluid swiper-lazy"
                                alt="Drawing Room"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure
                            itemProp="associatedMedia"
                            itemScope
                            itemType="http://schema.org/ImageObject"
                          >
                            <a
                              href="img/demo/property/4.jpg"
                              itemProp="contentUrl"
                              data-size="2000x1414"
                            >
                              <img
                                data-src="img/demo/property/4.jpg"
                                src="img/spacer.png"
                                className="img-fluid swiper-lazy"
                                alt="Drawing Room"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure
                            itemProp="associatedMedia"
                            itemScope
                            itemType="http://schema.org/ImageObject"
                          >
                            <a
                              href="img/demo/property/5.jpg"
                              itemProp="contentUrl"
                              data-size="2000x1414"
                            >
                              <img
                                data-src="img/demo/property/5.jpg"
                                src="img/spacer.png"
                                className="img-fluid swiper-lazy"
                                alt="Drawing Room"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="swiper-button-next" />
                      <div className="swiper-button-prev" />
                    </div>
                    <div className="swiper-container gallery-thumbs">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/5.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/6.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/7.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/8.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src="img/demo/property/thumb/9.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="item-features">
                      <li>
                        <span>540</span> sq m
                      </li>
                      <li>
                        <span>3</span> Rooms
                      </li>
                      <li>
                        <span>5</span> Bedrooms
                      </li>
                      <li>
                        <span>5</span> Bathrooms
                      </li>
                    </ul>
                    <div className="item-description">
                      <h3 className="headline">Property description</h3>
                      <p>
                        <strong>Hall</strong>&nbsp;<strong>entrance</strong>
                        &nbsp;UPVC double glazed door to the front, laminate
                        flooring, storage cupboard, loft access and under floor
                        heating.
                      </p>
                      <p>
                        <strong>Lounge/diner/kitchen</strong>&nbsp;
                        <strong>24' 6" x 16' 0" (7.47m x 4.88m)</strong>
                        &nbsp;Spacious L shape open plan living, UPVC double
                        glazed window and bi-folding doors to the rear, laminate
                        flooring, television and telephone connection points,
                        power sockets and under floor heating.
                      </p>
                      <p>
                        Fitted kitchen with wall and base cupboards, integrated
                        Bosch electric hob and oven, cooker hood, lamona inset
                        sink and drainer, mosaic style splash back tiling,
                        integrated Bosch washing machine and dishwasher,
                        integrated Bosch fridge freezer and power sockets.
                      </p>
                      <p>
                        <strong>Bedroom</strong>&nbsp;<strong>one</strong>
                        &nbsp;
                        <strong>10' 08" x 10' 04" (3.25m x 3.15m)</strong>
                        &nbsp;UPVC double glazed window to the front, television
                        connection point, power sockets and under floor heating.
                      </p>
                      <p>
                        <strong>Bedroom</strong>&nbsp;<strong>two</strong>
                        &nbsp;
                        <strong>9' 05" x 9' 0" (2.87m x 2.74m)</strong>
                        &nbsp;UPVC double glazed window to the front, television
                        connection point, power sockets and under floor heating.
                      </p>
                      <p>
                        <strong>Bathroom</strong>&nbsp;
                        <strong>8' 08" x 6' 08" (2.64m x 2.03m)</strong>
                        &nbsp;UPVC double glazed window to the side, tiled
                        flooring, L shaped bath with fitted shower over head,
                        wash hand basin, WC, extractor fan, tiled surrounds and
                        under floor heating.
                      </p>
                      <p>
                        <strong>Outside</strong>&nbsp;<strong>areas</strong>
                        &nbsp;Front - large driveway with space for multiple
                        vehicles.
                      </p>
                      <p>
                        Rear - Large fully enclosed garden laid to lawn with
                        patio around the property and side access.
                      </p>
                    </div>
                    <h3 className="headline">Property Details</h3>
                    <ul className="checked_list feature-list">
                      <li>
                        <strong>Building Age:</strong> 2 Years
                      </li>
                      <li>
                        <strong>Parking:</strong> Attached Garage
                      </li>
                      <li>
                        <strong>Cooling:</strong> Central Cooling
                      </li>
                      <li>
                        <strong>Heating:</strong> Forced Air, Gas
                      </li>
                      <li>
                        <strong>Sewer:</strong> Public/City
                      </li>
                      <li>
                        <strong>Water:</strong> City
                      </li>
                    </ul>
                    <h3 className="headline">Property Features</h3>
                    <ul className="checked_list feature-list">
                      <li>Alarm</li>
                      <li>Gym</li>
                      <li>Internet</li>
                      <li>Swimming Pool</li>
                      <li>Window Covering</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <div id="sidebar" className="sidebar-right">
                  <div className="sidebar_inner">
                    <div id="feature-list" role="tablist">
                      <div className="card">
                        <div className="card-header" role="tab" id="headingOne">
                          <h4 className="panel-title">
                            <a
                              role="button"
                              data-toggle="collapse"
                              href="#specification"
                              aria-expanded="true"
                              aria-controls="specification"
                            >
                              Specifications
                              <i className="fa fa-caret-down float-right" />
                            </a>
                          </h4>
                        </div>
                        <div
                          id="specification"
                          className="panel-collapse collapse show"
                          role="tabpanel"
                        >
                          <div className="card-body">
                            <table className="table v1">
                              <tbody>
                                <tr>
                                  <td>Bedrooms</td>
                                  <td>3</td>
                                </tr>
                                <tr>
                                  <td>Bathrooms</td>
                                  <td>2</td>
                                </tr>
                                <tr>
                                  <td>Covered area</td>
                                  <td>4590 sqft</td>
                                </tr>
                                <tr>
                                  <td>Total Area</td>
                                  <td>5600 sqft</td>
                                </tr>
                                <tr>
                                  <td>Floor</td>
                                  <td>Ground Floor</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
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
