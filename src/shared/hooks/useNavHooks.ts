// Custom hook for handling navigation-related state and functionality

import { useState, useCallback, useMemo } from 'react';
import { User } from '../utils/userUtils';  // Adjust the import path

export const useNavHooks = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Get user data from localStorage with type safety
  const user: User = useMemo(() => {
    try {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      // Ensure required fields are present
      if (!userData.username || !userData.organization || !userData.email) {
        throw new Error('Invalid user data structure');
      }
      return userData;
    } 
    // Handle parsing errors
    catch (error) {
      console.error('Error parsing user data:', error);
      return {
        username: 'Guest User',
        organization: 'Unknown',
        email: 'guest@example.com'
      };
    }
  }, []);

  // Extract first name from username
  const firstName: string = useMemo(() => user.username.split(' ')[0], [user.username]);

  // Toggle dropdown visibility
  const handleDropdownToggle = useCallback(() => {
    setShowDropdown(prev => !prev);
  }, []);

  return { user, showDropdown, handleDropdownToggle, firstName };
};