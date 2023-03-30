import React from 'react'

const Content = () => {
  return (
    <div className="page-content bg-white">
    
    <div className="page-banner ovbl-dark" style={{backgroundImage:'url(assets/images/banner/banner1.jpg)'}}>
        <div className="container">
            <div className="page-banner-entry">
                <h1 className="text-white">Profile</h1>
             </div>
        </div>
    </div>
   
    <div className="breadcrumb-row">
        <div className="container">
            <ul className="list-inline">
                <li><a href="#">Home</a></li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
    
    <div className="content-block">
        
        <div className="section-area section-sp1">
            <div className="container">
                 <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
                        <div className="profile-bx text-center">
                            <div className="user-profile-thumb">
                                <img src="assets/images/profile/pic1.jpg" alt=""/>
                            </div>
                            <div className="profile-info">
                                <h4>Mark Andre</h4>
                                <span>mark.example@info.com</span>
                            </div>
                            <div className="profile-social">
                                <ul className="list-inline m-a0">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                            <div className="profile-tabnav">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#courses"><i className="ti-book"></i>Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#quiz-results"><i className="ti-bookmark-alt"></i>Quiz Results </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#edit-profile"><i className="ti-pencil-alt"></i>Edit Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#change-password"><i className="ti-lock"></i>Change Password</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 m-b30">
                        <div className="profile-content-bx">
                            <div className="tab-content">
                                <div className="tab-pane active" id="courses">
                                    <div className="profile-head">
                                        <h3>My Courses</h3>
                                        <div className="feature-filters style1 ml-auto">
                                            <ul className="filters" data-toggle="buttons">
                                                <li data-filter="" className="btn active">
                                                    <input type="radio"/>
                                                    <a href="#"><span>All</span></a> 
                                                </li>
                                                <li data-filter="publish" className="btn">
                                                    <input type="radio"/>
                                                    <a href="#"><span>Publish</span></a> 
                                                </li>
                                                <li data-filter="pending" className="btn">
                                                    <input type="radio"/>
                                                    <a href="#"><span>Pending</span></a> 
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-filter">
                                        <div className="clearfix">
                                            <ul id="masonry" className="ttr-gallery-listing magnific-image row">
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 publish">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic1.jpg" alt=""/>
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
                                                </li>
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 pending">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic2.jpg" alt=""/>
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
                                                </li>
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 publish">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic3.jpg" alt=""/>
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
                                                </li>
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 pending">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic4.jpg" alt=""/>
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
                                                </li>
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 publish">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic5.jpg" alt=""/>
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
                                                </li>
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 pending">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic6.jpg" alt=""/>
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
                                                </li>
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 publish">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic7.jpg" alt=""/>
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
                                                </li>
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 book">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic8.jpg" alt=""/>
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
                                                </li>
                                                <li className="action-card col-xl-4 col-lg-6 col-md-12 col-sm-6 publish">
                                                    <div className="cours-bx">
                                                        <div className="action-box">
                                                            <img src="assets/images/courses/pic9.jpg" alt=""/>
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
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="quiz-results">
                                    <div className="profile-head">
                                        <h3>Quiz Results</h3>
                                    </div>
                                    <div className="courses-filter">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <ul className="course-features">
                                                    <li><i className="ti-book"></i> <span className="label">Lectures</span> <span className="value">8</span></li>
                                                    <li><i className="ti-help-alt"></i> <span className="label">Quizzes</span> <span className="value">1</span></li>
                                                    <li><i className="ti-time"></i> <span className="label">Duration</span> <span className="value">60 hours</span></li>
                                                    <li><i className="ti-stats-up"></i> <span className="label">Skill level</span> <span className="value">Beginner</span></li>
                                                    <li><i className="ti-smallcap"></i> <span className="label">Language</span> <span className="value">English</span></li>
                                                    <li><i className="ti-user"></i> <span className="label">Students</span> <span className="value">32</span></li>
                                                    <li><i className="ti-check-box"></i> <span className="label">Assessments</span> <span className="value">Yes</span></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <ul className="course-features">
                                                    <li><i className="ti-book"></i> <span className="label">Lectures</span> <span className="value">8</span></li>
                                                    <li><i className="ti-help-alt"></i> <span className="label">Quizzes</span> <span className="value">1</span></li>
                                                    <li><i className="ti-time"></i> <span className="label">Duration</span> <span className="value">60 hours</span></li>
                                                    <li><i className="ti-stats-up"></i> <span className="label">Skill level</span> <span className="value">Beginner</span></li>
                                                    <li><i className="ti-smallcap"></i> <span className="label">Language</span> <span className="value">English</span></li>
                                                    <li><i className="ti-user"></i> <span className="label">Students</span> <span className="value">32</span></li>
                                                    <li><i className="ti-check-box"></i> <span className="label">Assessments</span> <span className="value">Yes</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="edit-profile">
                                    <div className="profile-head">
                                        <h3>Edit Profile</h3>
                                    </div>
                                    <form className="edit-profile">
                                        <div className="">
                                            <div className="form-group row">
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
                                                    <h3>1. Personal Details</h3>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Full Name</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="Mark Andre"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Occupation</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="CTO"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Company Name</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="EduChamp"/>
                                                    <span className="help">If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Phone No.</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="+120 012345 6789"/>
                                                </div>
                                            </div>
                                            
                                            <div className="seperator"></div>
                                            
                                            <div className="form-group row">
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
                                                    <h3>2. Address</h3>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Address</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="5-S2-20 Dummy City, UK"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">City</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="US"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">State</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="California"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Postcode</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="000702"/>
                                                </div>
                                            </div>

                                            <div className="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x"></div>

                                            <div className="form-group row">
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
                                                    <h3 className="m-form__section">3. Social Links</h3>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Linkedin</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="www.linkedin.com"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Facebook</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="www.facebook.com"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Twitter</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="www.twitter.com"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">Instagram</label>
                                                <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                    <input className="form-control" type="text" value="www.instagram.com"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <div className="row">
                                                    <div className="col-12 col-sm-3 col-md-3 col-lg-2">
                                                    </div>
                                                    <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                                        <button type="reset" className="btn">Save changes</button>
                                                        <button type="reset" className="btn-secondry">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="change-password">
                                    <div className="profile-head">
                                        <h3>Change Password</h3>
                                    </div>
                                    <form className="edit-profile">
                                        <div className="">
                                            <div className="form-group row">
                                                <div className="col-12 col-sm-8 col-md-8 col-lg-9 ml-auto">
                                                    <h3>Password</h3>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">Current Password</label>
                                                <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                                                    <input className="form-control" type="password" value=""/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">New Password</label>
                                                <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                                                    <input className="form-control" type="password" value=""/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">Re Type New Password</label>
                                                <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                                                    <input className="form-control" type="password" value=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
                                            </div>
                                            <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                                                <button type="reset" className="btn">Save changes</button>
                                                <button type="reset" className="btn-secondry">Cancel</button>
                                            </div>
                                        </div>
                                            
                                    </form>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default Content