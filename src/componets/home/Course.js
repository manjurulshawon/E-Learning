import React from "react";
import { TbCurrencyTaka } from 'react-icons/tb';


const Course = ({course}) => {
    console.log(course)
    const {img,price, disPrice,reviews,title,subtitle} = course
  return (
    <div className="item me-2">
      <div className="cours-bx" style={{boxShadow:'0 0 3px 0 rgba(29,25,0,0.1)'}}>
        <div className="action-box">
          <img src={img} alt="" />
          <a href="#" className="btn text-white">
            Read More
          </a>
        </div>
        <div className="info-bx text-center">
          <h5>
            <a href="#">{title}</a>
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
            <del><TbCurrencyTaka /> {price}</del>
            <h5><TbCurrencyTaka />{disPrice}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
