import React from 'react'

const Testimonial = () => {
  return (
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
  )
}

export default Testimonial