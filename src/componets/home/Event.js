import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { allEvents } from '../../fakeData/event';
import { Link } from 'react-router-dom';
const Event = () => {
	const [events, setEvents] = useState([])
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {

		fetch(`${process.env.REACT_APP_API_BASE_URL}/events`)
		  .then(res => res.json())
		  .then(data => {
			console.log("courses", data);
			setEvents(data)
			setIsLoading(false)
			// setFilterCourse(data)
		  })
	
	  }, [])
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		arrows: true
	  };
  return (
    <div className="section-area section-sp2">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center heading-bx">
							<h2 className="title-head m-b0">Upcoming <span>Events</span></h2>
							<p className="m-b0">Upcoming Education Events To Feed Brain. </p>
						</div>
					</div>
			{	!isLoading &&	<div className="row">
					<Slider {...settings}>
         
			{
				events.map((event)=>  <div> <div className="item mx-2	my-2">
				<div className="event-bx">
					<div className="action-box">
						<img src={event.picture} alt="" />
					</div>
					<div className="info-bx d-flex">
						<div>
							<div className="event-time">
								<div className="event-date">{event.date}</div>
								<div className="event-month">{event.month}</div>
							</div>
						</div>
						<div className="event-info">
							<h4 className="event-title"><Link to={`/events/${event._id}`}>{event.name}</Link></h4>
							<ul className="media-post">
								<li><a href="#"><i className="fa fa-clock-o"></i> {event.time}</a></li>
								<li><a href="#"><i className="fa fa-map-marker"></i> {event.location}</a></li>
							</ul>
							<p>{event.description.short_description}</p>
						</div>
					</div>
				</div>
			</div>
			</div>)
			}
		 
       
        
        </Slider>
					{/* <div className=" col-12 p-lr0  m-b30">
						
						<div className="item">
							<div className="event-bx">
								<div className="action-box">
									<img src="assets/images/event/pic3.jpg" alt="" />
								</div>
								<div className="info-bx d-flex">
									<div>
										<div className="event-time">
											<div className="event-date">29</div>
											<div className="event-month">October</div>
										</div>
									</div>
									<div className="event-info">
										<h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
										<ul className="media-post">
											<li><a href="#"><i className="fa fa-clock-o"></i> 7:00am 8:00am</a></li>
											<li><a href="#"><i className="fa fa-map-marker"></i> Berlin, Germany</a></li>
										</ul>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
									</div>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="event-bx">
								<div className="action-box">
									<img src="assets/images/event/pic2.jpg" alt="" />
								</div>
								<div className="info-bx d-flex">
									<div>
										<div className="event-time">
											<div className="event-date">29</div>
											<div className="event-month">October</div>
										</div>
									</div>
									<div className="event-info">
										<h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
										<ul className="media-post">
											<li><a href="#"><i className="fa fa-clock-o"></i> 7:00am 8:00am</a></li>
											<li><a href="#"><i className="fa fa-map-marker"></i> Berlin, Germany</a></li>
										</ul>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					</div>}
					{/* <div className="text-center mt-5">
						<a href="#" className="btn">View All Event</a>
					</div> */}
				</div>
			</div>
  )
}

export default Event