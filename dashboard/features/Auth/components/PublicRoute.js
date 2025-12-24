"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/lib/store/authStore";
import { Loading } from "@/components/ui";

function PublicRoute({ children }) {
  const router = useRouter();
  const { isAuthenticated, initializeAuth } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await initializeAuth();

      // if already logged in, redirect to admin
      if (res?.success) {
        router.push("/admin");
      }

      setLoading(false);
    };

    checkAuth();
  }, [initializeAuth, router]);

  if (loading) return <Loading />;

  // if user is not authenticated, show page
  return !isAuthenticated ? children : null;
}

export default PublicRoute;
