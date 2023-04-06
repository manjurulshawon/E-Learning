import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
const {user,logout} = useAuth()
  
  return (
    <header className="header rs-nav header-transparent">
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between">
            {/* <div className="topbar-left">
              <ul>
                <li>
                  <a href="faq-1.html">
                    <i className="fa fa-question-circle"></i>Ask a Question
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o"></i>Support@website.com
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div className="topbar-right">
              <ul>
                <li>
                  <select className="header-lang-bx">
                    <option data-icon="flag flag-uk">English UK</option>
                    <option data-icon="flag flag-us">English US</option>
                  </select>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container clearfix">
            {/* <!-- Header Logo ==== --> */}
            <div className="menu-logo">
              <a href="index.html">
                <img src="assets/images/logo-white.png" alt="" />
              </a>
            </div>
            {/* <!-- Mobile Nav Button ==== --> */}
            {/* <button
              className="navbar-toggler collapsed menuicon justify-content-end"
              type="button"
              data-toggle="collapse"
              data-target="#menuDropdown"
              aria-controls="menuDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button> */}
            {/* <!-- Author Nav ==== --> */}
            {/* <div className="secondary-menu">
              <div className="secondary-inner">
                <ul>
                  <li>
                    <a href="#" className="btn-link">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-link">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                 
                  <li className="search-btn">
                    <button
                      id="quik-search-btn"
                      type="button"
                      className="btn-link"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <!-- Search Box ==== --> */}
            {/* <div className="nav-search-bar">
              <form action="#">
                <input
                  name="search"
                  type="text"
                  className="form-control"
                  placeholder="Type to search"
                />
                <span>
                  <i className="ti-search"></i>
                </span>
              </form>
              <span id="search-remove">
                <i className="ti-close"></i>
              </span>
            </div> */}
            {/* <!-- Navigation Menu ==== --> */}
            <div
              className="menu-links navbar-collapse collapse justify-content-start"
              id="menuDropdown"
            >
              <div className="menu-logo">
                <a href="index.html">
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </div>
              <ul className="nav navbar-nav">
                <li className="">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="">
                  <NavLink to={"/courses"}>Our Courses</NavLink>
                </li>
                <li className="">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                {/* <li className="">
							<NavLink to={"/blog"}>Blog</NavLink>
							</li> */}
                <li className="">
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>

                {user?.email ? 
                <li className="nav-dashboard">
                  <a href="#">
                    Dashboard <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="admin/index.html">Admin</a>
                    </li>
                    <li>
                      <a href="admin/add-listing.html">My Dashboard</a>
                    </li>
                    <li>
                      <a onClick={logout}>Logout</a>
                    </li>
                  </ul>
                </li>
                : <li>
                <a href="/login">Login/Register</a>
              </li>
                }
                
              </ul>
              {/* <div className="nav-social-link">
                <li>
                  <a href="/login">Login/Register</a>
                </li>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div> */}
            </div>
            {/* <!-- Navigation Menu END ==== --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
