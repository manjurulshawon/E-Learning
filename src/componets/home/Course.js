import React from "react";
import { Button } from "react-bootstrap";
import { TbCurrencyTaka } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  // console.log(course)
  const { picture, price, disPrice, reviews, course_name, description, _id } =
    course;
  const navigate = useNavigate();
  const handleNavigate = (_id) => {
    navigate(`/enroll/${_id}`);
  };
  return (
    <div className="item me-2 my-3 col-10">
      <div
        className="cours-bx"
        style={{ boxShadow: "0 0 3px 0 rgba(29,25,0,0.1)" }}
      >
        <div className="action-box">
          <img
            style={{ height: "280px", objectFit: "cover" }}
            src={picture}
            alt=""
          />
          {/* <a href="#" className="btn text-white">
            Read More
          </a> */}
        </div>
        <div className="info-bx text-center">
          <h5>
            <NavLink to={`/courses/${_id}`}>{course_name}</NavLink>
          </h5>
          <span>{description?.substring(0, 100)} ...</span>
        </div>
        <div className="cours-more-info">
          <div className="review">
            <Button
              variant="outline-warning"
              size="md"
              onClick={() => handleNavigate(_id)}
            >
              Enroll
            </Button>
            {/* <span>{reviews} Review</span> */}
            {/* <ul className="cours-star">
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
            </ul> */}
          </div>
          <div className="price">
            {/* <del><TbCurrencyTaka /> {price.original}</del> */}
            <h5 className="mt-3">
              <TbCurrencyTaka />
              {price}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
