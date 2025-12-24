"use client";
import { useEffect } from "react";
import useUserStore from "@/lib/store/userStore";
import DashboardHeader from "../../../components/layout/DashboardHeader";
import InviteContainer from "./components/inviteUser/InviteContainer";
import UserTable from "./components/UserTable";
import UserFilters from "./components/UserFilters";
import Pagination from "./components/Pagination";
import UserStats from "./components/UserStats";
import { HiOutlineUsers, HiOutlineRefresh } from "react-icons/hi";

export default function UsersPage() {

  // Zustand store
  const {
    users,
    pagination,
    stats,
    loading,
    error,
    filters,
    fetchUsers,
    fetchStats,
    updateFilters,
    changePage,
    refreshData,
    clearError,
    updateUser,
    deleteUser,
  } = useUserStore();

  // Initial data fetch
  useEffect(() => {
    fetchUsers();
    fetchStats();
  }, []);

  // Auto-refetch when filters change
  useEffect(() => {
    if (filters.page > 1 || filters.search || filters.role || filters.status) {
      fetchUsers();
    }
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    updateFilters(newFilters);
  };

  // Handle pagination
  const handlePageChange = (page) => {
    changePage(page);
  };

  // Handle refresh
  const handleRefresh = async () => {
    await refreshData();
  };

  // Handle user updates
  const handleUserUpdate = (updatedUser) => {
    // The store handles this automatically through updateUser action
    // This is just for compatibility with existing UserTable component
    updateUser(updatedUser.id, updatedUser);
  };

  // Handle user deletion
  const handleUserDelete = (deletedUserId) => {
    // The store handles this automatically through deleteUser action
    // This is just for compatibility with existing UserTable component
    deleteUser(deletedUserId);
  };

  // Clear error when component unmounts or when needed
  useEffect(() => {
    return () => {
      clearError();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: "var(--primary)/10" }}
              >
                <HiOutlineUsers
                  className="w-6 h-6"
                  style={{ color: "var(--primary)" }}
                />
              </div>
              <div>
                <h1
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "var(--text)" }}
                >
                  Users Management
                </h1>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Manage your team members and their permissions
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors disabled:opacity-50"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <HiOutlineRefresh
                  className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
                />
                <span>Refresh</span>
              </button>

              <InviteContainer />
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div
            className="mb-6 p-4 rounded-lg border"
            style={{
              backgroundColor: "var(--error)/10",
              borderColor: "var(--error)/20",
              color: "var(--error)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-medium">Error:</span>
                <span>{error}</span>
              </div>
              <button
                onClick={clearError}
                className="text-sm underline hover:no-underline"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* User Statistics */}
        {stats && (
          <div className="mb-6 md:mb-8">
            <UserStats stats={stats} />
          </div>
        )}

        {/* Filters */}
        <div className="mb-6">
          <UserFilters filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Users Content */}
        <div
          className="rounded-lg border overflow-hidden bg-[var(--surface)]/50"
          style={{
            borderColor: "var(--border)",
          }}
        >
          {loading && users?.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div
                  className="inline-block w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin mb-3"
                  style={{ color: "var(--primary)" }}
                ></div>
                <div style={{ color: "var(--text-muted)" }}>
                  Loading users...
                </div>
              </div>
            </div>
          ) : users?.length === 0 ? (
            <div className="text-center py-12">
              <HiOutlineUsers
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "var(--text-muted)" }}
              />
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "var(--text)" }}
              >
                No users found
              </h3>
              <p style={{ color: "var(--text-muted)" }}>
                {filters.search || filters.role || filters.status
                  ? "No users match your current filters."
                  : "Get started by inviting your first team member."}
              </p>
            </div>
          ) : (
            <>
              <UserTable
                users={users}
                onUserUpdate={handleUserUpdate}
                onUserDelete={handleUserDelete}
                loading={loading}
              />

              {/* Pagination */}
              {pagination?.totalPages > 1 && (
                <div
                  className="px-6 py-4 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Info */}
        <div
          className="mt-6 text-center text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          {users.length > 0 && (
            <p>
              Showing {(pagination.currentPage - 1) * filters.limit + 1} to{" "}
              {Math.min(
                pagination.currentPage * filters.limit,
                pagination.totalPages
              )}{" "}
              of {pagination.totalUsers} users
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
