"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineChevronDown,
} from "react-icons/hi";
import useAuthStore from "@/lib/store/authStore";
import SignOutButton from "@/features/Auth/components/SignOutButton";

export default function UserDropdown() {
	const user = useAuthStore((state) => state.user);

	const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

	if (!user) {
		return null;
	}


  const userInitial = (user?.name || user?.email)?.charAt(0).toUpperCase();
  const userName = user?.name || user?.email;
  const userRole = user?.role || "Unspecified";

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 text-sm rounded-lg p-2 transition-colors hover:bg-[var(--hover)]"
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[var(--primary)]"
        >
          <span className="text-sm font-medium text-[var(--primary-contrast)]">
            {userInitial}
          </span>
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-medium text-[var(--text)]">
            {userName}
          </span>
          <span className="capitalize text-xs text-[var(--text-muted)]">
            {userRole}
          </span>
        </div>
        <HiOutlineChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          } text-[var(--text-muted)]`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg border py-2 z-50 bg-[var(--surface)] border-[var(--border)] shadow-[var(--shadow-md)]"
        >
          {/* User Info Section */}
          <div className="px-4 py-3 border-b border-[var(--border)]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--primary)]">
                <span className="font-medium text-[var(--primary-contrast)]">
                  {userInitial}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text)]">
                  {userName}
                </p>
                <p className="text-xs capitalize text-[var(--text-muted)]">
                  {userRole}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            <Link
              href="/admin/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center w-full text-left px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)] transition-colors"
            >
              <HiOutlineUser className="w-4 h-4 mr-3" />
              View Profile
            </Link>

            <Link
              href="/admin/settings/account"
              onClick={() => setIsOpen(false)}
              className="flex items-center w-full text-left px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)] transition-colors"
            >
              <HiOutlineCog className="w-4 h-4 mr-3" />
              Account Settings
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t my-1 border-[var(--border)]"></div>

          {/* Sign Out */}
          <div className="py-1">
            <div
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-2 text-sm cursor-pointer text-[var(--error)] hover:bg-red-500/10 transition-colors"
            >
              <SignOutButton
                className="w-full justify-start"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
