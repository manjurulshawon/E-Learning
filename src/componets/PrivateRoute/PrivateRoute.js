import React from "react";
import { Navigate, Outlet, Route ,redirect } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useFirebase()
    console.log("user",user);
    if (Object.keys(user).length > 0) {
        
 
    
            <Navigate to="/login" replace />
           }
 
//   return Object.keys(user).length > 0 ? <> <Outlet />  </> :  <Navigate to="/login" replace />
return (
    <Route element={<Outlet />}>
      {/* Render the children components */}
      {children}
    </Route>
  );
};

export default PrivateRoute;
