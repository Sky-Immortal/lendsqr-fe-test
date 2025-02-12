import React from "react";
import { User } from "../../shared/utils/userUtils";

// Interface for UserDetailsProfileProps
interface UserDetailsProfileProps {
  user: User;
}

// UserDetailsProfile component
const UserDetailsProfile: React.FC<UserDetailsProfileProps> = React.memo(
  ({ user }) => {
    // Function to render tier stars
    const renderStars = (tier: number) => {
      const totalStars = 3;
      return [...Array(totalStars)].map((_, index) => (
        <span key={index} className="star">
          {index < tier ? "★" : "☆"}
        </span>
      ));
    };

    // User Details Profile component
    return (
      <div className="profile col-blue d-flex align-items-center justify-content-start mb-4">
        <div className="profile-section d-flex align-items-center px-3">
          <div className="d-flex align-items-center position-relative">
            {/* Profile Circle */}
            <div className="profile-circle d-flex align-items-center justify-content-center text-white fw-medium me-2">
              {user.username ? user.username[0] : ""}
            </div>
          </div>
          {/* User's Full Name and ID */}
          <div>
            <p className="fw-500 fs-22 mb-0">{user.username}</p>
            <p className="col-gray fw-400 fs-12 mb-0">ID: {user.id}</p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="vr mx-3" style={{ height: "120px" }}></div>

        {/* Tier, Stars, and Account Balance */}
        <div className="tier-stars px-3">
          <p className="tier mb-1  fw-500 fs-14">Tier: {user.tier}</p>
          <div className="stars">{renderStars(user.tier)}</div>
        </div>

        {/* Vertical Divider */}
        <div className="vr mx-3" style={{ height: "120px" }}></div>

        {/* Account Info */}
        <div className="account-info px-3">
          <p className=" balance mb-1 fw-500 fs-22 ">₦{user.accountBalance}</p>
          <p className="account-details mb-0 fs-12 fw-400">
            {user.accountNumber}/{user.bank}
          </p>
        </div>
      </div>
    );
  }
);

export default UserDetailsProfile;
