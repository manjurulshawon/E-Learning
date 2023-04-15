import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Course from "./Course";
import Userprofile from "./Userprofile";
import Coursefrom from "./Coursefrom";
const DashboardLayout = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div
        className={`ttr-pinned-sidebar ${isActive ? "ttr-opened-sidebar" : ""}`}
        style={{ position: "relative" }}
      >
        <Header setIsActive={setIsActive} isActive={isActive} />
        <Sidebar setIsActive={setIsActive} isActive={isActive} />

        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
