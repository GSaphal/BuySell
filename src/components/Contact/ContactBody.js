import React, { Component } from "react";

export default class ContactBody extends Component {
  render() {
    return (
      <div id="content" className="property-single">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
              <div className="page-header">
                <h1>Contact Us</h1>
              </div>
              <div className="row has-sidebar">
                <div className="col-md-5 col-lg-4 col-xl-4 col-sidebar">
                  <div className="card">
                    <form>
                      <div className="form-group">
                        <label htmlFor="contact_name">Your Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact_name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact_email">Your Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="contact_email"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact_subject">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact_subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact_message">Message</label>
                        <textarea
                          rows={4}
                          className="form-control"
                          id="contact_message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-lg btn-primary">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8 col-xl-8">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="subheadline mt0">Head Office</h3>
                      <address>
                        <strong>Twitter, Inc.</strong>
                        <br />
                        1355 Market Street, Suite 900
                        <br />
                        San Francisco, CA 94103
                        <br />
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                      </address>
                    </div>
                    <div className="col-md-6">
                      <h3 className="subheadline mt0">Office Hours</h3>
                      <ul className="list-unstyled opening-hours">
                        <li>
                          Monday - Friday
                          <span className="float-right">9:00-22:00</span>
                        </li>
                        <li>
                          Saturday{" "}
                          <span className="float-right">14:00-23:30</span>
                        </li>
                        <li>
                          Sunday <span className="float-right">Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="subheadline mt0">Office Location</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.7401235613713!2d1.4497354260471211!3d52.45232942952154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9f169c5a088db%3A0x75a6abde48cc5adc!2sKents+Ln%2C+Bungay+NR35+1JF%2C+UK!5e0!3m2!1sen!2sin!4v1489862715790"
                    width={600}
                    height={450}
                    title="Map"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
