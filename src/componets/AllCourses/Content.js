import React from "react";
import { allCourses } from "../../fakeData/allCourses";
import { Link, useNavigate } from "react-router-dom";
const Content = (props) => {
  console.log("co", props.course);
  const { course_name, description, picture, _id, price } = props.course;
  const navigate = useNavigate();
  const courseDetails = (_id) => {
    navigate(`/courses/${_id}`);
  };
  return (
    <>
      {/* Content */}
      {/* <div class="col-lg-9 col-md-8 col-sm-12">
        <div class="row"> */}
      <div class="col-md-6 col-lg-4 col-sm-6 m-b30">
        <div class="cours-bx">
          <div class="action-box">
            <img src={picture} alt="" />
            {/* <a href="#" class="btn">
              Read More
            </a> */}
          </div>
          <div class="info-bx text-center">
            <h5>
              <Link to={`/courses/${_id}`}>{course_name}</Link>
            </h5>
            <span>{description.short_description}</span>
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
            <div class="price mt-2">
              {/* <del>$190</del> */}
              <h5>৳ {price.original}</h5>
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Content;
