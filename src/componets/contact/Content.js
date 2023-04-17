import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Content = () => {
  const [data, setData] = useState({});
  const handleName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const handlePhone = (e) => {
    setData({
      ...data,
      phone: e.target.value,
    });
  };
  const handleSubject = (e) => {
    setData({
      ...data,
      subject: e.target.value,
    });
  };
  const handleMessage = (e) => {
    setData({
      ...data,
      message: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    fetch(`${process.env.REACT_APP_API_BASE_URL}/contacts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          // alert(" Successfully");

          // clearTheCart();
          // reset();
          // history.push('/')
          toast.success("Message sent successfully");
          setData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        }
      });
  };

  return (
    <div className="page-content bg-white">
      <div
        className="page-banner backgroudGray"
        // style={{ backgroundImage: "url(assets/images/banner/banner3.jpg)" }}
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Contact Us </h1>
          </div>
        </div>
      </div>

      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            {/* <li><a href="#">Home</a></li>
                <li>Contact Us 1</li> */}
          </ul>
        </div>
      </div>

      <div className="page-banner contact-page section-sp2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 m-b30">
              <div className="bg-primary text-white contact-info-bx">
                <h2 className="m-b10 title-head">
                  Contact <span>Information</span>
                </h2>
                <p>
                  Whether you want to learn or to share what you know, you’ve
                  come to the right place. As a global destination for online
                  learning, we connect people through knowledge.
                </p>
                <div className="widget widget_getintuch">
                  <ul>
                    <li>
                      <i className="ti-location-pin"></i>IUBAT - International
                      University of Business Agriculture and Technology
                    </li>
                    <li>
                      <i className="ti-mobile"></i>+0880169297846 (24/7 Support
                      Line)
                    </li>
                    <li>
                      <i className="ti-email"></i>e-learning@gmail.com
                    </li>
                  </ul>
                </div>
                <h5 className="m-t0 m-b20">Follow Us</h5>
                <ul className="list-inline contact-social-bx">
                  <li>
                    <Link className="btn outline radius-xl">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn outline radius-xl">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn outline radius-xl">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn outline radius-xl">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <form className="contact-bx" onSubmit={handleSubmit} novalidate>
                {/* <div className="ajax-message"></div> */}
                <div className="heading-bx left">
                  <h2 className="title-head">
                    Get In <span>Touch</span>
                  </h2>
                  <p>
                    Check out our Help and Support center to find quick answers
                    to your questions.
                  </p>
                </div>
                <div className="row placeani">
                  <div className="col-lg-6">
                    <div className="">
                      <div className="">
                        {/* <label>Your Name</label> */}
                        <input
                          name="name"
                          type="text"
                          // required
                          className="form-control"
                          placeholder="Your Name"
                          onChange={handleName}
                          value={data.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        {/* <label>Your Email Address</label> */}
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          required
                          onChange={handleEmail}
                          placeholder="Your Email"
                          value={data.email}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        {/* <label>Your Phone</label> */}
                        <input
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                          onChange={handlePhone}
                          placeholder="Phone"
                          value={data.phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        {/* <label>Subject</label> */}
                        <input
                          name="subject"
                          type="text"
                          required
                          className="form-control"
                          onChange={handleSubject}
                          placeholder="Subject"
                          value={data.subject}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        {/* <label>Type Message</label> */}
                        <textarea
                          name="message"
                          rows="4"
                          className="form-control"
                          required
                          onChange={handleMessage}
                          placeholder="Write someting ..."
                          value={data.message}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn button-md btn-outline-info"
                    >
                      {" "}
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
