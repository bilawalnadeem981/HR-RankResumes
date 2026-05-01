import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = () => {
  const { isAdmin, loading } = useAuth();

  if (loading) return null;

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
