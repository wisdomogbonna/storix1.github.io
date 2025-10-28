import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, ownerOnly = false }) {
  const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return <Navigate to="/login" replace />;
      if (ownerOnly && user.role !== "owner") return <Navigate to="/stories" replace />;

        return children;
        }