import React from "react";
import { TbCurrencyTaka } from 'react-icons/tb';
import { NavLink } from "react-router-dom";


const Course = ({course}) => {
  // console.log(course)
    const {picture,price, disPrice,reviews,course_name,subtitle,_id} = course
  return (
    <div className="item me-2 my-3">
      <div className="cours-bx" style={{boxShadow:'0 0 3px 0 rgba(29,25,0,0.1)'}}>
        <div className="action-box">
          <img src={picture} alt="" />
          {/* <a href="#" className="btn text-white">
            Read More
          </a> */}
        </div>
        <div className="info-bx text-center">
          <h5>
            <NavLink to={`/courses/${_id}`}>{course_name}</NavLink>
          </h5>
          <span>{subtitle}</span>
        </div>
        <div className="cours-more-info">
          <div className="review">
            <span>{reviews} Review</span>
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
          </div>
          <div className="price">
            {/* <del><TbCurrencyTaka /> {price.original}</del> */}
            <h5 className="mt-3"><TbCurrencyTaka />{price.discount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
