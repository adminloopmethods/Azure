"use client";
import { useState } from "react";
import useUserStore from "@/lib/store/userStore";
import {
  HiOutlineDotsVertical,
  HiOutlineTrash,
  HiOutlineBan,
  HiOutlineCheck,
} from "react-icons/hi";

export default function UserTable({
  users,
  onUserUpdate,
  onUserDelete,
  loading,
}) {
  const { updateUser, deleteUser, toggleUserStatus } = useUserStore();
  const [actionLoading, setActionLoading] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleToggleStatus = async (userId) => {
    setActionLoading(userId);
    try {
      const result = await toggleUserStatus(userId);
      if (result.success) {
        // Store automatically updates the UI
        onUserUpdate?.(result.data.user);
				return
      } else {
        alert(result.error || "Failed to update user status");
      }
    } catch (error) {
      console.error("Error toggling user status:", error);
      alert("Failed to update user status");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (
      !confirm(
        "Are you sure you want to delete this user? This action cannot be undone."
      )
    )
      return;

    setActionLoading(userId);
    try {
      const result = await deleteUser(userId);
      if (result.success) {
        // Store automatically updates the UI and handles pagination
        onUserDelete?.(userId);
      } else {
        alert(result.error || "Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    } finally {
      setActionLoading(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "ADMIN":
        return {
          bg: "var(--error)/10",
          text: "var(--error)",
          border: "var(--error)/20",
        };
      case "EDITOR":
        return {
          bg: "var(--warning)/10",
          text: "var(--warning)",
          border: "var(--warning)/20",
        };
      case "VIEWER":
        return {
          bg: "var(--info)/10",
          text: "var(--info)",
          border: "var(--info)/20",
        };
      default:
        return {
          bg: "var(--primary)/10",
          text: "var(--primary)",
          border: "var(--primary)/20",
        };
    }
  };

  const getStatusBadgeColor = (isActive) => {
    return isActive
      ? {
          bg: "var(--success)/10",
          text: "var(--success)",
          border: "var(--success)/20",
        }
      : {
          bg: "var(--text-muted)/10",
          text: "var(--text-muted)",
          border: "var(--text-muted)/20",
        };
  };

  // Close dropdown when clicking outside
  const handleDropdownToggle = (userId) => {
    setDropdownOpen(dropdownOpen === userId ? null : userId);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr style={{ borderBottom: `1px solid var(--border)` }}>
            <th
              className="text-left p-4 font-medium text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              User
            </th>
            <th
              className="text-left p-4 font-medium text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Role
            </th>
            <th
              className="text-left p-4 font-medium text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Status
            </th>
            <th
              className="text-left p-4 font-medium text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Joined
            </th>
            <th
              className="text-center p-4 font-medium text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const roleColors = getRoleBadgeColor(user?.role);
            const statusColors = getStatusBadgeColor(user?.isActive);
            const isCurrentUserActionLoading = actionLoading === user.id;

            return (
              <tr
                key={user?.id}
                className="hover:bg-[var(--hover)] transition-colors"
                style={{
                  borderBottom:
                    index < users.length - 1
                      ? `1px solid var(--border)`
                      : "none",
                }}
              >
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-white text-sm"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      {user?.name?.charAt(0)?.toUpperCase() ||
                        user?.email?.charAt(0)?.toUpperCase() ||
                        "?"}
                    </div>
                    <div>
                      <div
                        className="font-medium"
                        style={{ color: "var(--text)" }}
                      >
                        {user?.name || "No Name"}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {user?.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className="px-2 py-1 text-xs font-medium rounded-full border"
                    style={{
                      backgroundColor: roleColors.bg,
                      color: roleColors.text,
                      borderColor: roleColors.border,
                    }}
                  >
                    {user?.role}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="px-2 py-1 text-xs font-medium rounded-full border"
                    style={{
                      backgroundColor: statusColors.bg,
                      color: statusColors.text,
                      borderColor: statusColors.border,
                    }}
                  >
                    {user?.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {formatDate(user?.createdAt)}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center space-x-2">
                    {/* Toggle Status Button */}
                    <button
                      onClick={() => handleToggleStatus(user.id)}
                      disabled={isCurrentUserActionLoading || loading}
                      className="flex items-center space-x-1 px-3 py-1 text-xs rounded-md border transition-colors disabled:opacity-50"
                      style={{
                        borderColor: user.isActive
                          ? "var(--warning)/50"
                          : "var(--success)/50",
                        backgroundColor: user.isActive
                          ? "var(--warning)/10"
                          : "var(--success)/10",
                        color: user.isActive
                          ? "var(--warning)"
                          : "var(--success)",
                      }}
                    >
                      {isCurrentUserActionLoading ? (
                        <div
                          className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"
                        />
                      ) : user.isActive ? (
                        <HiOutlineBan className="w-3 h-3" />
                      ) : (
                        <HiOutlineCheck className="w-3 h-3" />
                      )}
                      <span>
                        {isCurrentUserActionLoading
                          ? "Loading..."
                          : user.isActive
                          ? "Deactivate"
                          : "Activate"}
                      </span>
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      disabled={isCurrentUserActionLoading || loading}
                      className="flex items-center space-x-1 px-3 py-1 text-xs rounded-md border transition-colors disabled:opacity-50"
                      style={{
                        borderColor: "var(--error)/50",
                        backgroundColor: "var(--error)/10",
                        color: "var(--error)",
                      }}
                    >
                      {isCurrentUserActionLoading ? (
                        <div
                          className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"
                        />
                      ) : (
                        <HiOutlineTrash className="w-3 h-3" />
                      )}
                      <span>
                        {isCurrentUserActionLoading ? "Deleting..." : "Delete"}
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Loading Overlay */}
      {loading && users.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div
              className="inline-block w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin mb-3"
              style={{ color: "var(--primary)" }}
            />
            <div style={{ color: "var(--text-muted)" }}>Loading users...</div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && users.length === 0 && (
        <div className="text-center py-12">
          <div style={{ color: "var(--text-muted)" }}>No users found</div>
        </div>
      )}
    </div>
  );
}
