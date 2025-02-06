/**
 * Custom hook for managing user information and navigation state.
 * 
 * Provides the current user data, active section, and links for navigation.
 * 
 * @returns {object} An object containing the current user, active section, and links.
 */

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Interface for User data structure
export const useInformationHooks = () => {

  interface LocationState {
    user: any;
  }

  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("General Details");
  const [currentUser, setCurrentUser] = useState<any>(location.state?.user || {});

  // Update the current user when the location changes
  useEffect(() => {
    if (location.state?.user) {
      setCurrentUser(location.state.user);
    }
  }, [location.state?.user]);

  // Navigation links
  const links = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "Apps and Systems",
  ];

  // Return the current user, active section, and links
  return {
    location,
    activeSection,
    setActiveSection,
    currentUser,
    links,
  };
};
