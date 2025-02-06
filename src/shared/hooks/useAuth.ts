/**
 * Custom React hook for managing user authentication state.
 * 
 * Provides functionality for checking user authentication, handling login and logout,
 * and storing user data in local storage.
 * 
 * @returns An object containing the user's authentication state and functions for
 *          managing that state.
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Interface for User data structure
export interface User {
  id: string;
  username: string;
  email: string;
  organization: string;
  phoneNumber?: string;
  lastActiveDate?: string;
  status?: string;
  dateJoined: string;
  loans?: number;
  savings?: number;
  name: string;
}

// Custom React hook that manages user authentication state.
export const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = () => {
      const userStr = localStorage.getItem("user");
      const authFlag = localStorage.getItem("isAuthenticated");

      // If user is not authenticated, handle logout
      if (!userStr || !authFlag) {
        handleLogout();
        return;
      }

      // If user is authenticated, parse user data
      try {
        const userData = JSON.parse(userStr);
        const defaultUser = {
          ...userData,
          dateJoined: userData.dateJoined || new Date().toISOString(),
          loans: userData.loans || 0,
          savings: userData.savings || 0,
          status: userData.status || "active",
          name: userData.name || "Default Name", // Set default name
        };
        setUser(defaultUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        handleLogout();
      } finally {
        setIsLoading(false);
      }
    };

    // Check authentication on initial render
    checkAuth();
    window.addEventListener("storage", checkAuth);

    // Clean up event listener
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, [navigate]);

  // Handle user logout
  const handleLogout = () => {
    setIsLoading(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    window.dispatchEvent(new Event("storage"));
    navigate("/login", { replace: true });
  };

  // Return user data and loading state
  return { user, isLoading, handleLogout };
};
