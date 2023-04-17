import React from "react";
import CountUp from "react-countup";

const Content = () => {
  return (
    <div className="page-content">
      <div
        className="page-banner backgroudGray"
        // style={{ backgroundImage: "url(assets/images/banner/banner2.jpg)" }}
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">About Us </h1>
          </div>
        </div>
      </div>
      <div className="breadcrumb-row">
        <div className="container">
          {/* <ul className="list-inline">
            <li>
              <a href="#">Home</a>
            </li>
            <li>About Us </li>
          </ul> */}
        </div>
      </div>

      <div className="content-block">
        <div className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="feature-container">
                  <div className="feature-md text-white m-b20">
                    <a href="#" className="icon-cell">
                      <img src="assets/images/icon/icon1.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-tilte">Our Philosophy</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="feature-container">
                  <div className="feature-md text-white m-b20">
                    <a href="#" className="icon-cell">
                      <img src="assets/images/icon/icon2.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-tilte">Kingster's Principle</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="feature-container">
                  <div className="feature-md text-white m-b20">
                    <a href="#" className="icon-cell">
                      <img src="assets/images/icon/icon3.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-tilte">Key Of Success</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="feature-container">
                  <div className="feature-md text-white m-b20">
                    <a href="#" className="icon-cell">
                      <img src="assets/images/icon/icon4.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-tilte">Our Philosophy</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-area bg-gray section-sp1 our-story">
          <div className="container">
            <div className="row align-items-center d-flex">
              <div className="col-lg-5 col-md-12 heading-bx">
                <h2 className="m-b10">Our Story</h2>
                <h5 className="fw4">
                  It is a long established fact that a reade.
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
              {/* <div className="col-lg-7 col-md-12 heading-bx p-lr">
                <div className="video-bx">
                   <img src="assets/images/about/pic1.jpg" alt="" /> 
                  <a
                    href="https://www.youtube.com/watch?v=xFOG_9Y883c"
                    className="popup-youtube video"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="section-area content-inner section-sp1">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                  <div className="counter-style-1">
                    <div className="text-primary">
                      <span className="counter">
                        <CountUp end={2000} duration={5} />
                      </span>
                      <span>+</span>
                    </div>
                    <span className="counter-text">Completed Courses</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                  <div className="counter-style-1">
                    <div className="text-black">
                      <CountUp end={2500} duration={5} />
                      <span>+</span>
                    </div>
                    <span className="counter-text">Happy Student</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                  <div className="counter-style-1">
                    <div className="text-primary">
                      <CountUp end={3000} duration={5} />
                      <span>+</span>
                    </div>
                    <span className="counter-text">Published Courses</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                  <div className="counter-style-1">
                    <div className="text-black">
                      <CountUp end={1000} duration={5} />
                      <span>+</span>
                    </div>
                    <span className="counter-text">Enrollment Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div
          className="section-area section-sp2 bg-fix ovbl-dark join-bx text-center"
          style={{ backgroundmage: "url(assets/images/background/bg1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="join-content-bx text-white">
                  <h2>
                    Learn a new skill online on <br /> your time
                  </h2>
                  <h4>
                    <span className="counter">57,000 </span> Online Courses
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                  </p>
                  <a href="#" className="btn button-md">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="section-area section-sp2">
          <div className="container">
            <div className="row">
              <div className="col-md-12 heading-bx left">
                <h2 className="title-head text-uppercase">
                  what people <span>say</span>
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page
                </p>
              </div>
            </div>
            <div className="testimonial-carousel owl-carousel owl-btn-1 col-12 p-lr0">
              <div className="item">
                <div className="testimonial-bx">
                  <div className="testimonial-thumb">
                    <img src="assets/images/testimonials/pic1.jpg" alt="" />
                  </div>
                  <div className="testimonial-info">
                    <h5 className="name">Peter Packer</h5>
                    <p>-Art Director</p>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type...
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-bx">
                  <div className="testimonial-thumb">
                    <img src="assets/images/testimonials/pic2.jpg" alt="" />
                  </div>
                  <div className="testimonial-info">
                    <h5 className="name">Peter Packer</h5>
                    <p>-Art Director</p>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Content;
