import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { usersText } from "../../shared/constants/textContent"; 
import UserStatisticsCard from "./UserStatisticsCard"; 
import { svgAssets } from "../../assets/images/index"; 
import EllipsisMenu from "./EllipsisMenu"; 
import FilterPopup from "./FilterPopUp";
import '../../shared/styles/Dashboard.scss';

// User interface defining the structure of user data
interface User {
  id: string;
  username: string;
  email: string;
  organization: string;
  phoneNumber?: string;
  lastActiveDate?: string;
  status?: string;
  loan?: string;
  savings?: string;
  dateJoined?: string;
  bvn?: string; 
  gender?: string; 
  maritalStatus?: string; 
}

// Props for Users component
interface UsersProps {}

// Users component definition
const Users: React.FC<UsersProps> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook for navigation
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const usersPerPage = 9; // Number of users per page

  // Effect hook to fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users"); // Fetching users from API
        const data = await response.json(); // Parsing JSON response
        setUsers(data); // Setting users state
      } catch (error) {
        console.error("Error fetching users:", error); // Error handling
      }
    };

    fetchUsers();
  }, []); 

  // Calculating total users and statistics
  const totalUsers = users.length; 
  const activeUsers = users.filter((user) => user.status === "Active").length; 
  const usersWithLoans = users.filter((user) => user.loan === "Active").length; 
  const usersWithSavings = users.filter(
    (user) => user.savings === "Active"
  ).length; 

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage; 
  const indexOfFirstUser = indexOfLastUser - usersPerPage; 
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); // Users for current page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber); // Function to change page

  const totalPages = Math.ceil(totalUsers / usersPerPage); // Total number of pages
  const paginationItems = []; // Array to hold pagination items

  paginationItems.push(
    <li className="page-item" key="prev">
      <button
        onClick={() => paginate(currentPage - 1)}
        className="page-link"
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
    </li>
  );

  // Always show pages 1, 2, 3 when on the first or second page
  if (currentPage <= 3) {
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      paginationItems.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <button onClick={() => paginate(i)} className="page-link">
            {i}
          </button>
        </li>
      );
    }
    if (totalPages > 3) {
      paginationItems.push(
        <li className="page-item disabled" key="ellipsis-end">
          <span className="page-link">...</span>
        </li>,
        <li className="page-item" key={totalPages}>
          <button onClick={() => paginate(totalPages)} className="page-link">
            {totalPages}
          </button>
        </li>
      );
    }
  } else {
    // Show the first page and ellipsis if the current page is beyond 2
    paginationItems.push(
      <li className="page-item" key="first">
        <button onClick={() => paginate(1)} className="page-link">
          1
        </button>
      </li>,
      <li className="page-item disabled" key="ellipsis-start">
        <span className="page-link">...</span>
      </li>
    );

    // Display current page with neighbors
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      paginationItems.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <button onClick={() => paginate(i)} className="page-link">
            {i}
          </button>
        </li>
      );
    }

    // Show ellipsis and the last page if needed
    if (currentPage < totalPages - 1) {
      if (currentPage + 1 < totalPages - 1) {
        paginationItems.push(
          <li className="page-item disabled" key="ellipsis-end">
            <span className="page-link">...</span>
          </li>
        );
      }
      paginationItems.push(
        <li className="page-item" key={totalPages}>
          <button onClick={() => paginate(totalPages)} className="page-link">
            {totalPages}
          </button>
        </li>
      );
    }
  }

  // Corrected "Next" button
  paginationItems.push(
    <li className="page-item" key="next">
      <button
        onClick={() => paginate(currentPage + 1)}
        className="page-link"
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </li>
  );

  // Function to toggle the menu for a specific user
  const toggleMenu = (userId: string) => {
    setOpenMenuId(openMenuId === userId ? null : userId); // Toggle menu for specific user
  };

  // Function to handle viewing user details
  const handleViewDetails = (user: User) => {
    navigate(`/dashboard/users/${user.id}`, { state: { user } }); // Navigate with user data
  };

  // Toggle filter popup with position
  const toggleFilterPopup = (
    event: React.MouseEvent<HTMLTableHeaderCellElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setIsFilterPopupOpen(true);
  };

  return (
    <main className="dashboard-content flex-grow-1">
      <div className="container-fluid p-4">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-24 fw-500">Users</h1>
        </div>

        {/* Users Statistics Cards */}
        <div className="row mb-4">
          <UserStatisticsCard
            title={usersText.firstStat}
            value={totalUsers}
            icon={svgAssets.firststat}
            backgroundColor="rgba(255, 192, 203, 0.1)" // Pink
          />
          <UserStatisticsCard
            title={usersText.secondStat}
            value={activeUsers}
            icon={svgAssets.secondstat}
            backgroundColor="rgba(128, 0, 128, 0.1)" // Purple
          />
          <UserStatisticsCard
            title={usersText.thirdStat}
            value={usersWithLoans}
            icon={svgAssets.thirdstat}
            backgroundColor="rgba(255, 165, 0, 0.1)" // Orange
          />
          <UserStatisticsCard
            title={usersText.fourtStat}
            value={usersWithSavings}
            icon={svgAssets.fourthstat}
            backgroundColor="rgba(255, 0, 0, 0.1)" // Red
          />
        </div>

        {/* Users Table */}
        <div className="user-details-table card mt-4 mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table className="user-table">
                <thead>
                  <tr className="border-none fs-12 col-gray">
                    <th
                      onClick={(e) => toggleFilterPopup(e)}
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.firstColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) => toggleFilterPopup(e)}
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.secondColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) => toggleFilterPopup(e)}
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.thirdColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) => toggleFilterPopup(e)}
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.fourthColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) => toggleFilterPopup(e)}
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.fifthColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                    <th
                      onClick={(e) => toggleFilterPopup(e)}
                      style={{ cursor: "pointer" }}
                    >
                      {usersText.sixthColumn}{" "}
                      <img src={svgAssets.filter} alt="Filter" />
                    </th>
                  </tr>
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
                      <td data-label="Actions" className="user-data py-3">
                        <img
                          src={svgAssets.ellipsis}
                          alt="More options"
                          onClick={() => toggleMenu(user.id)}
                        />
                        {openMenuId === user.id && (
                          <EllipsisMenu
                            onClose={() => toggleMenu(user.id)}
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

        {/* Current Page Display */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span>
            Showing {currentPage} out of {totalPages}
          </span>
          {/* Pagination Controls */}
          <nav>
            <ul className="pagination justify-content-end">
              {paginationItems}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Users;
