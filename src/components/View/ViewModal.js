import React, { Component } from "react";

export default class ListViewModal extends Component {
  render() {
    return (
      <div
        className="modal fade  item-badge-rightm"
        id="leadform"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="media">
                <div className="media-left">
                  <a href="property_single.html">
                    <img
                      src="img/demo/property/1.jpg"
                      className="img-rounded"
                      width={64}
                      alt=""
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">
                    Send Message for
                    <br />
                    <small>
                      <a href="property_single.html">
                        3 bed semi-detached house for sale
                      </a>
                    </small>
                  </h4>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-map-marker" /> Kirkstone Road,
                      Middlesbrough TS3
                    </li>
                    <li>
                      <a href="tel:01502392905">
                        <i className="fa fa-phone fa-fw" aria-hidden="true" />{" "}
                        Call: 01502 392905
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="lead_name">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lead_name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lead_email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="lead_email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lead_phone">Your Telephone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="lead_phone"
                    placeholder="Your Telephone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lead_message">Message</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    id="lead_message"
                    placeholder="Please include any useful details, i.e. current status, availability for viewings, etc."
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
