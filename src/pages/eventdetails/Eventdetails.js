import React, { useEffect, useState } from 'react'
import Header from '../../componets/home/Header'
import { useParams } from 'react-router-dom';

const Eventdetails = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    console.log("idc", eventId);
    console.log("courses", event.length);
    // let data = allCourses.filter(course=> course._id == courseId)
    // let data = allCourses.find((course) => course._id == courseId);
    useEffect(() => {
  
      fetch(`${process.env.REACT_APP_API_BASE_URL}/events/${eventId}`)
        .then(res => res.json())
        .then(data => {
          console.log("courses", data);
  
          setEvent(data)
          setIsLoading(false)
        })
  
    }, [])
  return (
    <div>
        <Header/>
         <div class="page-content bg-white">
     
        <div class="page-banner ovbl-dark"
        //  style="background-image:url(assets/images/banner/banner1.jpg);"
         >
            <div class="container">
                <div class="page-banner-entry">
                    <h1 class="text-white">Event Details</h1>
				 </div>
            </div>
        </div>
	
		
	{ !isLoading &&	<div class="content-block">
   
			<div class="section-area section-sp1">
                <div class="container">
					 <div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<div class="courses-post">
								<div class="ttr-post-media media-effect">
									<a href="#"><img src="assets/images/blog/default/thum1.jpg" alt=""/></a>
								</div>
								<div class="ttr-post-info">
									<div class="ttr-post-title ">
										<h2 class="post-title">{event.name}</h2>
									</div>
									<div class="ttr-post-text">
										<p>{event.description.short_description}</p>
									</div>
								</div>
							</div>
							<div class="courese-overview" id="overview">
								<div class="row">
									<div class="col-md-12 col-lg-5">
										<ul class="course-features">
											<li><i class="ti-book"></i> <span class="label">Topics</span> <span class="value">Web design</span></li>
											<li><i class="ti-help-alt"></i> <span class="label">Host</span> <span class="value">EduChamp</span></li>
											<li><i class="ti-time"></i> <span class="label">Location</span> <span class="value">#45 Road</span></li>
											<li><i class="ti-stats-up"></i> <span class="label">Skill level</span> <span class="value">Beginner</span></li>
											<li><i class="ti-smallcap"></i> <span class="label">Language</span> <span class="value">English</span></li>
											<li><i class="ti-user"></i> <span class="label">Students</span> <span class="value">32</span></li>
											<li><i class="ti-check-box"></i> <span class="label">Assessments</span> <span class="value">Yes</span></li>
										</ul>
									</div>
									<div class="col-md-12 col-lg-7">
										<h5 class="m-b5">Event Description</h5>
										<p>{event.description.description}</p>
									
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
            </div>
        </div>}
	
		
    </div>
    </div>
  )
}

export default Eventdetails