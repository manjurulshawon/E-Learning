import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="account-form">
      <div
        className="account-head"
        style={{ backgroundImage: "url(assets/images/background/bg2.jpg)" }}
      >
        <Link to="/">
          <img src="assets/images/logo-white-2.png" alt="" />
        </Link>
      </div>
      <div className="account-form-inner">
        <div className="account-container">
          <div className="error-page">
            <h3>Ooopps :(</h3>
            <h2 className="error-title">404</h2>
            <h5>The Page you were looking for, couldn't be found.</h5>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div className="">
             
              <Link to="/" className="btn outline black">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
