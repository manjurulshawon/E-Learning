import React from 'react'

const Content = () => {
  return (
    <div classNameName="account-form">
		<div className="account-head" style={{backgroundImage:'url(assets/images/background/bg2.jpg)'}}>
			<a href="index.html"><img src="assets/images/logo-white-2.png" alt=""/></a>
		</div>
		<div className="account-form-inner">
			<div className="account-container">
				<div className="heading-bx left">
					<h2 className="title-head">Sign Up <span>Now</span></h2>
					<p>Login Your Account <a href="login.html">Click here</a></p>
				</div>	
				<form className="contact-bx">
					<div className="row placeani">
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group">
									<label>Your Name</label>
									<input name="dzName" type="text" required="" className="form-control"/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group">
									<label>Your Email Address</label>
									<input name="dzName" type="email" required="" className="form-control"/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group"> 
									<label>Your Password</label>
									<input name="dzEmail" type="password" className="form-control" required=""/>
								</div>
							</div>
						</div>
						<div className="col-lg-12 m-b30">
							<button name="submit" type="submit" value="Submit" className="btn button-md">Sign Up</button>
						</div>
						<div className="col-lg-12">
							<h6>Sign Up with Social media</h6>
							<div className="d-flex">
								<a className="btn flex-fill m-r5 facebook" href="#"><i className="fa fa-facebook"></i>Facebook</a>
								<a className="btn flex-fill m-l5 google-plus" href="#"><i className="fa fa-google-plus"></i>Google Plus</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Content