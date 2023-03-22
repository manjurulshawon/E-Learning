import React from 'react'
import Slider from '../componets/home/Slider';
import Services from '../componets/home/Services';
import Courses from '../componets/home/Courses';
import Form from '../componets/home/Form';
import Event from '../componets/home/Event';
import Testimonial from '../componets/home/Testimonial';
import News from '../componets/home/News';
import Footer from '../componets/home/Footer';
import Header from '../componets/home/Header';

const Home = () => {
  return (
    <div className="page-wraper">
{/* <div id="loading-icon-bx"></div> */}
	{/* <!-- Header Top ==== --> */}
    <Header />
    {/* <!-- Header Top END ==== --> */}
    {/* <!-- Content --> */}
    <div className="page-content bg-white">
        {/* <!-- Main Slider --> */}
		
        <Slider />


        {/* <!-- Main Slider --> */}
		<div className="content-block">
            
			{/* <!-- Our Services --> */}


			<Services />


            {/* <!-- Our Services END --> */}
			
			{/* <!-- Popular Courses --> */}

			<Courses />

			{/* <!-- Popular Courses END --> */}
			
			{/* <!-- Form --> */}
			
			<Form />

			{/* <!-- Form END --> */}
			
			<Event />
			
			{/* <!-- Testimonials --> */}
			
			<Testimonial />
			{/* <!-- Testimonials END --> */}
			
			{/* <!-- Recent News --> */}
			<News />
			{/* <!-- Recent News End --> */}
			
        </div>
		{/* <!-- contact area END --> */}
    </div>
    {/* <!-- Content END-->
	<!-- Footer ==== --> */}
    <Footer />
    {/* <!-- Footer END ==== --> */}
    <button className="back-to-top fa fa-chevron-up" ></button>
</div>
  )
}

export default Home