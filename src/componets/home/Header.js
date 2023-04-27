import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header rs-nav header-transparent">
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between"></div>
        </div>
      </div>
      <div className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container clearfix">
            {/* <!-- Header Logo ==== --> */}
            <div className="menu-logo">
              <NavLink to={"/"} style={{textDecoration: "none"}}>
                {/* <img src="assets/images/logo-white.png" alt="" /> */}
              <p className="text-white" style={{fontSize: 22}}>
              E-Learning
                </p>
              </NavLink>
            </div>
            {user?.displayName && (
              <div class="secondary-menu">
                <div class="secondary-inner">
                  <ul>
                    <li className="text-white">{user.displayName}</li>
                  </ul>
                </div>
              </div>
            )}
            <div
              className="menu-links navbar-collapse collapse justify-content-start"
              id="menuDropdown"
            >
              <div className="menu-logo">
                <NavLink to={"/"}>
                  <img src="assets/images/logo.png" alt="" />
                </NavLink>
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

                {user?.email ? (
                  <li className="nav-dashboard">
                    <NavLink>
                      Dashboard <i className="fa fa-chevron-down"></i>
                    </NavLink>
                    <ul className="sub-menu">
                      {/* <li>
                        <NavLink to={"/dashboard"}>Admin</NavLink>
                      </li> */}
                      <li>
                        <NavLink to={"/dashboard"}>My Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink onClick={logout}>Logout</NavLink>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li>
                    <NavLink to={"/login"}>Login/Register</NavLink>
                  </li>
                )}
              </ul>
            </div>
            {/* <!-- Navigation Menu END ==== --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
