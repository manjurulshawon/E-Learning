import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setIsActive, isActive }) => {
  return (
    <div class="ttr-sidebar">
      <div class="ttr-sidebar-wrapper content-scroll">
        <div class="ttr-sidebar-logo">
          <a href="#">
            <img alt="" src="assets/images/logo.png" width="122" height="27" />
          </a>
          <div
            class="ttr-sidebar-toggle-button"
            onClick={() => setIsActive(!isActive)}
          >
            <i class="ti-arrow-left"></i>
          </div>
        </div>

        <nav class="ttr-sidebar-navi">
          <ul>
            <li>
              <a href="index.html" class="ttr-material-button">
                <span class="ttr-icon">
                  <i class="ti-home"></i>
                </span>
                <span class="ttr-label">Dashborad</span>
              </a>
            </li>
            <li>
              <Link to="/dashboard/course" class="ttr-material-button">
                <span class="ttr-icon">
                  <i class="ti-book"></i>
                </span>
                <span class="ttr-label">Courses</span>
              </Link>
            </li>

            <li>
              <a href="add-listing.html" class="ttr-material-button">
                <span class="ttr-icon">
                  <i class="ti-layout-accordion-list"></i>
                </span>
                <span class="ttr-label">Add listing</span>
              </a>
            </li>
            <li>
              <Link to="/dashboard/MyProfile" class="ttr-material-button">
                <span class="ttr-icon">
                  <i class="ti-user"></i>
                </span>
                <span class="ttr-label">My Profile</span>
                <span class="ttr-arrow-icon">
                  <i class="fa fa-angle-down"></i>
                </span>
              </Link>
              <ul>
                <li>
                  <a href="user-profile.html" class="ttr-material-button">
                    <span class="ttr-label">User Profile</span>
                  </a>
                </li>
                <li>
                  <a href="teacher-profile.html" class="ttr-material-button">
                    <span class="ttr-label">Teacher Profile</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="ttr-seperate"></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
