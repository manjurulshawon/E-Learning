import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BsGithub } from "react-icons/bs";
const LoginPage = () => {
  const navigation = useNavigate();
  const { googleSignIn, user, githubSignIn } = useAuth();

  const signinWithGoogle = () => {
    googleSignIn();
  };
  console.log(user);
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
          <div className="heading-bx left">
            <h2 className="title-head">
              Login to your <span>Account</span>
            </h2>
            <p>
              Don't have an account? <Link to="/register">Create one here</Link>
            </p>
          </div>
          <form className="contact-bx">
            <div className="row placeani">
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group">
                    <label>Your Name</label>
                    <input
                      name="dzName"
                      type="text"
                      required=""
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group">
                    <label>Your Password</label>
                    <input
                      name="dzEmail"
                      type="password"
                      className="form-control"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group form-forget">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlAutosizing"
                    />
                    <label
                      className="custom-control-label"
                      for="customControlAutosizing"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="forget-password.html" className="ml-auto">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="col-lg-12 m-b30">
                <button
                  name="submit"
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
              <div className="col-lg-12">
                <h6>Login with Social media</h6>
                <div className="d-flex">
                  <Link className="btn flex-fill m-r5 facebook">
                    <i className="fa fa-facebook"></i>Facebook
                  </Link>
                  <Link
                    className="btn flex-fill m-r5 facebook"
                    onClick={githubSignIn}
                  >
                    <BsGithub /> Github
                  </Link>
                  <Link
                    className="btn flex-fill m-l5 google-plus"
                    onClick={signinWithGoogle}
                  >
                    <i className="fa fa-google"></i>Google
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
