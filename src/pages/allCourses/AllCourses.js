import React, { useEffect, useState } from "react";
// import Content from "../../componets/allCourses/Content";
import { allCourses } from "../../fakeData/allCourses";
import AllCoursesBanner from "./AllCoursesBanner";
import Content from "../../componets/AllCourses/Course";
import Header from "../../componets/home/Header";
import Course from "../../componets/AllCourses/Course";
import Footer from "../../componets/home/Footer";
const AllCourses = () => {
  const [course, setCourse] = useState([]);
  const [filterCourse, setFilterCourse] = useState([]);
  console.log("allCourses", filterCourse);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/courses`)
      .then((res) => res.json())
      .then((data) => {
        console.log("courses", data);
        setCourse(data);
        setFilterCourse(data);
      });
  }, []);
  const searchHandler = (e) => {
    console.log(e.target.value);
    let data = course.filter(
      (dt) =>
        dt.course_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
        -1
    );
    setFilterCourse(data);
  };
  const searchClickHandler = (e) => {
    console.log("e", e);
    if (e == "all") {
      setFilterCourse(course);
    } else {
      let data = course.filter((dt) => dt.course_type == e);
      setFilterCourse(data);
    }
  };
  return (
    <div>
      <div class="page-content bg-white">
        <Header />
        <AllCoursesBanner />

        <div class="content-block">
          <div class="section-area section-sp1">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12 m-b30">
                  <div class="widget courses-search-bx placeani">
                    <div class="form-group">
                      <div class="input-group">
                        {/* <label>Search Courses</label> */}
                        <input
                          placeholder="Search Course"
                          type="text"
                          class="form-control"
                          onChange={searchHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="widget widget_archive">
                    <h5 class="widget-title style-1">All Courses</h5>
                    <ul>
                      <li
                        className="curserPointer"
                        onClick={() => searchClickHandler("all")}
                      >
                        All
                      </li>
                      <li
                        className="curserPointer"
                        onClick={() => searchClickHandler("general")}
                      >
                        General
                      </li>
                      <li
                        className="curserPointer"
                        onClick={() => searchClickHandler("itAndSoft")}
                      >
                        IT & Software
                      </li>
                      <li
                        className="curserPointer"
                        onClick={() => searchClickHandler("photography")}
                      >
                        Photography
                      </li>
                      <li
                        className="curserPointer"
                        onClick={() =>
                          searchClickHandler("programmingLanguage")
                        }
                      >
                        Programming Language
                      </li>
                      <li
                        className="curserPointer"
                        onClick={() => searchClickHandler("technology")}
                      >
                        Technology
                      </li>
                    </ul>
                  </div>
                  <div class="widget">
                    <a href="#">
                      {/* <img src="assets/images/adv/adv.jpg" alt="" />  */}
                    </a>
                  </div>
                  {/* <div class="widget recent-posts-entry widget-courses">
                    <h5 class="widget-title style-1">Recent Courses</h5>
                    <div class="widget-post-bx">
                      <div class="widget-post clearfix">
                        <div class="ttr-post-media">
                          {" "}
                          <img
                            src="assets/images/blog/recent-blog/pic1.jpg"
                            width="200"
                            height="143"
                            alt=""
                          />{" "}
                        </div>
                        <div class="ttr-post-info">
                          <div class="ttr-post-header">
                            <h6 class="post-title">
                              <a href="#">Introduction EduChamp</a>
                            </h6>
                          </div>
                          <div class="ttr-post-meta">
                            <ul>
                              <li class="price">
                                <del>$190</del>
                                <h5>$120</h5>
                              </li>
                              <li class="review">03 Review</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="widget-post clearfix">
                        <div class="ttr-post-media">
                          {" "}
                          <img
                            src="assets/images/blog/recent-blog/pic3.jpg"
                            width="200"
                            height="160"
                            alt=""
                          />{" "}
                        </div>
                        <div class="ttr-post-info">
                          <div class="ttr-post-header">
                            <h6 class="post-title">
                              <a href="#">English For Tommorow</a>
                            </h6>
                          </div>
                          <div class="ttr-post-meta">
                            <ul>
                              <li class="price">
                                <h5 class="free">Free</h5>
                              </li>
                              <li class="review">07 Review</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div class="col-lg-9 col-md-8 col-sm-12">
                  <div class="row">
                    {filterCourse.map((course) => (
                      <Course course={course} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCourses;
