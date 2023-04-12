import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Course from "./Course";
import Userprofile from "./Userprofile";
const DashboardLayout = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div class={`ttr-pinned-sidebar ${isActive ? "ttr-opened-sidebar" : ""}`}>
        <Header setIsActive={setIsActive} isActive={isActive} />
        <Sidebar setIsActive={setIsActive} isActive={isActive} />
        {/* <Course /> */}
        {/* <Userprofile /> */}
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
