import React from "react";

const DashboardContentWrapper = ({ children }) => {
  return (
    <div>
      <main className="ttr-wrapper">
        <div className="container-fluid">
          <div className="db-breadcrumb">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardContentWrapper;
