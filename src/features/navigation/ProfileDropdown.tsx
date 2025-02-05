import React from 'react';
import '../../shared/styles/Nav.scss';

// Interface for User data
interface User {
  username: string;
  organization: string;
  email: string;
}

// Props interface for ProfileDropdown
interface ProfileDropdownProps {
  user: User;
  isOpen: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user, isOpen }) => {
  // Don't render anything if dropdown is closed
  if (!isOpen) return null;

  return (
    <div className="profile-dropdown">
      <div className="card border-0 shadow" style={{ minWidth: '250px' }}>
        <div className="card-body p-3">
          {/* User's Full Name Section */}
          <div className="mb-3">
            <small className="text-secondary fw-medium d-block mb-1">
              Full Name
            </small>
            <span>{user.username}</span>
          </div>

          {/* Organization Section */}
          <div className="mb-3">
            <small className="text-secondary fw-medium d-block mb-1">
              Organization
            </small>
            <span>{user.organization}</span>
          </div>

          {/* Email Section */}
          <div className="mb-3">
            <small className="text-secondary fw-medium d-block mb-1">
              Email
            </small>
            <span>{user.email}</span>
          </div>

          {/* Status Section */}
          <div>
            <small className="text-secondary fw-medium d-block mb-1">
              Status
            </small>
            <span className="badge bg-success rounded-pill">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
