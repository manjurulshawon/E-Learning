import React, { useState } from "react";
// import Content from "../../componets/allCourses/Content";
import { allCourses } from "../../fakeData/allCourses";
import AllCoursesBanner from "./AllCoursesBanner";
import Content from "../../componets/AllCourses/Content";
const AllCourses = () => {
  const [filterCourse,setFilterCourse]=useState(allCourses)
  console.log("allCourses", filterCourse);
  const searchHandler =(e)=>{

  }
  return (
    <div>
      <div class="page-content bg-white">
        <AllCoursesBanner />

        <div class="content-block">
          <div class="section-area section-sp1">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12 m-b30">
                  <div class="widget courses-search-bx placeani">
                    <div class="form-group">
                      <div class="input-group">
                        <label>Search Courses</label>
                        <input
                          name="dzName"
                          type="text"
                          required
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="widget widget_archive">
                    <h5 class="widget-title style-1">All Courses</h5>
                    <ul>
                      <li class="active">
                        <a href="#">General</a>
                      </li>
                      <li>
                        <a href="#">IT & Software</a>
                      </li>
                      <li>
                        <a href="#">Photography</a>
                      </li>
                      <li>
                        <a href="#">Programming Language</a>
                      </li>
                      <li>
                        <a href="#">Technology</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget">
                    <a href="#">
                      {/* <img src="assets/images/adv/adv.jpg" alt="" />  */}
                    </a>
                  </div>
                  <div class="widget recent-posts-entry widget-courses">
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
                  </div>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-12">
                  <div class="row">
                    {filterCourse.map((course) => (
                      <Content course={course} />
                    ))}
                  </div>
                </div>
                {/* 
                <div class="col-lg-9 col-md-8 col-sm-12">
                  <div class="row">
                    <div class="col-md-6 col-lg-4 col-sm-6 m-b30">
                      <div class="cours-bx">
                        <div class="action-box">
                          <img src="assets/images/courses/pic2.jpg" alt="" />
                        </div>
                        <div class="info-bx text-center">
                          <h5>
                            <a href="#">Introduction EduChamp – LMS plugin</a>
                          </h5>
                          <span>Programming</span>
                        </div>
                        <div class="cours-more-info">
                          <div class="review">
                            <span>3 Review</span>
                            <ul class="cours-star">
                              <li class="active">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="active">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="active">
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="price">
                            <del>$190</del>
                            <h5>$120</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-3"> */}
              
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
