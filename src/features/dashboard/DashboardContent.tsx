/**
 * DashboardContent Component
 *
 * This component is responsible for rendering the main content area of the dashboard.
 * It displays:
 * - User welcome message
 * - User's last active status
 * - Organization details
 * - User information
 */

import React from "react";
import { dashboardText } from "../../shared/constants/textContent";

// Interface for User data structure
interface User {
  id: string;
  username: string;
  email: string;
  organization: string;
  phoneNumber?: string;
  lastActiveDate?: string;
  status?: string;
}

// Props interface for DashboardContent
interface DashboardContentProps {
  user: User;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ user }) => {
  return (
    <main className="dashboard-content flex-grow-1">
      <div className="container-fluid padding-60">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center">
          <h1 className='fs-24 fw-500 col-blue margin-b-40'>{dashboardText.dashboard}</h1>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card ">
              <div className="card-body ">
                <div className="row ">
                  {/* Organization Information */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h5 className="fs-14 fw-600 col-gray ">{dashboardText.organization}</h5>
                      <p className="fs-16 fw-400 col-gray">{user.organization}</p>
                    </div>
                    <div className="mb-3">
                      <h5 className="fs-14 fw-600 col-gray">{dashboardText.email}</h5>
                      <p className="fs-16 fw-400 col-gray">{user.email}</p>
                    </div>
                  </div >
                  {/* User Status Information */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h5 className="fs-14 fw-600 col-gray">{dashboardText.userId}</h5>
                      <p className="fs-16 fw-400 col-gray">{user.id}</p>
                    </div>
                    <div className="mb-3">
                      <h5 className="fs-14 fw-600 col-gray">{dashboardText.status}</h5>
                      <p className="fs-16 fw-400" >
                        <span className="badge bg-success">{user.status}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;