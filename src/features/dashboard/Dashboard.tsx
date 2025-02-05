import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "../navigation/SideNav";
import Nav from "../navigation/Nav";
import DashboardContent from "../../component/dashboard/DashboardContent";
import Information from "./UserDetails";
import Users from "./Users";
import '../../shared/styles/dashboard/Dashboard.scss';
import { useAuth } from "../../shared/hooks/useAuth"; // Import the useAuth hook


const Dashboard: React.FC = () => {
  const { user, isLoading, handleLogout } = useAuth(); // Use the hook

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="dashboard vh-100 d-flex flex-column">
      <Nav />
      <div className="special-margin-top">
        <SideNav onLogout={handleLogout} />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<DashboardContent user={user} />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<Information />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;