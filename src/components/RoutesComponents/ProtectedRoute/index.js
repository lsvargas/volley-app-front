import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from '../../../context/authContext';


function ProtectedRoute({ redirectPath='/login' }) {
  const context = useContext(AuthContext);

  console.log(context)
  if (!context?.user) {
    return <Navigate to={redirectPath} replace />;
  };

  return <Outlet />;
};

export default ProtectedRoute;
