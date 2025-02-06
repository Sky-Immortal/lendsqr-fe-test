import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersText } from "../../shared/constants/textContent";
import UserStatisticsCard from "../../component/dashboard/UserStatisticsCard";
import { svgAssets } from "../../shared/constants/imageContent";
import EllipsisMenu from "../../component/dashboard/EllipsisMenu";
import FilterPopup from "./FilterPopUp";
import "../../shared/styles/dashboard/Dashboard.scss";
import { User } from "../../shared/utils/userUtils";
import {
  fetchUsers,
  generatePaginationItems,
  handlePageChange,
  toggleMenu,
  toggleFilterPopup,
} from "../../shared/hooks/useUsers";

interface UsersProps {}

// Users component
const Users: React.FC<UsersProps> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const navigate = useNavigate();
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const usersPerPage = 9;

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  // Calculate statistics
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const usersWithLoans = users.filter((user) => user.loan === "Active").length;
  const usersWithSavings = users.filter(
    (user) => user.savings === "Active"
  ).length;

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Generate pagination items
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const paginationItems = generatePaginationItems(
    currentPage,
    totalPages,
    setCurrentPage,
    svgAssets
  );

  // Handle page change
  const handleViewDetails = (user: User) => {
    navigate(`/dashboard/users/${user.id}`, { state: { user } });
  };

  return (
    <main className="dashboard-content flex-grow-1">
      <div className="container-fluid padding-60">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-24 col-blue fw-500">Users</h1>
        </div>

        {/* User Statistics */}
        <div className="row mb-4">
          <UserStatisticsCard
            title={usersText.firstStat}
            value={totalUsers}
            icon={svgAssets.firststat}
            backgroundColor="rgba(255, 192, 203, 0.1)"
          />
          <UserStatisticsCard
            title={usersText.secondStat}
            value={activeUsers}
            icon={svgAssets.secondstat}
            backgroundColor="rgba(128, 0, 128, 0.1)"
          />
          <UserStatisticsCard
            title={usersText.thirdStat}
            value={usersWithLoans}
            icon={svgAssets.thirdstat}
            backgroundColor="rgba(255, 165, 0, 0.1)"
          />
          <UserStatisticsCard
            title={usersText.fourtStat}
            value={usersWithSavings}
            icon={svgAssets.fourthstat}
            backgroundColor="rgba(255, 0, 0, 0.1)"
          />
        </div>

        {/* User Table */}
        <div className="user-details-table card mt-4 mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table className="user-table">
                <thead>
                  <tr className="border-none fs-12 col-gray">
                    <th
                      onClick={(e) =>
                        toggleFilterPopup(
                          e,
                          setPopupPosition,
                          setIsFilterPopupOpen
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.firstColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) =>
                        toggleFilterPopup(
                          e,
                          setPopupPosition,
                          setIsFilterPopupOpen
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.secondColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) =>
                        toggleFilterPopup(
                          e,
                          setPopupPosition,
                          setIsFilterPopupOpen
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.thirdColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) =>
                        toggleFilterPopup(
                          e,
                          setPopupPosition,
                          setIsFilterPopupOpen
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.fourthColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) =>
                        toggleFilterPopup(
                          e,
                          setPopupPosition,
                          setIsFilterPopupOpen
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.fifthColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) =>
                        toggleFilterPopup(
                          e,
                          setPopupPosition,
                          setIsFilterPopupOpen
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.sixthColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                  </tr>
                  {/* Filter Popup */}
                  {isFilterPopupOpen && (
                    <FilterPopup
                      position={popupPosition}
                      organizations={users.map((user) => user.organization)}
                      statuses={[
                        "Active",
                        "Inactive",
                        "Pending",
                        "Blacklisted",
                      ]}
                      onFilter={(filters) => {
                        console.log("Filters applied:", filters);
                        setIsFilterPopupOpen(false);
                      }}
                      onReset={() => {
                        console.log("Filters reset");
                        setIsFilterPopupOpen(false);
                      }}
                    />
                  )}
                </thead>
                <tbody>
                  {/* Current Users */}
                  {currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td data-label="Organization" className="user-data py-3">
                        {user.organization}
                      </td>
                      <td data-label="Username" className="user-data py-3">
                        {user.username}
                      </td>
                      <td data-label="Email" className="user-data py-3">
                        {user.email}
                      </td>
                      <td data-label="Phone Number" className="user-data py-3">
                        {user.phoneNumber}
                      </td>
                      <td data-label="Date Joined" className="user-data py-3">
                        {user.dateJoined}
                      </td>
                      <td data-label="Status" className="user-data py-3">
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
                      </td>
                      {/* Ellipsis Menu */}
                      <td data-label="Actions" className="user-data py-3">
                        <img
                          src={svgAssets.ellipsis}
                          alt="More options"
                          onClick={() =>
                            toggleMenu(user.id, openMenuId, setOpenMenuId)
                          }
                        />
                        {/* Ellipsis Menu */}
                        {openMenuId === user.id && (
                          <EllipsisMenu
                            onClose={() =>
                              toggleMenu(user.id, openMenuId, setOpenMenuId)
                            }
                            onViewDetails={() => handleViewDetails(user)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="col-gray fw-400">
            Showing{" "}
            <div className="select-container">
              <select
                value={currentPage}
                onChange={(e) => handlePageChange(e, setCurrentPage)}
                className="select-page-display"
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <img
                src={svgAssets.dropdownempty}
                alt="Dropdown Icon"
                className="custom-icon"
              />
            </div>
            <span className="total-page-count"> out of {totalPages}</span>
          </span>

          <nav className="pagination-nav">
            <ul className="pagination justify-content-center pagination-container">
              {paginationItems}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Users;
