import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import useAuth from "../../hooks/useAuth";

const Content = () => {
  const { registerWithEmailAndPassword } = useAuth()
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    registerWithEmailAndPassword(data)
  }

  return (
    <div className="account-form d-flex flex-row ">
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
              Sign Up <span>Now</span>
            </h2>
            <p>
              Already Have Account ? <Link to="/login">Login</Link>
            </p>
          </div>
          <form className="contact-bx" onSubmit={handleSubmit(onSubmit)}>
            <div className="row placeani">
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required=""
                      className="form-control"
                      {...register("name", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group">
                    <label>Your Email Address</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
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
                      type="password"
                      className="form-control"
                      required=""
                      {...register("password", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 m-b30">
                <button
                  name="submit"
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              </div>
              <div className="col-lg-12">
                <h6>Sign Up with Social media</h6>
                <div className="d-flex">
                  <a className="btn flex-fill m-r5 facebook" href="#">
                    <i className="fa fa-facebook"></i>Facebook
                  </a>
                  <a className="btn flex-fill m-l5 google-plus" href="#">
                    <i className="fa fa-google-plus"></i>Google
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
