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
import useAuth from '../hooks/useAuth';

const Home = () => {
	const { user } = useAuth()
	return (
		<div className="page-wraper">
			<div className="page-content bg-white">

			<Header />
				<Slider />


				{/* <!-- Main Slider --> */}
				<div className="content-block">



					<Courses />

					<Form />


					<Event />


					{/* <Testimonial /> */}
					{/* <News /> */}

				</div>
			</div>
			{/* <!-- Content END-->
	<!-- Footer ==== --> */}
			{/* <Footer /> */}
			{/* <!-- Footer END ==== --> */}
			<button className="back-to-top fa fa-chevron-up" ></button>
		</div>
	)
}

export default Home