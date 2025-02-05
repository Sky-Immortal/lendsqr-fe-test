/**
 * Nav Component
 * 
 * This component serves as the main navigation bar at the top of the application.
 * Features:
 * - Company logo
 * - Search functionality
 * - Quick links (Docs)
 * - Notifications
 * - User profile with dropdown
 */

import React, { useState, useCallback } from 'react';
import '../../shared/styles/Nav.scss';
import svgAssets from '../../assets/images/index';
import ProfileDropdown from './ProfileDropdown';

// Interface for User data matching ProfileDropdown requirements
interface User {
  username: string;
  organization: string;
  email: string;
}

const Nav: React.FC = () => {
  // State for profile dropdown visibility
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  
  // Get user data from localStorage with type safety
  const user: User = React.useMemo(() => {
    try {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      // Ensure required fields are present
      if (!userData.username || !userData.organization || !userData.email) {
        throw new Error('Invalid user data structure');
      }
      return userData;
    } catch (error) {
      console.error('Error parsing user data:', error);
      // Return default user data if parsing fails
      return {
        username: 'Guest User',
        organization: 'Unknown',
        email: 'guest@example.com'
      };
    }
  }, []);

  // Extract first name from username
  const firstName: string = React.useMemo(() => {
    return user.username.split(' ')[0];
  }, [user.username]);

  // Toggle dropdown visibility
  const handleDropdownToggle = useCallback(() => {
    setShowDropdown(prev => !prev);
  }, []);
  
  return (
    <nav className="top-nav bg-white px-0">
      <div className="top-nav-container d-flex h-100">
        {/* Logo Section */}
        <div className="logo-container" style={{ width: '280px' }}>
          <div className="h-100 d-flex align-items-center justify-content-center">
            <img 
              src={svgAssets.logo} 
              alt="Company Logo" 
              height="30" 
              className="company-logo"
            />
          </div>
        </div>

        {/* Main Navigation Content */}
        <div className="main-nav-container w-100 px-4">
          <div className="main-nav h-100 d-flex align-items-center">
            {/* Search Bar */}
            <div className="input-group" style={{ maxWidth: '400px'}}>
              <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Search for anything" 
                aria-label="Search input"
              />
              <button 
                className="btn search-button px-4 bg-green border-none"
                aria-label="Submit search"
              >
                <img 
                  src={svgAssets.search} 
                  alt="Search icon" 
                  height="14" 
                />
              </button>
            </div>

            {/* Navigation Items */}
            <div className=" profile-group d-flex align-items-center">
              {/* Documentation Link - Visible on larger screens */}
              <a 
                href="#users-doc-link" 
                className="main-nav-doc col-blue fs-16 me-4 d-none d-md-block"
                aria-label="Documentation"
              >
                Docs
              </a>

              {/* Notifications - Visible on larger screens */}
              <div className="main-nav-notification me-4 position-relative notification d-none d-md-block">
                <img 
                  src={svgAssets.notification} 
                  alt="Notifications icon" 
                  height="20" 
                />
              </div>

              {/* User Profile Section */}
              <div className="main-nav-profile d-flex align-items-center position-relative">
                <div className="profile-circle d-flex align-items-center justify-content-center text-white fs-24 fw-medium me-2">
                  {firstName[0]}
                </div>
                <span className="col-blue fs-16 fw-500 me-2">
                  {firstName}
                </span>
                <img 
                  src={svgAssets.dropdown} 
                  alt="Toggle profile menu" 
                  width="8" 
                  style={{ height: 'auto', cursor: 'pointer' }}
                  onClick={handleDropdownToggle}
                />
                <ProfileDropdown 
                  user={user} 
                  isOpen={showDropdown} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;


