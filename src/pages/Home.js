import React from 'react'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const Home = () => {
  return (
    <div className="page-wraper">
{/* <div id="loading-icon-bx"></div> */}
	{/* <!-- Header Top ==== --> */}
    <header className="header rs-nav header-transparent">
		<div className="top-bar">
			<div className="container">
				<div className="row d-flex justify-content-between">
					<div className="topbar-left">
						<ul>
							<li><a href="faq-1.html"><i className="fa fa-question-circle"></i>Ask a Question</a></li>
							<li><a href="#"><i className="fa fa-envelope-o"></i>Support@website.com</a></li>
						</ul>
					</div>
					<div className="topbar-right">
						<ul>
							<li>
								<select className="header-lang-bx">
									<option data-icon="flag flag-uk">English UK</option>
									<option data-icon="flag flag-us">English US</option>
								</select>
							</li>
							<li><a href="login.html">Login</a></li>
							<li><a href="register.html">Register</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="sticky-header navbar-expand-lg">
            <div className="menu-bar clearfix">
                <div className="container clearfix">
					{/* <!-- Header Logo ==== --> */}
					<div className="menu-logo">
						<a href="index.html"><img src="assets/images/logo-white.png" alt="" /></a>
					</div>
					{/* <!-- Mobile Nav Button ==== --> */}
                    <button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
					{/* <!-- Author Nav ==== --> */}
                    <div className="secondary-menu">
                        <div className="secondary-inner">
                            <ul>
								<li><a href="#" className="btn-link"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#" className="btn-link"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#" className="btn-link"><i className="fa fa-linkedin"></i></a></li>
								{/* <!-- Search Button ==== --> */}
								<li className="search-btn"><button id="quik-search-btn" type="button" className="btn-link"><i className="fa fa-search"></i></button></li>
							</ul>
						</div>
                    </div>
					{/* <!-- Search Box ==== --> */}
                    <div className="nav-search-bar">
                        <form action="#">
                            <input name="search"  type="text" className="form-control" placeholder="Type to search" />
                            <span><i className="ti-search"></i></span>
                        </form>
						<span id="search-remove"><i className="ti-close"></i></span>
                    </div>
					{/* <!-- Navigation Menu ==== --> */}
                    <div className="menu-links navbar-collapse collapse justify-content-start" id="menuDropdown">
						<div className="menu-logo">
							<a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
						</div>
                        <ul className="nav navbar-nav">	
							<li className="active"><a href="#">Home <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="index.html">Home 1</a></li>
									<li><a href="index-2.html">Home 2</a></li>
								</ul>
							</li>
							<li><a href="#">Pages <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="#">About<i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="about-1.html">About 1</a></li>
											<li><a href="about-2.html">About 2</a></li>
										</ul>
									</li>
									<li><a href="#">Event<i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="event.html">Event</a></li>
											<li><a href="events-details.html">Events Details</a></li>
										</ul>
									</li>
									<li><a href="#">FAQ's<i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="faq-1.html">FAQ's 1</a></li>
											<li><a href="faq-2.html">FAQ's 2</a></li>
										</ul>
									</li>
									<li><a href="#">Contact Us<i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="contact-1.html">Contact Us 1</a></li>
											<li><a href="contact-2.html">Contact Us 2</a></li>
										</ul>
									</li>
									<li><a href="portfolio.html">Portfolio</a></li>
									<li><a href="profile.html">Profile</a></li>
									<li><a href="membership.html">Membership</a></li>
									<li><a href="error-404.html">404 Page</a></li>
								</ul>
							</li>
							<li className="add-mega-menu"><a href="#">Our Courses <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu add-menu">
									<li className="add-menu-left">
										<h5 className="menu-adv-title">Our Courses</h5>
										<ul>
											<li><a href="courses.html">Courses </a></li>
											<li><a href="courses-details.html">Courses Details</a></li>
											<li><a href="profile.html">Instructor Profile</a></li>
											<li><a href="event.html">Upcoming Event</a></li>
											<li><a href="membership.html">Membership</a></li>
										</ul>
									</li>
									<li className="add-menu-right">
										<img src="assets/images/adv/adv.jpg" alt="" />
									</li>
								</ul>
							</li>
							<li><a href="#">Blog <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="blog-classic-grid.html">Blog Classic</a></li>
									<li><a href="blog-classic-sidebar.html">Blog Classic Sidebar</a></li>
									<li><a href="blog-list-sidebar.html">Blog List Sidebar</a></li>
									<li><a href="blog-standard-sidebar.html">Blog Standard Sidebar</a></li>
									<li><a href="blog-details.html">Blog Details</a></li>
								</ul>
							</li>
							<li className="nav-dashboard"><a href="#">Dashboard <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="admin/index.html">Dashboard</a></li>
									<li><a href="admin/add-listing.html">Add Listing</a></li>
									<li><a href="admin/bookmark.html">Bookmark</a></li>
									<li><a href="admin/courses.html">Courses</a></li>
									<li><a href="admin/review.html">Review</a></li>
									<li><a href="admin/teacher-profile.html">Teacher Profile</a></li>
									<li><a href="admin/user-profile.html">User Profile</a></li>
									<li><a href="#">Calendar<i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="admin/basic-calendar.html">Basic Calendar</a></li>
											<li><a href="admin/list-view-calendar.html">List View Calendar</a></li>
										</ul>
									</li>
									<li><a href="#">Mailbox<i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="admin/mailbox.html">Mailbox</a></li>
											<li><a href="admin/mailbox-compose.html">Compose</a></li>
											<li><a href="admin/mailbox-read.html">Mail Read</a></li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
						<div className="nav-social-link">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-google-plus"></i></a>
							<a href="#"><i className="fa fa-linkedin"></i></a>
						</div>
                    </div>
					{/* <!-- Navigation Menu END ==== --> */}
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Header Top END ==== --> */}
    {/* <!-- Content --> */}
    <div className="page-content bg-white">
        {/* <!-- Main Slider --> */}
        <div className="rev-slider">
			<div id="rev_slider_486_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="news-gallery36" data-source="gallery" style={{margin: '0px auto',backgroundColor: '#ffffff',padding: '0px',marginTop: '0px',marginBottom: '0px'}}>
				{/* <!-- START REVOLUTION SLIDER 5.3.0.2 fullwidth mode --> */}
				<div id="rev_slider_486_1" className="rev_slider fullwidthabanner" style={{display: 'none'}} data-version="5.3.0.2">
					<ul>	
                        {/* <!-- SLIDE  --> */}
						<li data-index="rs-100" 
						data-transition="parallaxvertical" 
						data-slotamount="default" 
						data-hideafterloop="0" 
						data-hideslideonmobile="off" 
						data-easein="default" 
						data-easeout="default" 
						data-masterspeed="default" 
						data-thumb="error-404.html" 
						data-rotate="0" 
						data-fstransition="fade" 
						data-fsmasterspeed="1500" 
						data-fsslotamount="7" 
						data-saveperformance="off" 
						data-title="A STUDY ON HAPPINESS" 
						data-param1="" data-param2="" 
						data-param3="" data-param4="" 
						data-param5="" data-param6="" 
						data-param7="" data-param8="" 
						data-param9="" data-param10="" 
						data-description="Science says that Women are generally happier">
							{/* <!-- MAIN IMAGE --> */}
							<img src="assets/images/slider/slide1.jpg" alt="" 
								data-bgposition="center center" 
								data-bgfit="cover" 
								data-bgrepeat="no-repeat" 
								data-bgparallax="10" 
								className="rev-slidebg" 
								data-no-retina />
								
							{/* <!-- LAYER NR. 1 --> */}
							<div className="tp-caption tp-shape tp-shapewrapper " 
								id="slide-100-layer-1" 
								data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
								data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
								data-width="full"
								data-height="full"
								data-whitespace="nowrap"
								data-type="shape" 
								data-basealign="slide" 
								data-responsive_offset="off" 
								data-responsive="off"
								data-frames='[{"from":"opacity:0;","speed":1,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"delay":"wait","speed":1,"to":"opacity:0;","ease":"Power4.easeOut"}]'
								data-textAlign="['left','left','left','left']"
								data-paddingtop="[0,0,0,0]"
								data-paddingright="[0,0,0,0]"
								data-paddingbottom="[0,0,0,0]"
								data-paddingleft="[0,0,0,0]"
								style={{zIndex: '5', backgroundColor: 'rgba(2, 0, 11, 0.80)', borderColor: 'rgba(0, 0, 0, 0)',borderWidth: '0px'}}> </div>	
							{/* <!-- LAYER NR. 2 --> */}
							<div className="tp-caption Newspaper-Title   tp-resizeme" 
								id="slide-100-layer-2" 
								data-x="['center','center','center','center']" 
								data-hoffset="['0','0','0','0']" 
								data-y="['top','top','top','top']" 
								data-voffset="['250','250','250','240']" 
								data-fontsize="['50','50','50','30']"
								data-lineheight="['55','55','55','35']"
								data-width="full"
								data-height="none"
								data-whitespace="normal"
								data-type="text" 
								data-responsive_offset="on" 
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
								data-textAlign="['center','center','center','center']"
								data-paddingtop="[0,0,0,0]"
								data-paddingright="[0,0,0,0]"
								data-paddingbottom="[10,10,10,10]"
								data-paddingleft="[0,0,0,0]"
								style={{zIndex: '6', fontFamily: 'rubik', fontWeight: '700', textAlign: 'center', whiteSpace: 'normal'}}>
									Welcome To University
							</div>

							{/* <!-- LAYER NR. 3 --> */}
							<div className="tp-caption Newspaper-Subtitle   tp-resizeme" 
								id="slide-100-layer-3" 
								data-x="['center','center','center','center']" 
								data-hoffset="['0','0','0','0']" 
								data-y="['top','top','top','top']" 
								data-voffset="['210','210','210','210']" 
								data-width="none"
								data-height="none"
								data-whitespace="nowrap"
								data-type="text" 
								data-responsive_offset="on"
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
								data-textAlign="['left','left','left','left']"
								data-paddingtop="[0,0,0,0]"
								data-paddingright="[0,0,0,0]"
								data-paddingbottom="[0,0,0,0]"
								data-paddingleft="[0,0,0,0]"
								style={{zIndex: '7', whiteSpace: 'nowrap', color: '#fff', fontFamily: 'rubik' , fontSize: '18px', fontWeight: '400'}}>
									Batter Education For A Better 
							</div>
							
							{/* <!-- LAYER NR. 3 --> */}
							<div className="tp-caption Newspaper-Subtitle   tp-resizeme" 
								id="slide-100-layer-4" 
								data-x="['center','center','center','center']" 
								data-hoffset="['0','0','0','0']" 
								data-y="['top','top','top','top']" 
								data-voffset="['320','320','320','290']" 
								data-width="['800','800','700','420']"
								data-height="['100','100','100','120']"
								data-whitespace="unset"
								data-type="text" 
								data-responsive_offset="on"
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
								data-textAlign="['center','center','center','center']"
								data-paddingtop="[0,0,0,0]"
								data-paddingright="[0,0,0,0]"
								data-paddingbottom="[0,0,0,0]"
								data-paddingleft="[0,0,0,0]"
								style={{zIndex: '7', textTransform: 'capitalize', whiteSpace: 'unset', color: '#fff', fontFamily: 'rubik', fontSize: '18px', lineHeight: '28px', fontWeight: '400'}}>
									 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
							</div>
							{/* <!-- LAYER NR. 4 --> */}
							<div className="tp-caption Newspaper-Button rev-btn " 
								id="slide-100-layer-5" 
								data-x="['center','center','center','center']" 
								data-hoffset="['90','80','75','90']" 
								data-y="['top','top','top','top']" 
								data-voffset="['400','400','400','420']" 
								data-width="none"
								data-height="none"
								data-whitespace="nowrap"
								data-type="button" 
								data-responsive_offset="on" 
								data-responsive="off"
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
								data-textAlign="['center','center','center','center']"
								data-paddingtop="[12,12,12,12]"
								data-paddingright="[30,35,35,15]"
								data-paddingbottom="[12,12,12,12]"
								data-paddingleft="[30,35,35,15]"
								style={{zIndex: '8', whiteSpace: 'nowrap', outline: 'none',boxShadow: 'none',boxSizing: 'border-box',MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box',cursor: 'pointer', backgroundColor: 'var(--primary) !important', border: '0', borderRadius: '30px', marginRight: '5px'}}>READ MORE </div>
							<div className="tp-caption Newspaper-Button rev-btn" 
								id="slide-100-layer-6" 
								data-x="['center','center','center','center']" 
								data-hoffset="['-90','-80','-75','-90']" 
								data-y="['top','top','top','top']" 
								data-voffset="['400','400','400','420']" 
								data-width="none"
								data-height="none"
								data-whitespace="nowrap"
								data-type="button" 
								data-responsive_offset="on" 
								data-responsive="off"
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
								data-textAlign="['center','center','center','center']"
								data-paddingtop="[12,12,12,12]"
								data-paddingright="[30,35,35,15]"
								data-paddingbottom="[12,12,12,12]"
								data-paddingleft="[30,35,35,15]"
								style={{zIndex: '8', whiteSpace: 'nowrap', outline: 'none', boxShadow: 'none',boxSizing: 'border-box',MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', borderRadius: '30px'}}>CONTACT US</div>
						</li>
						<li data-index="rs-200" 
						data-transition="parallaxvertical" 
						data-slotamount="default" 
						data-hideafterloop="0" 
						data-hideslideonmobile="off" 
						data-easein="default" 
						data-easeout="default" 
						data-masterspeed="default" 
						data-thumb="assets/images/slider/slide1.jpg" 
						data-rotate="0" 
						data-fstransition="fade" 
						data-fsmasterspeed="1500" 
						data-fsslotamount="7" 
						data-saveperformance="off" 
						data-title="A STUDY ON HAPPINESS" 
						data-param1="" data-param2="" 
						data-param3="" data-param4="" 
						data-param5="" data-param6="" 
						data-param7="" data-param8="" 
						data-param9="" data-param10="" 
						data-description="Science says that Women are generally happier">
							{/* <!-- MAIN IMAGE --> */}
							<img src="assets/images/slider/slide2.jpg" alt="" 
								data-bgposition="center center" 
								data-bgfit="cover" 
								data-bgrepeat="no-repeat" 
								data-bgparallax="10" 
								className="rev-slidebg" 
								data-no-retina />
								
							{/* <!-- LAYER NR. 1 --> */}
							<div className="tp-caption tp-shape tp-shapewrapper " 
								id="slide-200-layer-1" 
								data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
								data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
								data-width="full"
								data-height="full"
								data-whitespace="nowrap"
								data-type="shape" 
								data-basealign="slide" 
								data-responsive_offset="off" 
								data-responsive="off"
								data-frames='[{"from":"opacity:0;","speed":1,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"opacity:1;","ease":"Power4.easeOut"}]'
								data-textAlign="['left','left','left','left']"
								data-paddingtop="[0,0,0,0]"
								data-paddingright="[0,0,0,0]"
								data-paddingbottom="[0,0,0,0]"
								data-paddingleft="[0,0,0,0]"
								style={{zIndex: '5',backgroundColor: 'rgba(2, 0, 11, 0.80)',borderColor: 'rgba(0, 0, 0, 0)',borderWidth: '0px'}}> 
							</div>

							{/* <!-- LAYER NR. 2 --> */}
							<div className="tp-caption Newspaper-Title   tp-resizeme" 
								id="slide-200-layer-2" 
								data-x="['center','center','center','center']" 
								data-hoffset="['0','0','0','0']" 
								data-y="['top','top','top','top']" 
								data-voffset="['250','250','250','240']" 
								data-fontsize="['50','50','50','30']"
								data-lineheight="['55','55','55','35']"
								data-width="full"
								data-height="none"
								data-whitespace="normal"
								data-type="text" 
								data-responsive_offset="on" 
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
								data-textAlign="['center','center','center','center']"
								data-paddingtop="[0,0,0,0]"
								data-paddingright="[0,0,0,0]"
								data-paddingbottom="[10,10,10,10]"
								data-paddingleft="[0,0,0,0]"
								style={{zIndex: '6', fontFamily: 'rubik', fontWeight: '700', textAlign: 'center', whiteSpace: 'normal',textTransform: 'uppercase'}}>
									Welcome To University
							</div>

							{/* <!-- LAYER NR. 3 --> */}
							<div className="tp-caption Newspaper-Subtitle   tp-resizeme" 
								id="slide-200-layer-3" 
								data-x="['center','center','center','center']" 
								data-hoffset="['0','0','0','0']" 
								data-y="['top','top','top','top']" 
								data-voffset="['210','210','210','210']" 
								data-width="none"
								data-height="none"
								data-whitespace="nowrap"
								data-type="text" 
								data-responsive_offset="on"
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
								data-textAlign="['left','left','left','left']"
								data-paddingtop="[0,0,0,0]"
								data-paddingright="[0,0,0,0]"
								data-paddingbottom="[0,0,0,0]"
								data-paddingleft="[0,0,0,0]"
								style={{zIndex: '7', whiteSpace: 'nowrap',textTransform: 'uppercase', color: '#fff', fontFamily: 'rubik', fontSize: '18px', fontWeight: '400'}}>
									Batter Education For A Better 
							</div>
							
							{/* <!-- LAYER NR. 3 --> */}
							<div className="tp-caption Newspaper-Subtitle   tp-resizeme" 
								id="slide-200-layer-4" 
								data-x="['center','center','center','center']" 
								data-hoffset="['0','0','0','0']" 
								data-y="['top','top','top','top']" 
								data-voffset="['320','320','320','290']" 
								data-width="['800','800','700','420']"
								data-height="['100','100','100','120']"
								data-whitespace="unset"
								data-type="text" 
								data-responsive_offset="on"
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
								data-textAlign="['center','center','center','center']"
								data-paddingtop="[0,0,0,0]"
								data-paddingright="[0,0,0,0]"
								data-paddingbottom="[0,0,0,0]"
								data-paddingleft="[0,0,0,0]"
								style={{zIndex: '7', textTransform: 'capitalize', whiteSpace: 'unset', color: '#fff', fontFamily: 'rubik', fontSize: '18px', lineHeight:'28px', fontWeight: '400'}}>
									 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
							</div>
							{/* <!-- LAYER NR. 4 --> */}
							<div className="tp-caption Newspaper-Button rev-btn " 
								id="slide-200-layer-5" 
								data-x="['center','center','center','center']" 
								data-hoffset="['90','80','75','90']" 
								data-y="['top','top','top','top']" 
								data-voffset="['400','400','400','420']" 
								data-width="none"
								data-height="none"
								data-whitespace="nowrap"
								data-type="button" 
								data-responsive_offset="on" 
								data-responsive="off"
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
								data-textAlign="['center','center','center','center']"
								data-paddingtop="[12,12,12,12]"
								data-paddingright="[30,35,35,15]"
								data-paddingbottom="[12,12,12,12]"
								data-paddingleft="[30,35,35,15]"
								style={{zIndex: '8', whiteSpace: 'nowrap', outline: 'none',boxShadow: 'none',boxSizing: 'border-box',MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box',cursor: 'pointer', backgroundColor: 'var(--primary) !important', border: '0', borderRadius: '30px', marginRight: '5px'}}>READ MORE </div>
							<div className="tp-caption Newspaper-Button rev-btn" 
								id="slide-200-layer-6" 
								data-x="['center','center','center','center']" 
								data-hoffset="['-90','-80','-75','-90']" 
								data-y="['top','top','top','top']" 
								data-voffset="['400','400','400','420']" 
								data-width="none"
								data-height="none"
								data-whitespace="nowrap"
								data-type="button" 
								data-responsive_offset="on" 
								data-responsive="off"
								data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
								data-textAlign="['center','center','center','center']"
								data-paddingtop="[12,12,12,12]"
								data-paddingright="[30,35,35,15]"
								data-paddingbottom="[12,12,12,12]"
								data-paddingleft="[30,35,35,15]"
								style={{zIndex: '8', whiteSpace: 'nowrap', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box',cursor: 'pointer', borderRadius: '30px'}}>CONTACT US</div>
						</li>
						{/* <!-- SLIDE  --> */}
					</ul>
				</div>
                {/* <!-- END REVOLUTION SLIDER -->   */}
			</div>  
		</div>  
        {/* <!-- Main Slider --> */}
		<div className="content-block">
            
			{/* <!-- Our Services --> */}
			<div className="section-area content-inner service-info-bx">
                <div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="service-bx">
								<div className="action-box">
									<img src="assets/images/our-services/pic1.jpg" alt="" />
								</div>
								<div className="info-bx text-center">
									<div className="feature-box-sm radius bg-white">
										<i className="fa fa-bank text-primary"></i>
									</div>
									<h4><a href="#">Best Industry Leaders</a></h4>
									<a href="#" className="btn radius-xl">View More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="service-bx">
								<div className="action-box">
									<img src="assets/images/our-services/pic2.jpg" alt="" />
								</div>
								<div className="info-bx text-center">
									<div className="feature-box-sm radius bg-white">
										<i className="fa fa-book text-primary"></i>
									</div>
									<h4><a href="#">Learn Courses Online</a></h4>
									<a href="#" className="btn radius-xl">View More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12">
							<div className="service-bx m-b0">
								<div className="action-box">
									<img src="assets/images/our-services/pic3.jpg" alt="" />
								</div>
								<div className="info-bx text-center">
									<div className="feature-box-sm radius bg-white">
										<i className="fa fa-file-text-o text-primary"></i>
									</div>
									<h4><a href="#">Book Library & Store</a></h4>
									<a href="#" className="btn radius-xl">View More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
            {/* <!-- Our Services END --> */}
			
			{/* <!-- Popular Courses --> */}
			<div className="section-area section-sp2 popular-courses-bx">
                <div className="container">
					<div className="row">
						<div className="col-md-12 heading-bx left">
							<h2 className="title-head">Popular <span>Courses</span></h2>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
						</div>
					</div>
					<div className="row">
					<div className="courses-carousel owl-carousel owl-btn-1 col-12 p-lr0">
						<div className="item">
							<div className="cours-bx">
								<div className="action-box">
									<img src="assets/images/courses/pic1.jpg" alt="" />
									<a href="#" className="btn">Read More</a>
								</div>
								<div className="info-bx text-center">
									<h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
									<span>Programming</span>
								</div>
								<div className="cours-more-info">
									<div className="review">
										<span>3 Review</span>
										<ul className="cours-star">
											<li className="active"><i className="fa fa-star"></i></li>
											<li className="active"><i className="fa fa-star"></i></li>
											<li className="active"><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
										</ul>
									</div>
									<div className="price">
										<del>$190</del>
										<h5>$120</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="cours-bx">
								<div className="action-box">
									<img src="assets/images/courses/pic2.jpg" alt="" />
									<a href="#" className="btn">Read More</a>
								</div>
								<div className="info-bx text-center">
									<h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
									<span>Programming</span>
								</div>
								<div className="cours-more-info">
									<div className="review">
										<span>3 Review</span>
										<ul className="cours-star">
											<li className="active"><i className="fa fa-star"></i></li>
											<li className="active"><i className="fa fa-star"></i></li>
											<li className="active"><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
										</ul>
									</div>
									<div className="price">
										<del>$190</del>
										<h5>$120</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="cours-bx">
								<div className="action-box">
									<img src="assets/images/courses/pic3.jpg" alt="" />
									<a href="#" className="btn">Read More</a>
								</div>
								<div className="info-bx text-center">
									<h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
									<span>Programming</span>
								</div>
								<div className="cours-more-info">
									<div className="review">
										<span>3 Review</span>
										<ul className="cours-star">
											<li className="active"><i className="fa fa-star"></i></li>
											<li className="active"><i className="fa fa-star"></i></li>
											<li className="active"><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
										</ul>
									</div>
									<div className="price">
										<del>$190</del>
										<h5>$120</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="cours-bx">
								<div className="action-box">
									<img src="assets/images/courses/pic4.jpg" alt="" />
									<a href="#" className="btn">Read More</a>
								</div>
								<div className="info-bx text-center">
									<h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
									<span>Programming</span>
								</div>
								<div className="cours-more-info">
									<div className="review">
										<span>3 Review</span>
										<ul className="cours-star">
											<li className="active"><i className="fa fa-star"></i></li>
											<li className="active"><i className="fa fa-star"></i></li>
											<li className="active"><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
											<li><i className="fa fa-star"></i></li>
										</ul>
									</div>
									<div className="price">
										<del>$190</del>
										<h5>$120</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			{/* <!-- Popular Courses END --> */}
			
			{/* <!-- Form --> */}
			<div className="section-area section-sp1 ovpr-dark bg-fix online-cours" style={{backgroundImage: 'url(assets/images/background/bg1.jpg)'}}>
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center text-white">
							<h2>Online Courses To Learn</h2>
							<h5>Own Your Feature Learning New Skills Online</h5>
							<form className="cours-search">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="What do you want to learn today?" />
									<div className="input-group-append">
										<button className="btn" type="submit">Search</button> 
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="mw800 m-auto">
						<div className="row">
							<div className="col-md-4 col-sm-6">
								<div className="cours-search-bx m-b30">
									<div className="icon-box">
										<h3><i className="ti-user"></i><span className="counter">5</span>M</h3>
									</div>
									<span className="cours-search-text">Over 5 million student</span>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="cours-search-bx m-b30">
									<div className="icon-box">
										<h3><i className="ti-book"></i><span className="counter">30</span>K</h3>
									</div>
									<span className="cours-search-text">30,000 Courses.</span>
								</div>
							</div>
							<div className="col-md-4 col-sm-12">
								<div className="cours-search-bx m-b30">
									<div className="icon-box">
										<h3><i className="ti-layout-list-post"></i><span className="counter">20</span>K</h3>
									</div>
									<span className="cours-search-text">Learn Anythink Online.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Form END --> */}
			<div className="section-area section-sp2">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center heading-bx">
							<h2 className="title-head m-b0">Upcoming <span>Events</span></h2>
							<p className="m-b0">Upcoming Education Events To Feed Brain. </p>
						</div>
					</div>
					<div className="row">
					<div className="upcoming-event-carousel owl-carousel owl-btn-center-lr owl-btn-1 col-12 p-lr0  m-b30">
						<div className="item">
							<div className="event-bx">
								<div className="action-box">
									<img src="assets/images/event/pic4.jpg" alt="" />
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
					</div>
					</div>
					<div className="text-center">
						<a href="#" className="btn">View All Event</a>
					</div>
				</div>
			</div>
			
			{/* <!-- Testimonials --> */}
			<div className="section-area section-sp2 bg-fix ovbl-dark" style={{backgroundImage:'url(assets/images/background/bg1.jpg)'}}>
                <div className="container">
					<div className="row">
						<div className="col-md-12 text-white heading-bx left">
							<h2 className="title-head text-uppercase">what people <span>say</span></h2>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
						</div>
					</div>
					<div className="testimonial-carousel owl-carousel owl-btn-1 col-12 p-lr0">
						<div className="item">
							<div className="testimonial-bx">
								<div className="testimonial-thumb">
									<img src="assets/images/testimonials/pic1.jpg" alt="" />
								</div>
								<div className="testimonial-info">
									<h5 className="name">Peter Packer</h5>
									<p>-Art Director</p>
								</div>
								<div className="testimonial-content">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="testimonial-bx">
								<div className="testimonial-thumb">
									<img src="assets/images/testimonials/pic2.jpg" alt="" />
								</div>
								<div className="testimonial-info">
									<h5 className="name">Peter Packer</h5>
									<p>-Art Director</p>
								</div>
								<div className="testimonial-content">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Testimonials END --> */}
			
			{/* <!-- Recent News --> */}
			<div className="section-area section-sp2">
                <div className="container">
					<div className="row">
						<div className="col-md-12 heading-bx left">
							<h2 className="title-head">Recent <span>News</span></h2>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
						</div>
					</div>
					<div className="recent-news-carousel owl-carousel owl-btn-1 col-12 p-lr0">
						<div className="item">
							<div className="recent-news">
								<div className="action-box">
									<img src="assets/images/blog/latest-blog/pic1.jpg" alt="" />
								</div>
								<div className="info-bx">
									<ul className="media-post">
										<li><a href="#"><i className="fa fa-calendar"></i>Jan 02 2019</a></li>
										<li><a href="#"><i className="fa fa-user"></i>By William</a></li>
									</ul>
									<h5 className="post-title"><a href="blog-details.html">This Story Behind Education Will Haunt You Forever.</a></h5>
									<p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
									<div className="post-extra">
										<a href="#" className="btn-link">READ MORE</a>
										<a href="#" className="comments-bx"><i className="fa fa-comments-o"></i>20 Comment</a>
									</div>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="recent-news">
								<div className="action-box">
									<img src="assets/images/blog/latest-blog/pic2.jpg" alt="" />
								</div>
								<div className="info-bx">
									<ul className="media-post">
										<li><a href="#"><i className="fa fa-calendar"></i>Feb 05 2019</a></li>
										<li><a href="#"><i className="fa fa-user"></i>By John</a></li>
									</ul>
									<h5 className="post-title"><a href="blog-details.html">What Will Education Be Like In The Next 50 Years?</a></h5>
									<p>As desperate as you are right now, you have done everything you can on your.</p>
									<div className="post-extra">
										<a href="#" className="btn-link">READ MORE</a>
										<a href="#" className="comments-bx"><i className="fa fa-comments-o"></i>14 Comment</a>
									</div>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="recent-news">
								<div className="action-box">
									<img src="assets/images/blog/latest-blog/pic3.jpg" alt="" />
								</div>
								<div className="info-bx">
									<ul className="media-post">
										<li><a href="#"><i className="fa fa-calendar"></i>April 14 2019</a></li>
										<li><a href="#"><i className="fa fa-user"></i>By George</a></li>
									</ul>
									<h5 className="post-title"><a href="blog-details.html">Master The Skills Of Education And Be.</a></h5>
									<p>You will see in the guide all my years of valuable experience together with.</p>
									<div className="post-extra">
										<a href="#" className="btn-link">READ MORE</a>
										<a href="#" className="comments-bx"><i className="fa fa-comments-o"></i>23 Comment</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Recent News End --> */}
			
        </div>
		{/* <!-- contact area END --> */}
    </div>
    {/* <!-- Content END-->
	<!-- Footer ==== --> */}
    <footer>
        <div className="footer-top">
			<div className="pt-exebar">
				<div className="container">
					<div className="d-flex align-items-stretch">
						<div className="pt-logo mr-auto">
							<a href="index.html"><img src="assets/images/logo-white.png" alt="" /></a>
						</div>
						<div className="pt-social-link">
							<ul className="list-inline m-a0">
								<li><a href="#" className="btn-link"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#" className="btn-link"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#" className="btn-link"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="#" className="btn-link"><i className="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
						<div className="pt-btn-join">
							<a href="#" className="btn ">Join Now</a>
						</div>
					</div>
				</div>
			</div>
            <div className="container">
                <div className="row">
					<div className="col-lg-4 col-md-12 col-sm-12 footer-col-4">
                        <div className="widget">
                            <h5 className="footer-title">Sign Up For A Newsletter</h5>
							<p className="text-capitalize m-b20">Weekly Breaking news analysis and cutting edge advices on job searching.</p>
                            <div className="subscribe-form m-b20">
								<form className="subscription-form" action="http://educhamp.themetrades.com/demo/assets/script/mailchamp.php" method="post">
									<div className="ajax-message"></div>
									<div className="input-group">
										<input name="email" required="required"  className="form-control" placeholder="Your Email Address" type="email" />
										<span className="input-group-btn">
											<button name="submit" value="Submit" type="submit" className="btn"><i className="fa fa-arrow-right"></i></button>
										</span> 
									</div>
								</form>
							</div>
                        </div>
                    </div>
					<div className="col-12 col-lg-5 col-md-7 col-sm-12">
						<div className="row">
							<div className="col-4 col-lg-4 col-md-4 col-sm-4">
								<div className="widget footer_widget">
									<h5 className="footer-title">Company</h5>
									<ul>
										<li><a href="index.html">Home</a></li>
										<li><a href="about-1.html">About</a></li>
										<li><a href="faq-1.html">FAQs</a></li>
										<li><a href="contact-1.html">Contact</a></li>
									</ul>
								</div>
							</div>
							<div className="col-4 col-lg-4 col-md-4 col-sm-4">
								<div className="widget footer_widget">
									<h5 className="footer-title">Get In Touch</h5>
									<ul>
										<li><a href="http://educhamp.themetrades.com/admin/index.html">Dashboard</a></li>
										<li><a href="blog-classic-grid.html">Blog</a></li>
										<li><a href="portfolio.html">Portfolio</a></li>
										<li><a href="event.html">Event</a></li>
									</ul>
								</div>
							</div>
							<div className="col-4 col-lg-4 col-md-4 col-sm-4">
								<div className="widget footer_widget">
									<h5 className="footer-title">Courses</h5>
									<ul>
										<li><a href="courses.html">Courses</a></li>
										<li><a href="courses-details.html">Details</a></li>
										<li><a href="membership.html">Membership</a></li>
										<li><a href="profile.html">Profile</a></li>
									</ul>
								</div>
							</div>
						</div>
                    </div>
					<div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
                        <div className="widget widget_gallery gallery-grid-4">
                            <h5 className="footer-title">Our Gallery</h5>
                            <ul className="magnific-image">
								<li><a href="assets/images/gallery/pic1.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic1.jpg" alt="" /></a></li>
								<li><a href="assets/images/gallery/pic2.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic2.jpg" alt="" /></a></li>
								<li><a href="assets/images/gallery/pic3.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic3.jpg" alt="" /></a></li>
								<li><a href="assets/images/gallery/pic4.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic4.jpg" alt="" /></a></li>
								<li><a href="assets/images/gallery/pic5.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic5.jpg" alt="" /></a></li>
								<li><a href="assets/images/gallery/pic6.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic6.jpg" alt="" /></a></li>
								<li><a href="assets/images/gallery/pic7.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic7.jpg" alt="" /></a></li>
								<li><a href="assets/images/gallery/pic8.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic8.jpg" alt="" /></a></li>
							</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center"> <a target="_blank" href="https://www.templateshub.net">Templates Hub</a></div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer END ==== --> */}
    <button className="back-to-top fa fa-chevron-up" ></button>
</div>
  )
}

export default Home