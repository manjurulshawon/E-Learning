import React from 'react'

const Admin = () => {
  return (
    <div class="page-wraper">
	<header class="ttr-header">
		<div class="ttr-header-wrapper">
			<div class="ttr-toggle-sidebar ttr-material-button">
				<i class="ti-close ttr-open-icon"></i>
				<i class="ti-menu ttr-close-icon"></i>
			</div>
			
			<div class="ttr-logo-box">
				<div>
					<a href="index.html" class="ttr-logo">
						<img class="ttr-logo-mobile" alt="" src="assets/images/logo-mobile.png" width="30" height="30"/>
						<img class="ttr-logo-desktop" alt="" src="assets/images/logo-white.png" width="160" height="27"/>
					</a>
				</div>
			</div>
			
			<div class="ttr-header-menu">
				<ul class="ttr-header-navigation">
					<li>
						<a href="../index.html" class="ttr-material-button ttr-submenu-toggle">HOME</a>
					</li>
					<li>
						<a href="#" class="ttr-material-button ttr-submenu-toggle">QUICK MENU <i class="fa fa-angle-down"></i></a>
						<div class="ttr-header-submenu">
							<ul>
								<li><a href="../courses.html">Our Courses</a></li>
								<li><a href="../event.html">New Event</a></li>
								<li><a href="../membership.html">Membership</a></li>
							</ul>
						</div>
					</li>
				</ul>
				
			</div>
			<div class="ttr-header-right ttr-with-seperator">
			
				<ul class="ttr-header-navigation">
					<li>
						<a href="#" class="ttr-material-button ttr-search-toggle"><i class="fa fa-search"></i></a>
					</li>
					<li>
						<a href="#" class="ttr-material-button ttr-submenu-toggle"><i class="fa fa-bell"></i></a>
						<div class="ttr-header-submenu noti-menu">
							<div class="ttr-notify-header">
								<span class="ttr-notify-text-top">9 New</span>
								<span class="ttr-notify-text">User Notifications</span>
							</div>
							<div class="noti-box-list">
								<ul>
									<li>
										<span class="notification-icon dashbg-gray">
											<i class="fa fa-check"></i>
										</span>
										<span class="notification-text">
											<span>Sneha Jogi</span> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 02:14</span>
										</span>
									</li>
									<li>
										<span class="notification-icon dashbg-yellow">
											<i class="fa fa-shopping-cart"></i>
										</span>
										<span class="notification-text">
											<a href="#">Your order is placed</a> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 7 Min</span>
										</span>
									</li>
									<li>
										<span class="notification-icon dashbg-red">
											<i class="fa fa-bullhorn"></i>
										</span>
										<span class="notification-text">
											<span>Your item is shipped</span> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 2 May</span>
										</span>
									</li>
									<li>
										<span class="notification-icon dashbg-green">
											<i class="fa fa-comments-o"></i>
										</span>
										<span class="notification-text">
											<a href="#">Sneha Jogi</a> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 14 July</span>
										</span>
									</li>
									<li>
										<span class="notification-icon dashbg-primary">
											<i class="fa fa-file-word-o"></i>
										</span>
										<span class="notification-text">
											<span>Sneha Jogi</span> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 15 Min</span>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#" class="ttr-material-button ttr-submenu-toggle"><span class="ttr-user-avatar"><img alt="" src="assets/images/testimonials/pic3.jpg" width="32" height="32"/></span></a>
						<div class="ttr-header-submenu">
							<ul>
								<li><a href="user-profile.html">My profile</a></li>
								<li><a href="list-view-calendar.html">Activity</a></li>
								<li><a href="mailbox.html">Messages</a></li>
								<li><a href="../login.html">Logout</a></li>
							</ul>
						</div>
					</li>
					<li class="ttr-hide-on-mobile">
						<a href="#" class="ttr-material-button"><i class="ti-layout-grid3-alt"></i></a>
						<div class="ttr-header-submenu ttr-extra-menu">
							<a href="#">
								<i class="fa fa-music"></i>
								<span>Musics</span>
							</a>
							<a href="#">
								<i class="fa fa-youtube-play"></i>
								<span>Videos</span>
							</a>
							<a href="#">
								<i class="fa fa-envelope"></i>
								<span>Emails</span>
							</a>
							<a href="#">
								<i class="fa fa-book"></i>
								<span>Reports</span>
							</a>
							<a href="#">
								<i class="fa fa-smile-o"></i>
								<span>Persons</span>
							</a>
							<a href="#">
								<i class="fa fa-picture-o"></i>
								<span>Pictures</span>
							</a>
						</div>
					</li>
				</ul>
				
			</div>
			
			<div class="ttr-search-bar">
				<form class="ttr-search-form">
					<div class="ttr-search-input-wrapper">
						<input type="text" name="qq" placeholder="search something..." class="ttr-search-input"/>
						<button type="submit" name="search" class="ttr-search-submit"><i class="ti-arrow-right"></i></button>
					</div>
					<span class="ttr-search-close ttr-search-toggle">
						<i class="ti-close"></i>
					</span>
				</form>
			</div>
		
		{/* </div> */}
		</div>
	</header>

	<div class="ttr-sidebar">
		<div class="ttr-sidebar-wrapper content-scroll">
			
			<div class="ttr-sidebar-logo">
				<a href="#"><img alt="" src="assets/images/logo.png" width="122" height="27"/></a>
				 <div class="ttr-sidebar-pin-button" title="Pin/Unpin Menu">
					<i class="material-icons ttr-fixed-icon">gps_fixed</i>
					<i class="material-icons ttr-not-fixed-icon">gps_not_fixed</i>
				</div> 
				<div class="ttr-sidebar-toggle-button">
					<i class="ti-arrow-left"></i>
				</div>
			</div>
			
			<nav class="ttr-sidebar-navi">
				<ul>
					<li>
						<a href="index.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-home"></i></span>
		                	<span class="ttr-label">Dashborad</span>
		                </a>
		            </li>
					<li>
						<a href="courses.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-book"></i></span>
		                	<span class="ttr-label">Courses</span>
		                </a>
		            </li>
					<li>
						<a href="#" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-email"></i></span>
		                	<span class="ttr-label">Mailbox</span>
		                	<span class="ttr-arrow-icon"><i class="fa fa-angle-down"></i></span>
		                </a>
		                <ul>
		                	<li>
		                		<a href="mailbox.html" class="ttr-material-button"><span class="ttr-label">Mail Box</span></a>
		                	</li>
		                	<li>
		                		<a href="mailbox-compose.html" class="ttr-material-button"><span class="ttr-label">Compose</span></a>
		                	</li>
							<li>
		                		<a href="mailbox-read.html" class="ttr-material-button"><span class="ttr-label">Mail Read</span></a>
		                	</li>
		                </ul>
		            </li>
					<li>
						<a href="#" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-calendar"></i></span>
		                	<span class="ttr-label">Calendar</span>
		                	<span class="ttr-arrow-icon"><i class="fa fa-angle-down"></i></span>
		                </a>
		                <ul>
		                	<li>
		                		<a href="basic-calendar.html" class="ttr-material-button"><span class="ttr-label">Basic Calendar</span></a>
		                	</li>
		                	<li>
		                		<a href="list-view-calendar.html" class="ttr-material-button"><span class="ttr-label">List View</span></a>
		                	</li>
		                </ul>
		            </li>
					<li>
						<a href="bookmark.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-bookmark-alt"></i></span>
		                	<span class="ttr-label">Bookmarks</span>
		                </a>
		            </li>
					<li>
						<a href="review.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-comments"></i></span>
		                	<span class="ttr-label">Review</span>Review
		                </a>
		            </li>
					<li>
						<a href="add-listing.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-layout-accordion-list"></i></span>
		                	<span class="ttr-label">Add listing</span>
		                </a>
		            </li>
					<li>
						<a href="#" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-user"></i></span>
		                	<span class="ttr-label">My Profile</span>
		                	<span class="ttr-arrow-icon"><i class="fa fa-angle-down"></i></span>
		                </a>
		                <ul>
		                	<li>
		                		<a href="user-profile.html" class="ttr-material-button"><span class="ttr-label">User Profile</span></a>
		                	</li>
		                	<li>
		                		<a href="teacher-profile.html" class="ttr-material-button"><span class="ttr-label">Teacher Profile</span></a>
		                	</li>
		                </ul>
		            </li>
		            <li class="ttr-seperate"></li>
				</ul>
				
			</nav>
			
		</div>
	</div>
	
	<div class="ttr-wrapper">
		<div class="container-fluid">
			<div class="db-breadcrumb">
				<h4 class="breadcrumb-title">Dashboard</h4>
				<ul class="db-breadcrumb-list">
					<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
					<li>Dashboard</li>
				</ul>
			</div>	
			
			<div class="row">
				<div class="col-md-6 col-lg-3 col-xl-3 col-sm-6 col-12">
					<div class="widget-card widget-bg1">					 
						<div class="wc-item">
							<h4 class="wc-title">
								Total Frofit
							</h4>
							<span class="wc-des">
								All Customs Value
							</span>
							<span class="wc-stats">
								$<span class="counter">18</span>M 
							</span>		
							<div class="progress wc-progress">
								 <div class="progress-bar" role="progressbar" style={{width: '78%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> 
							</div>
							<span class="wc-progress-bx">
								<span class="wc-change">
									Change
								</span>
								<span class="wc-number ml-auto">
									78%
								</span>
							</span>
						</div>				      
					</div>
				</div>
				<div class="col-md-6 col-lg-3 col-xl-3 col-sm-6 col-12">
					<div class="widget-card widget-bg2">					 
						<div class="wc-item">
							<h4 class="wc-title">
								 New Feedbacks
							</h4>
							<span class="wc-des">
								Customer Review
							</span>
							<span class="wc-stats counter">
								120 
							</span>		
							 <div class="progress wc-progress">
								<div class="progress-bar" role="progressbar" style={{width:' 88%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
							</div> 
							<span class="wc-progress-bx">
								<span class="wc-change">
									Change
								</span>
								<span class="wc-number ml-auto">
									88%
								</span>
							</span>
						</div>				      
					</div>
				</div>
				<div class="col-md-6 col-lg-3 col-xl-3 col-sm-6 col-12">
					<div class="widget-card widget-bg3">					 
						<div class="wc-item">
							<h4 class="wc-title">
								New Orders 
							</h4>
							<span class="wc-des">
								Fresh Order Amount 
							</span>
							<span class="wc-stats counter">
								772 
							</span>		
							 <div class="progress wc-progress">
								<div class="progress-bar" role="progressbar" style={{width:'65%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
							</div> 
							<span class="wc-progress-bx">
								<span class="wc-change">
									Change
								</span>
								<span class="wc-number ml-auto">
									65%
								</span>
							</span>
						</div>				      
					</div>
				</div>
				<div class="col-md-6 col-lg-3 col-xl-3 col-sm-6 col-12">
					<div class="widget-card widget-bg4">					 
						<div class="wc-item">
							<h4 class="wc-title">
								New Users 
							</h4>
							<span class="wc-des">
								Joined New User
							</span>
							<span class="wc-stats counter">
								350 
							</span>		
							<div class="progress wc-progress">
								<div class="progress-bar" role="progressbar" style={{width:'90%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
							</div> 
							<span class="wc-progress-bx">
								<span class="wc-change">
									Change
								</span>
								<span class="wc-number ml-auto">
									90%
								</span>
							</span>
						</div>				      
					</div>
				</div>
			</div>
			
			<div class="row">
				
				<div class="col-lg-8 m-b30">
					<div class="widget-box">
						<div class="wc-title">
							<h4>Your Profile Views</h4>
						</div>
						<div class="widget-inner">
							<canvas id="chart" width="100" height="45"></canvas>
						</div>
					</div>
				</div>
				
				<div class="col-lg-4 m-b30">
					<div class="widget-box">
						<div class="wc-title">
							<h4>Notifications</h4>
						</div>
						<div class="widget-inner">
							<div class="noti-box-list">
								<ul>
									<li>
										<span class="notification-icon dashbg-gray">
											<i class="fa fa-check"></i>
										</span>
										<span class="notification-text">
											<span>Sneha Jogi</span> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 02:14</span>
										</span>
									</li>
									<li>
										<span class="notification-icon dashbg-yellow">
											<i class="fa fa-shopping-cart"></i>
										</span>
										<span class="notification-text">
											<a href="#">Your order is placed</a> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 7 Min</span>
										</span>
									</li>
									<li>
										<span class="notification-icon dashbg-red">
											<i class="fa fa-bullhorn"></i>
										</span>
										<span class="notification-text">
											<span>Your item is shipped</span> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 2 May</span>
										</span>
									</li>
									<li>
										<span class="notification-icon dashbg-green">
											<i class="fa fa-comments-o"></i>
										</span>
										<span class="notification-text">
											<a href="#">Sneha Jogi</a> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 14 July</span>
										</span>
									</li>
									<li>
										<span class="notification-icon dashbg-primary">
											<i class="fa fa-file-word-o"></i>
										</span>
										<span class="notification-text">
											<span>Sneha Jogi</span> sent you a message.
										</span>
										<span class="notification-time">
											<a href="#" class="fa fa-close"></a>
											<span> 15 Min</span>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6 m-b30">
					<div class="widget-box">
						<div class="wc-title">
							<h4>New Users</h4>
						</div>
						<div class="widget-inner">
							<div class="new-user-list">
								<ul>
									<li>
										<span class="new-users-pic">
											<img src="assets/images/testimonials/pic1.jpg" alt=""/>
										</span>
										<span class="new-users-text">
											<a href="#" class="new-users-name">Anna Strong </a>
											<span class="new-users-info">Visual Designer,Google Inc </span>
										</span>
										<span class="new-users-btn">
											<a href="#" class="btn button-sm outline">Follow</a>
										</span>
									</li>
									<li>
										<span class="new-users-pic">
											<img src="assets/images/testimonials/pic2.jpg" alt=""/>
										</span>
										<span class="new-users-text">
											<a href="#" class="new-users-name"> Milano Esco </a>
											<span class="new-users-info">Product Designer, Apple Inc </span>
										</span>
										<span class="new-users-btn">
											<a href="#" class="btn button-sm outline">Follow</a>
										</span>
									</li>
									<li>
										<span class="new-users-pic">
											<img src="assets/images/testimonials/pic1.jpg" alt=""/>
										</span>
										<span class="new-users-text">
											<a href="#" class="new-users-name">Nick Bold  </a>
											<span class="new-users-info">Web Developer, Facebook Inc </span>
										</span>
										<span class="new-users-btn">
											<a href="#" class="btn button-sm outline">Follow</a>
										</span>
									</li>
									<li>
										<span class="new-users-pic">
											<img src="assets/images/testimonials/pic2.jpg" alt=""/>
										</span>
										<span class="new-users-text">
											<a href="#" class="new-users-name">Wiltor Delton </a>
											<span class="new-users-info">Project Manager, Amazon Inc </span>
										</span>
										<span class="new-users-btn">
											<a href="#" class="btn button-sm outline">Follow</a>
										</span>
									</li>
									<li>
										<span class="new-users-pic">
											<img src="assets/images/testimonials/pic3.jpg" alt=""/>
										</span>
										<span class="new-users-text">
											<a href="#" class="new-users-name">Nick Stone </a>
											<span class="new-users-info">Project Manager, Amazon Inc  </span>
										</span>
										<span class="new-users-btn">
											<a href="#" class="btn button-sm outline">Follow</a>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6 m-b30">
					<div class="widget-box">
						<div class="wc-title">
							<h4>Orders</h4>
						</div>
						<div class="widget-inner">
							<div class="orders-list">
								<ul>
									<li>
										<span class="orders-title">
											<a href="#" class="orders-title-name">Anna Strong </a>
											<span class="orders-info">Order #02357 | Date 12/08/2019</span>
										</span>
										<span class="orders-btn">
											<a href="#" class="btn button-sm red">Unpaid</a>
										</span>
									</li>
									<li>
										<span class="orders-title">
											<a href="#" class="orders-title-name">Revenue</a>
											<span class="orders-info">Order #02357 | Date 12/08/2019</span>
										</span>
										<span class="orders-btn">
											<a href="#" class="btn button-sm red">Unpaid</a>
										</span>
									</li>
									<li>
										<span class="orders-title">
											<a href="#" class="orders-title-name">Anna Strong </a>
											<span class="orders-info">Order #02357 | Date 12/08/2019</span>
										</span>
										<span class="orders-btn">
											<a href="#" class="btn button-sm green">Paid</a>
										</span>
									</li>
									<li>
										<span class="orders-title">
											<a href="#" class="orders-title-name">Revenue</a>
											<span class="orders-info">Order #02357 | Date 12/08/2019</span>
										</span>
										<span class="orders-btn">
											<a href="#" class="btn button-sm green">Paid</a>
										</span>
									</li>
									<li>
										<span class="orders-title">
											<a href="#" class="orders-title-name">Anna Strong </a>
											<span class="orders-info">Order #02357 | Date 12/08/2019</span>
										</span>
										<span class="orders-btn">
											<a href="#" class="btn button-sm green">Paid</a>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-12 m-b30">
					<div class="widget-box">
						<div class="wc-title">
							<h4>Basic Calendar</h4>
						</div>
						<div class="widget-inner">
							<div id="calendar"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
    


  )
}

export default Admin