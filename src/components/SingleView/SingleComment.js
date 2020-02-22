import React, { Component } from "react";

export default class SingleComment extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-12 col-xl-10">
            <div className="socal-share-buttons">
              <h3 className="subheadline">Share this article on:</h3>
              <a href="/#" className="btn btn-social btn-facebook">
                <i className="icon fa fa-facebook" /> Facebook
              </a>
              <a href="/#" className="btn btn-social btn-google">
                <i className="icon fa fa-google" /> Google
              </a>
              <a href="/#" className="btn btn-social btn-twitter">
                <i className="icon fa fa-twitter" /> Twitter
              </a>
            </div>
            <div className="comments">
              <h3 className="subheadline">Comments</h3>
              <div className="media">
                <div className="media-left">
                  <a href="/#">
                    <img
                      alt=""
                      className="media-object rounded-circle"
                      src="img/demo/profile.jpg"
                      width={64}
                      height={64}
                    />
                  </a>
                </div>
                <div className="media-body">
                  <a href="#post-comment" className="btn-reply">
                    <i className="fa fa-reply" /> Reply
                  </a>
                  <h5 className="media-heading author">John Doe</h5>
                  <div className="date">21st Aug 2017</div>
                  <div className="comment">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo.
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="/#">
                    <img
                      alt=""
                      className="media-object rounded-circle"
                      src="img/demo/profile2.jpg"
                      width={64}
                      height={64}
                    />
                  </a>
                </div>
                <div className="media-body">
                  <a href="#post-comment" className="btn-reply">
                    <i className="fa fa-reply" /> Reply
                  </a>
                  <h5 className="media-heading author">Kurt West</h5>
                  <div className="comment">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="/#">
                        <img
                          alt=""
                          className="media-object rounded-circle"
                          src="img/demo/profile3.jpg"
                          width={64}
                          height={64}
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <a href="#post-comment" className="btn-reply">
                        <i className="fa fa-reply" /> Reply
                      </a>
                      <h5 className="media-heading author">Jane Roe</h5>
                      <div className="comment">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-input-box" id="post-comment">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    className="form-control form-control-lg"
                    placeholder="Your Website"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Comment</label>
                  <textarea
                    id="comment"
                    className="form-control form-control-lg"
                    placeholder="Your Comment"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
