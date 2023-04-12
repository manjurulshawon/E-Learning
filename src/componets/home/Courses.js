import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Course from './Course';
import {products} from "../../products"
import { allCourses } from '../../fakeData/allCourses';
const Courses = () => {
	 const [courses, setCourses] =useState([])

	 useEffect(() => {

		fetch(`${process.env.REACT_APP_API_BASE_URL}/courses`)
		  .then(res => res.json())
		  .then(data => {
			console.log("courses", data);
			setCourses(data)
			// setFilterCourse(data)
		  })
	
	  }, [])
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2
	  };
	//   const courses = allCourses.slice(0,3)

	//   const courses = [{
	// 	title: "Introduction EduChamp - LMS plugin",
	// 	subtitle: "Programming",
	// 	reviews: 3,
	// 	disPrice: 500,
	// 	price: 650,
	// 	img:"assets/images/courses/pic1.jpg"

	//   },
	//   {
	// 	title: "Introduction EduChamp - LMS plugin",
	// 	subtitle: "Programming",
	// 	reviews: 3,
	// 	disPrice: 120,
	// 	price: 190,
	// 	img:"assets/images/courses/pic2.jpg"

	//   },
	//   {
	// 	title: "Introduction EduChamp - LMS plugin",
	// 	subtitle: "Programming",
	// 	reviews: 3,
	// 	disPrice: 120,
	// 	price: 190,
	// 	img:"assets/images/courses/pic3.jpg"

	//   },
	//   {
	// 	title: "Introduction EduChamp - LMS plugin",
	// 	subtitle: "Programming",
	// 	reviews: 3,
	// 	disPrice: 120,
	// 	price: 190,
	// 	img:"assets/images/courses/pic4.jpg"

	//   }]
	   
	//   console.log(products)

  return (
    <div className="section-area section-sp2 popular-courses-bx">
                <div className="container">
					<div className="row">
						<div className="col-md-12 heading-bx left">
							<h2 className="title-head">Popular <span>Courses</span></h2>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
						</div>
					</div>
					<div className="row">
					<div className="col-12 p-lr0">
						<Slider {...settings} >
							{courses.map((data,key)=><Course key={key} course={data}/>)}
						</Slider>
					</div>
					</div>
				</div>
			</div>
  )
}

export default Courses