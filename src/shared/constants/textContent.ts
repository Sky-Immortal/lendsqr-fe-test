/**
 * Application Text Content
 * 
 * This file centralizes all text content used across the application.
 * Benefits:
 * - Easy maintenance and updates
 * - Consistent terminology
 * - Support for future internationalization
 * - Single source of truth for text content
 */

// Login page text content
export const loginText = {
  welcome: "Welcome!",
  enterDetails: "Enter details to login",
  emailLabel: "Email",
  passwordLabel: "Password",
  forgotPassword: "FORGOT PASSWORD?",
  loginButton: "LOG IN",

  // Validation messages
  validation: {
    invalidEmail: "Please enter a valid email address",
    invalidPassword: "Invalid password",
    accountNotFound: "No account found with this email",
    connectionError: "Unable to connect to the server. Please try again later."
  }
};

// Dashboard content text
export const dashboardText = {
  dashboard: "Dashboard",
  users: "Users",
  organization: "ORGANIZATION:",
  email: "EMAIL:",
  userId: "USER ID:",
  status: "STATUS:",
  statusValue: {
    active: "ACTIVE:",
    inactive: "INACTIVE"
  }
};

// Navigation text content
export const navText = {
  search: "Search for anything",
  documentation: "Docs",
  notifications: "Notifications",
  profile: {
    fullName: "Full Name",
    organization: "Organization",
    email: "Email",
    status: "Status"
  }
};

// Side navigation text content
export const sideNavText = {
  switchOrg: "Switch Organization",
  dashboard: "Dashboard",
  sections: {
    customers: "CUSTOMERS",
    businesses: "BUSINESSES",
    settings: "SETTINGS"
  },
  logout: "Logout",
  version: "v1.2.0"
};

//Users text content
export const usersText = {  

  // Statistics Box text content
  users: "Users",
  firstStat: "TOTAL USERS",
  secondStat: "ACTIVE USERS",
  thirdStat: "USERS WITH LOAN",
  fourtStat: "USERS WITH SAVINGS",

  //Users Table Text Content
  firstColumn: "ORGANIZATION",
  secondColumn: "USERNAME",
  thirdColumn: "EMAIL",
  fourthColumn: "PHONE NUMBER",
  fifthColumn: "DATE JOINED", // Updated to include Date Joined
  sixthColumn: "STATUS",
}

// Error messages
export const errorText = {
  general: {
    somethingWrong: "Something went wrong",
    tryAgain: "Please try again later",
    notFound: "Not found",
    unauthorized: "Unauthorized access"
  },
  auth: {
    sessionExpired: "Your session has expired",
    pleaseLogin: "Please log in again"
  }
};

// Success messages
export const successText = {
  auth: {
    loginSuccess: "Login successful",
    logoutSuccess: "Logout successful"
  }
};

// Loading states
export const loadingText = {
  loading: "Loading...",
  processing: "Processing...",
  pleaseWait: "Please wait..."
};
