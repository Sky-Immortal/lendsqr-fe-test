// src/components/navigation/Nav.tsx
import React from 'react';
import '../../shared/styles/navigation/Nav.scss';
import svgAssets from '../../shared/constants/imageContent';
import ProfileDropdown from '../../component/navigation/ProfileDropdown';
import { useNavHooks } from '../../shared/hooks/useNavHooks';

const Nav: React.FC = () => {
  // Use custom hook for state and logic
  const { showDropdown, user, firstName, handleDropdownToggle } = useNavHooks();

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
            <div className="profile-group d-flex align-items-center">
              {/* Documentation Link */}
              <a 
                href="#users-doc-link" 
                className="main-nav-doc col-blue fs-16 me-4 d-none d-md-block"
                aria-label="Documentation"
              >
                Docs
              </a>

              {/* Notifications */}
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
