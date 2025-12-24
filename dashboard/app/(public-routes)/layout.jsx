"use client"
import PublicRoute from "@/features/Auth/components/PublicRoute";
import React from "react";

function PublicLayout({ children }) {
  return <PublicRoute>{children}</PublicRoute>;
}

export default PublicLayout;
