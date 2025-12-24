import { create } from "zustand";
import Cookies from "js-cookie";
import { post as httpPost, get as httpGet } from "../api/client.js";
import { API_ENDPOINTS } from "../api/endpoints.js";

const useAuthStore = create((set, get) => ({
  // login states
  user: null,
  isAuthenticated: false,

  initializeAuth: async () => {
    set({ loading: true });
    try {
      const token = Cookies.get("auth-token");
      if (token) {
        const response = await httpGet(API_ENDPOINTS.AUTH.ME);
        if (response.success) {
          set({
            user: response.data.user,
            isAuthenticated: true,
            loading: false,
          });
          return { success: true };
        }
      }
    } catch (err) {
      Cookies.remove("auth-token");
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
      return { success: false, error: err.message };
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    try {
      const response = await httpPost(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;
      if (token && user) {
        Cookies.set("auth-token", token, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        set({ user, isAuthenticated: true, loading: false });
        return { success: true };
      }
      throw new Error("Login failed: Invalid response from server");
    } catch (err) {
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
      return { success: false, error: err.message };
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    Cookies.remove("auth-token");
    set({ user: null, isAuthenticated: false });
  },

  register: async (invite, name, password) => {
    try {
      const response = await httpPost(API_ENDPOINTS.AUTH.REGISTER, {
        token: invite,
        name,
        password,
      });

      return { success: true, message: response.message };
    } catch (err) {
      const errorMessage =
        err.message || err.error?.message || "Registration failed";

      return { success: false, error: errorMessage };
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await httpPost(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, {
        email,
      });

      return { success: true, message: response.message };
    } catch (err) {
      const errorMessage =
        err.message ||
        err.error?.message ||
        "Failed to send password reset email";
      return { success: false, error: errorMessage };
    }
  },

  resendForgotPassword: async (email) => {
    try {
      const response = await httpPost(API_ENDPOINTS.AUTH.FORGOT_RESEND_PASS, {
        email,
      });

      return {
        success: true,
        cooldownMsLeft: response.data.cooldownMsLeft,
        resent: response.data.resent,
      };
    } catch (err) {
      const errorMessage =
        err.message ||
        err.error?.message ||
        "Failed to resend password reset email";
      return { success: false, error: errorMessage };
    }
  },

  resetPassword: async (token, password) => {
    try {
      const response = await httpPost(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
        token,
        password,
      });

      return { success: true, message: response.message };
    } catch (err) {
      const errorMessage =
        err.message || err.error?.message || "Failed to reset password";

      return { success: false, error: errorMessage };
    }
  },
}));

export default useAuthStore;
