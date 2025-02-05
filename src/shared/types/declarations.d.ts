/**
 * Global Type Declarations
 * 
 * This file contains TypeScript declarations for:
 * - Image/media file imports
 * - Third-party modules without type definitions
 * - Global interfaces and types used across the application
 */

// Image file declarations
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// Global interfaces
interface Window {
  // Add any custom properties to the window object
  __REDUX_DEVTOOLS_EXTENSION__?: any;
}

// Global types for the application
declare namespace App {
  // User related types
  interface User {
    id: string;
    username: string;
    email: string;
    organization: string;
    phoneNumber?: string;
    lastActiveDate?: string;
  }

  // Authentication related types
  interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
  }

  // API response types
  interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }

  // Error types
  interface ApiError {
    code: string;
    message: string;
    details?: Record<string, any>;
  }
}

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_API_URL: string;
    REACT_APP_VERSION: string;
    [key: string]: string | undefined;
  }
}
