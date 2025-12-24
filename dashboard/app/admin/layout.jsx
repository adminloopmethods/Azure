"use client";
import ProtectedRoute from "@/features/Auth/components/ProtectedRoute";
import React from "react";

function AdminLayout({ children }) {
  return (
    <ProtectedRoute>
      <div>{children}</div>
    </ProtectedRoute>
  );
}

export default AdminLayout;
