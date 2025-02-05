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

export const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const userStr = localStorage.getItem("user");
      const authFlag = localStorage.getItem("isAuthenticated");

      if (!userStr || !authFlag) {
        handleLogout();
        return;
      }

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

    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, [navigate]);

  const handleLogout = () => {
    setIsLoading(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    window.dispatchEvent(new Event("storage"));
    navigate("/login", { replace: true });
  };

  return { user, isLoading, handleLogout };
};
