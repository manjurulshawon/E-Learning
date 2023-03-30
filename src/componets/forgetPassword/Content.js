import React from "react";

const Content = () => {
  return (
    <div className="account-form">
      <div
        className="account-head"
        style={{ backgroundImage: "url(assets/images/background/bg2.jpg)" }}
      >
        <a href="index.html">
          <img src="assets/images/logo-white-2.png" alt="" />
        </a>
      </div>
      <div className="account-form-inner">
        <div className="account-container">
          <div className="heading-bx left">
            <h2 className="title-head">
              Forget <span>Password</span>
            </h2>
            <p>
              Login Your Account <a href="login.html">Click here</a>
            </p>
          </div>
          <form className="contact-bx">
            <div className="row placeani">
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group">
                    <label>Your Email Address</label>
                    <input
                      name="dzName"
                      type="email"
                      required=""
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 m-b30">
                <button
                  name="submit"
                  type="submit"
                  value="Submit"
                  class="btn button-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
