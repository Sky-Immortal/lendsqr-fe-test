import React from "react";
import '../../shared/styles/navigation/ProfileDropdown.scss';
import "../../shared/styles/navigation/Nav.scss";
import { User } from "../../shared/utils/userUtils"; // Adjust the import path
import { navText } from "../../shared/constants/textContent";
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
      <div className="card border-0 shadow" style={{ minWidth: "250px" }}>
        <div className="card-body p-3">
          {/* User's Full Name Section */}
          <div className="mb-3">
            <small className="text-secondary fw-medium d-block mb-1">
              {navText.profile.fullName}
            </small>
            <span>{user.username}</span>
          </div>

          {/* Organization Section */}
          <div className="mb-3">
            <small className="text-secondary fw-medium d-block mb-1">
            {navText.profile.organization}
            </small>
            <span>{user.organization}</span>
          </div>

          {/* Email Section */}
          <div className="mb-3">
            <small className="text-secondary fw-medium d-block mb-1">
            {navText.profile.email}
            </small>
            <span>{user.email}</span>
          </div>

          {/* Status Section */}
          <div>
            <small className="text-secondary fw-medium d-block mb-1">
            {navText.profile.status}
            </small>
            <span
              className={`btn-status ${
                user.status === "Active"
                  ? "btn-active"
                  : user.status === "Inactive"
                  ? "btn-inactive"
                  : user.status === "Pending"
                  ? "btn-pending"
                  : user.status === "Blacklisted"
                  ? "btn-blacklisted"
                  : ""
              }`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
