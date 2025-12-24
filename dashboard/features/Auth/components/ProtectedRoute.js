"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/lib/store/authStore";
import { Loading } from "@/components/ui";

function ProtectedRoute({ children }) {
  const router = useRouter();
  const { isAuthenticated, initializeAuth } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await initializeAuth();
      if (!res.success) {
        router.push("/login");
      }
      setLoading(false);
    };
    checkAuth();
  }, [initializeAuth, router]);

  if (loading) return <Loading/>;

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
