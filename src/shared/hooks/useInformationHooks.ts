// useInformationHooks.ts

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useInformationHooks = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("General Details");
  const [currentUser, setCurrentUser] = useState<any>(location.state?.user || {});

  useEffect(() => {
    if (location.state?.user) {
      setCurrentUser(location.state.user);
    }
  }, [location.state?.user]);

  const links = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "Apps and Systems",
  ];

  return {
    location,
    activeSection,
    setActiveSection,
    currentUser,
    links,
  };
};
