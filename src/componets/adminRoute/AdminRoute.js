import React from "react";
import {
  Navigate,
  Outlet,
  Route,
  redirect,
  useLocation,
} from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AdminRoute = ({ children }) => {
  const { user, admin, isLoading } = useFirebase();
  const history = useLocation();
  console.log("is Loading", isLoading);
  console.log("admin", admin);
  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!admin) {
    toast.warning("Unauthorized User");
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" state={{ from: history.pathname }} />;
  }
  //   return Object.keys(user).length > 0 ? <> <Outlet />  </> :  <Navigate to="/login" replace />
  return children;
};

export default AdminRoute;
