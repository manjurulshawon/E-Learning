import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allCourses } from "../../fakeData/allCourses";
import { Button, Spinner } from "react-bootstrap";
import { TbCurrencyTaka } from "react-icons/tb";
const Content = () => {
  const { courseId } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = (_id) => {
    navigate(`/enroll/${_id}`);
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("courses", data);

        setData(data);
        setIsLoading(false);
      });
  }, []);
  // console.log("darta", data);
  return (
    <div className="page-content bg-white">
      <div
        className="page-banner backgroudGray"
        // style={{backgroundImage:'url(assets/images/banner/banner2.jpg)'}}
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Courses Details</h1>
          </div>
        </div>
      </div>

      {!isLoading && (
        <div className="content-block">
          <div className="section-area section-sp1">
            <div className="container">
              <div className="row d-flex flex-row-reverse">
                <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
                  <div className="course-detail-bx">
                    <div className="course-price">
                      <h4 className="price">
                        {" "}
                        <TbCurrencyTaka /> {data.price}
                      </h4>
                    </div>
                    <div className="course-buy-now text-center">
                      <Button variant="outline-warning" size="sm"    onClick={() => handleNavigate(data._id)}>
                        Enroll
                      </Button>
                    </div>
                    {/* <div className="teacher-bx">
                      <div className="teacher-info">
                        <div className="teacher-thumb">
                          <img src="assets/images/testimonials/pic1.jpg" alt="" />
                        </div>
                        <div className="teacher-name">
                          <h5>{data.created_by}</h5>
                          <span>Science Teacher</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-9 col-md-8 col-sm-12">
                  <div className="courses-post">
                    <div className="ttr-post-media media-effect">
                      <a href="">
                        <img src={data.picture} alt="" style={{height: 350, objectFit: "cover"}}/>
                      </a>
                    </div>
                    <div className="ttr-post-info">
                      <div className="ttr-post-title ">
                        <h2 className="post-title"> {data.course_name}</h2>
                      </div>
                      <div className="ttr-post-text">
                        {/* <p>{data.description.short_description}</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="courese-overview mt-5" id="overview">
                    <h4>Overview</h4>
                    <div className="row">
                      <div className="col-md-12 col-lg-4">
                        <ul className="course-features">
                          <li>
                            <i className="ti-book"></i>{" "}
                            <span className="label">Instructor</span>{" "}
                            <span className="value">{data.created_by}</span>
                          </li>
                          <li>
                            <i className="ti-book"></i>{" "}
                            <span className="label">Lectures</span>{" "}
                            <span className="value">
                              {data.lectures}
                            </span>
                          </li>
                          <li>
                            <i className="ti-help-alt"></i>{" "}
                            <span className="label">Quizzes</span>{" "}
                            <span className="value">{data.quiz}</span>
                          </li>
                          <li>
                            <i className="ti-time"></i>{" "}
                            <span className="label">Duration</span>{" "}
                            <span className="value">{data.duration}</span>
                          </li>
                          <li>
                            <i className="ti-stats-up"></i>{" "}
                            <span className="label">Skill level</span>{" "}
                            <span className="value">{data.skill}</span>
                          </li>
                          <li>
                            <i className="ti-smallcap"></i>{" "}
                            <span className="label">Language</span>{" "}
                            <span className="value">{data.language}</span>
                          </li>
                          <li>
                            <i className="ti-user"></i>{" "}
                            <span className="label">Students</span>{" "}
                            <span className="value">{data.student}</span>
                          </li>
                          <li>
                            <i className="ti-check-box"></i>{" "}
                            <span className="label">Assessments</span>{" "}
                            <span className="value">{data.assignment}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-12 col-lg-8">
                        <h5 className="m-b5">Course Description</h5>
                        <p>{data.description}</p>

                        <h5 className="m-b5">Learning Outcomes</h5>
                        <ul className="list-checked primary">
                          {data.topics.map((topic) => (
                            <li>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="m-b30" id="curriculum">
                  <h4>Curriculum</h4>
                  <ul className="curriculum-list">
                    <li>
                      <h5>First Level</h5>
                      <ul>
                        <li>
                          <div className="curriculum-list-box">
                            <span>Lesson 1.</span> Introduction to UI Design
                          </div>
                          <span>120 minutes</span>
                        </li>
                        <li>
                          <div className="curriculum-list-box">
                            <span>Lesson 2.</span> User Research and Design
                          </div>
                          <span>60 minutes</span>
                        </li>
                        <li>
                          <div className="curriculum-list-box">
                            <span>Lesson 3.</span> Evaluating User Interfaces
                            Part 1
                          </div>
                          <span>85 minutes</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5>Second Level</h5>
                      <ul>
                        <li>
                          <div className="curriculum-list-box">
                            <span>Lesson 1.</span> Prototyping and Design
                          </div>
                          <span>110 minutes</span>
                        </li>
                        <li>
                          <div className="curriculum-list-box">
                            <span>Lesson 2.</span> UI Design Capstone
                          </div>
                          <span>120 minutes</span>
                        </li>
                        <li>
                          <div className="curriculum-list-box">
                            <span>Lesson 3.</span> Evaluating User Interfaces
                            Part 2
                          </div>
                          <span>120 minutes</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5>Final</h5>
                      <ul>
                        <li>
                          <div className="curriculum-list-box">
                            <span>Part 1.</span> Final Test
                          </div>
                          <span>120 minutes</span>
                        </li>
                        <li>
                          <div className="curriculum-list-box">
                            <span>Part 2.</span> Online Test
                          </div>
                          <span>120 minutes</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div> */}
                  {/* <div className="" id="instructor">
                  <h4>Instructor</h4>
                  <div className="instructor-bx">
                    <div className="instructor-author">
                      <img src="assets/images/testimonials/pic1.jpg" alt="" />
                    </div>
                    <div className="instructor-info">
                      <h6>Keny White </h6>
                      <span>Professor</span>
                      <ul className="list-inline m-tb10">
                        <li>
                          <a href="" className="btn sharp-sm facebook">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn sharp-sm twitter">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn sharp-sm linkedin">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn sharp-sm google-plus">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                      <p className="m-b0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </p>
                    </div>
                  </div>
                  <div className="instructor-bx">
                    <div className="instructor-author">
                      <img src="assets/images/testimonials/pic2.jpg" alt="" />
                    </div>
                    <div className="instructor-info">
                      <h6>Keny White </h6>
                      <span>Professor</span>
                      <ul className="list-inline m-tb10">
                        <li>
                          <a href="" className="btn sharp-sm facebook">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn sharp-sm twitter">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn sharp-sm linkedin">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn sharp-sm google-plus">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                      <p className="m-b0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </p>
                    </div>
                  </div>
                </div> */}
                  {/* <div className="" id="reviews">
                  <h4>Reviews</h4>

                  <div className="review-bx">
                    <div className="all-review">
                      <h2 className="rating-type">3</h2>
                      <ul className="cours-star">
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>3 Rating</span>
                    </div>
                    <div className="review-bar">
                      <div className="bar-bx">
                        <div className="side">
                          <div>5 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div
                              className="bar-5"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>150</div>
                        </div>
                      </div>
                      <div className="bar-bx">
                        <div className="side">
                          <div>4 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div
                              className="bar-5"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>140</div>
                        </div>
                      </div>
                      <div className="bar-bx">
                        <div className="side">
                          <div>3 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div
                              className="bar-5"
                              style={{ width: "50%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>120</div>
                        </div>
                      </div>
                      <div className="bar-bx">
                        <div className="side">
                          <div>2 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div
                              className="bar-5"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>110</div>
                        </div>
                      </div>
                      <div className="bar-bx">
                        <div className="side">
                          <div>1 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div
                              className="bar-5"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>80</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="text-center my-5">
          {" "}
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};

export default Content;
