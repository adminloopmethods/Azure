import { create } from "zustand";
import { get as httpGet, post, patch, put, del } from "../api/client.js";
import { API_ENDPOINTS } from "../api/endpoints.js";

const useUserStore = create((set, get) => ({
  // State
  users: [],
  pagination: {},
  stats: null,
  loading: false,
  error: null,
  filters: {
    page: 1,
    limit: 10,
    search: "",
    role: "",
    status: "",
  },

  // Actions
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setFilters: (filters) => set({ filters }),
  clearError: () => set({ error: null }),

  // Fetch all users
  fetchUsers: async (customFilters = null) => {
    const currentFilters = customFilters || get().filters;
    set({ loading: true, error: null });

    try {
      const queryParams = new URLSearchParams();
      if (currentFilters.page) queryParams.append("page", currentFilters.page);
      if (currentFilters.limit) queryParams.append("limit", currentFilters.limit);
      if (currentFilters.search) queryParams.append("search", currentFilters.search);
      if (currentFilters.role) queryParams.append("role", currentFilters.role);
      if (currentFilters.status) queryParams.append("status", currentFilters.status);

      const response = await httpGet(
        `${API_ENDPOINTS.USERS.LIST}?${queryParams.toString()}`
      );

      if (response.success) {
        set({
          users: response.data.users,
          pagination: response.data.pagination,
          loading: false,
        });
        return { success: true };
      } else {
        set({ 
          error: "Failed to fetch users",
          loading: false 
        });
        return { success: false, error: "Failed to fetch users" };
      }
    } catch (err) {
      const errorMessage = err.message || "Failed to fetch users";
      set({ 
        error: errorMessage,
        loading: false 
      });
      return { success: false, error: errorMessage };
    }
  },

  // Fetch user statistics
  fetchStats: async () => {
    try {
      const response = await httpGet("/users/stats");
      if (response.success) {
        set({ stats: response.data.stats });
        return { success: true };
      }
      return { success: false, error: "Failed to fetch stats" };
    } catch (err) {
      console.error("Error fetching user stats:", err);
      return { success: false, error: err.message };
    }
  },

  // Get user by ID
  getUserById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await httpGet(API_ENDPOINTS.USERS.GET(id));
      set({ loading: false });
      return response;
    } catch (err) {
      set({ 
        error: err.message || "Failed to fetch user",
        loading: false 
      });
      return { success: false, error: err.message };
    }
  },

  // Invite user
  inviteUser: async (email, role) => {
    set({ loading: true, error: null });
    try {
      const response = await post(API_ENDPOINTS.AUTH.INVITE, { email, role });
      set({ loading: false });
      
      if (response.success) {
        // Refresh stats after successful invite
        get().fetchStats();
      }
      
      return response;
    } catch (err) {
      set({ 
        error: err.message || "Failed to invite user",
        loading: false 
      });
      return { success: false, error: err.message };
    }
  },

  // Create user
  createUser: async (userData) => {
    set({ loading: true, error: null });
    try {
      const response = await post(API_ENDPOINTS.USERS.CREATE, userData);
      
      if (response.success) {
        // Add new user to the list
        const currentUsers = get().users;
        set({ 
          users: [response.data.user, ...currentUsers],
          loading: false 
        });
        
        // Refresh stats
        get().fetchStats();
      } else {
        set({ loading: false });
      }
      
      return response;
    } catch (err) {
      set({ 
        error: err.message || "Failed to create user",
        loading: false 
      });
      return { success: false, error: err.message };
    }
  },

  // Update user
  updateUser: async (id, userData) => {
    set({ loading: true, error: null });
    try {
      const response = await put(API_ENDPOINTS.USERS.UPDATE(id), userData);
      
      if (response.success) {
        // Update user in the list
        const currentUsers = get().users;
        const updatedUsers = currentUsers.map(user => 
          user.id === id ? { ...user, ...response.data.user } : user
        );
        set({ 
          users: updatedUsers,
          loading: false 
        });
        
        // Refresh stats
        get().fetchStats();
      } else {
        set({ loading: false });
      }
      
      return response;
    } catch (err) {
      set({ 
        error: err.message || "Failed to update user",
        loading: false 
      });
      return { success: false, error: err.message };
    }
  },

  // Delete user
  deleteUser: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await del(API_ENDPOINTS.USERS.DELETE(id));
      
      if (response.success) {
        // Remove user from the list
        const currentUsers = get().users;
        const filteredUsers = currentUsers.filter(user => user.id !== id);
        set({ 
          users: filteredUsers,
          loading: false 
        });
        
        // Handle pagination if this was the last user on the current page
        const { filters, pagination } = get();
        if (filteredUsers.length === 0 && filters.page > 1) {
          const newFilters = { ...filters, page: filters.page - 1 };
          set({ filters: newFilters });
          get().fetchUsers(newFilters);
        }
        
        // Refresh stats
        get().fetchStats();
      } else {
        set({ loading: false });
      }
      
      return response;
    } catch (err) {
      set({ 
        error: err.message || "Failed to delete user",
        loading: false 
      });
      return { success: false, error: err.message };
    }
  },

  // Toggle user status
  toggleUserStatus: async (id) => {
    set({ loading: true, error: null });
		console.log(id)
    try {
      const response = await patch(`/users/${id}/toggle-status`);
      
      if (response.success) {
        // Update user status in the list
        const currentUsers = get().users;
        const updatedUsers = currentUsers.map(user => 
          user.id === id ? { ...user, ...response.data.user } : user
        );
        set({ 
          users: updatedUsers,
          loading: false 
        });
        
        // Refresh stats
        get().fetchStats();
      } else {
        set({ loading: false });
      }
      
      return response;
    } catch (err) {
      set({ 
        error: err.message || "Failed to toggle user status",
        loading: false 
      });
      return { success: false, error: err.message };
    }
  },

  // Update filters and refetch
  updateFilters: async (newFilters) => {
    const updatedFilters = { ...get().filters, ...newFilters };
    set({ filters: updatedFilters });
    return get().fetchUsers(updatedFilters);
  },

  // Change page
  changePage: async (page) => {
    return get().updateFilters({ page });
  },

  // Refresh all data
  refreshData: async () => {
    const promises = [
      get().fetchUsers(),
      get().fetchStats()
    ];
    
    const results = await Promise.all(promises);
    return results.every(result => result.success);
  },

  // Reset store
  reset: () => set({
    users: [],
    pagination: {},
    stats: null,
    loading: false,
    error: null,
    filters: {
      page: 1,
      limit: 10,
      search: "",
      role: "",
      status: "",
    },
  }),
}));

export default useUserStore;
