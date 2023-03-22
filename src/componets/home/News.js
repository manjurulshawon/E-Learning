import React from 'react'

const News = () => {
  return (
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
  )
}

export default News