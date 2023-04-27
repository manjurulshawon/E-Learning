import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BsGithub } from "react-icons/bs";
const LoginPage = () => {
  const [data, setData] = useState({});
  const navigation = useNavigate();

  const { googleSignIn, user, githubSignIn, logInWithEmailAndPassword } =
    useAuth();

  console.log("data", data);
  const handleInputEmail = (e) => {
    console.log("name", e.target.value);
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const handleInputPassword = (e) => {
    console.log("name", e.target.value);
    setData({
      ...data,
      password: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(data.email, data.password);
  };

  const signinWithGoogle = () => {
    googleSignIn();
  };
  console.log(user);
  return (
    <div className="account-form">
      <div
        className="account-head"
        // style={{ backgroundImage: "url(assets/images/background/bg2.jpg)" }}
      >
        {/* <Link to="/">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </Link> */}
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
          <form className="contact-bx" onSubmit={(e) => handleLogin(e)}>
            <div className="row placeani">
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group">
                    {/* <label>Your Name</label> */}
                    <input
                      onChange={handleInputEmail}
                      placeholder="Your Email"
                      type="email"
                      required
                      className="form-control px-3"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group">
                    {/* <label>Your Password</label> */}
                    <input
                      onChange={handleInputPassword}
                      value={data.password}
                      placeholder="Password"
                      type="password"
                      className="form-control px-3"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-12">
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
              </div> */}
              <div className="col-lg-12 m-b30">
                <button
                  // name="submit"
                  type="submit"
                  // value="Submit"
                  className="btn btn-primary"
                  // onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="col-lg-12">
                <h6>Login with Social media</h6>
                <div className="d-flex" style={{width: 20}}>
                  {/* <Link className="btn flex-fill m-r5 facebook">
                    <i className="fa fa-facebook"></i>Facebook
                  </Link> */}
                  {/* <Link
                    className="btn flex-fill m-r5 facebook"
                    onClick={githubSignIn}
                  >
                    <BsGithub /> Github
                  </Link> */}
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
