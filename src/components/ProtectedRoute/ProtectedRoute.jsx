import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: 0,
    refetchOnMount: true,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-zinc-50 font-iransans">
        <p className="text-lg font-medium text-zinc-600 animate-pulse">
          در حال بررسی دسترسی...
        </p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const roleRedirects = {
      admin: "/admin-panel",
      teacher: "/teacher-panel",
      user: "/user-panel/dashboard",
    };
    return <Navigate to={roleRedirects[user.role] ?? "/"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
