import React from "react";
import { VscListSelection } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = ({ isActive, setIsActive }) => {
  const {logout} = useFirebase()
  return (
    <header class="ttr-header">
      <div class="ttr-header-wrapper">
        <div
          class="ttr-toggle-sidebar ttr-material-button  d-flex align-items-center justify-content-center"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? <VscListSelection size={30} /> : <RxCross2 size={30} />}
        </div>

        <div class="ttr-logo-box">
          <div>
            <Link to="/" class="ttr-logo">
              <img
                class="ttr-logo-mobile"
                alt=""
                src="assets/images/logo-mobile.png"
                width="30"
                height="30"
              />
              <img
                class="ttr-logo-desktop"
                alt=""
                src="assets/images/logo-white.png"
                width="160"
                height="27"
              />
            </Link>
          </div>
        </div>

        <div class="ttr-header-menu">
          <ul class="ttr-header-navigation">
            <li>
              <Link
                to="/"
                class="ttr-material-button ttr-submenu-toggle"
              >
                HOME
              </Link>
            </li>
            {/* <li>
              <a href="#" class="ttr-material-button ttr-submenu-toggle">
                QUICK MENU <i class="fa fa-angle-down"></i>
              </a>
              <div class="ttr-header-submenu">
                <ul>
                  <li>
                    <a href="../courses.html">Our Courses</a>
                  </li>
                  <li>
                    <a href="../event.html">New Event</a>
                  </li>
                  <li>
                    <a href="../membership.html">Membership</a>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
        <div class="ttr-header-right ttr-with-seperator">
          <ul class="ttr-header-navigation">
            <li>
              <Link onClick={logout}  class="ttr-material-button ttr-search-toggle">
                Logout
              </Link>
            </li>
            {/* <li>
              <a href="#" class="ttr-material-button ttr-submenu-toggle">
                <i class="fa fa-bell"></i>
              </a>
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
            </li> */}
            {/* <li>
              <a href="#" class="ttr-material-button ttr-submenu-toggle">
                <span class="ttr-user-avatar">
                  <img
                    alt=""
                    src="assets/images/testimonials/pic3.jpg"
                    width="32"
                    height="32"
                  />
                </span>
              </a>
              <div class="ttr-header-submenu">
                <ul>
                  <li>
                    <a href="user-profile.html">My profile</a>
                  </li>
                  <li>
                    <a href="list-view-calendar.html">Activity</a>
                  </li>
                  <li>
                    <a href="mailbox.html">Messages</a>
                  </li>
                  <li>
                    <a href="../login.html">Logout</a>
                  </li>
                </ul>
              </div>
            </li> */}
           
          </ul>
        </div>

        <div class="ttr-search-bar">
          <form class="ttr-search-form">
            <div class="ttr-search-input-wrapper">
              <input
                type="text"
                name="qq"
                placeholder="search something..."
                class="ttr-search-input"
              />
              <button type="submit" name="search" class="ttr-search-submit">
                <i class="ti-arrow-right"></i>
              </button>
            </div>
            <span class="ttr-search-close ttr-search-toggle">
              <i class="ti-close"></i>
            </span>
          </form>
        </div>

        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
