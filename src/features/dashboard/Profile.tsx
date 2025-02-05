import React from "react";

interface ProfileProps {
  user: {
    username: string;
    id: string;
    tier: number;
    accountBalance: number;
    accountNumber: string;
    bank: string;
  };
}

const Profile: React.FC<ProfileProps> = React.memo(({ user }) => {
  const renderStars = (tier: number) => {
    const totalStars = 3;
    return [...Array(totalStars)].map((_, index) => (
      <span key={index} className="star">
        {index < tier ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <div className="d-flex align-items-center justify-content-start mb-4">
      <div className="d-flex align-items-center px-3">
        <div className="d-flex align-items-center position-relative">
          <div className="profile-circle d-flex align-items-center justify-content-center text-white fw-medium me-2">
            {user.username ? user.username[0] : ""}
          </div>
        </div>
        <div>
          <p className="fw-bold mb-0">{user.username}</p>
          <p className="text-muted mb-0">ID: {user.id}</p>
        </div>
      </div>

      <div className="vr mx-3" style={{ height: "120px" }}></div>

      <div className="tier-stars px-3">
        <p className="mb-1">Tier: {user.tier}</p>
        <div className="stars">{renderStars(user.tier)}</div>
      </div>

      <div className="vr mx-3" style={{ height: "120px" }}></div>

      <div className="text-start px-3">
        <p className="mb-1">₦{user.accountBalance}</p>
        <p className="mb-0">
          {user.accountNumber} / {user.bank}
        </p>
      </div>
    </div>
  );
});

export default Profile;
