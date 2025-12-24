"use client";

import { HiOutlineLogout } from "react-icons/hi";
import useAuthStore from "@/lib/store/authStore";
import { useRouter } from "next/navigation";

export default function SignOutButton({ className = "", showIcon = true }) {

	const logout = useAuthStore((state) => state.logout);
	const router = useRouter();

  const handleSignOut = () => {
    logout();
		router.push("/login")
  };

  return (
    <button
      onClick={handleSignOut}
      className={`flex items-center space-x-2 text-sm font-medium transition-colors ${className}`}
    >
      {showIcon && <HiOutlineLogout className="w-4 h-4" />}
      <span>Sign out</span>
    </button>
  );
}
