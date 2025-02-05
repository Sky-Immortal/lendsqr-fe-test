import React from "react";
import '../../shared/styles/Dashboard.scss';

interface UserStatisticsCardProps {
  title: string;
  value: number;
  icon: string; 
  backgroundColor: string;
}

const UserStatisticsCard: React.FC<UserStatisticsCardProps> = ({
  title,
  value,
  icon,
  backgroundColor,
}) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body text-left">
          <div className="cover" style={{ backgroundColor }}>
            <img src={icon} alt="Icon" className="icon-class" />
          </div>
          <h5 className="mb-2 fs-14 fw-500 col-gray">{title}</h5>
          <p className="fs-24 fw-600 col-blue">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStatisticsCard;
