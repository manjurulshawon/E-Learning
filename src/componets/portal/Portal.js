import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const portalRoot = document.getElementById("modal");
  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
