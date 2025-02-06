import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import '../../shared/styles/dashboard/Dashboard.scss';
import svgAssets from "../../shared/constants/imageContent";
import "react-datepicker/dist/react-datepicker.css";
import {filterText} from "../../shared/constants/textContent";

interface FilterPopupProps {
  position: { top: number; left: number }; // Add this line
  organizations: string[];
  statuses: string[];
  onFilter: (filters: any) => void;
  onReset: () => void;
}

// FilterPopup component
const FilterPopup: React.FC<FilterPopupProps> = ({
  organizations,
  statuses,
  onFilter,
  onReset,
}) => {

  // State
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Handlers
  const handleFilter = () => {
    const filters = {
      organization: selectedOrganization,
      username,
      email,
      date: date ? date.toISOString().split('T')[0] : "",
      phoneNumber,
      status: selectedStatus,
    };
    onFilter(filters);
  };

  // Reset
  const handleReset = () => {
    setSelectedOrganization("");
    setUsername("");
    setEmail("");
    setDate(null);
    setPhoneNumber("");
    setSelectedStatus("");
    onReset();
  };

  return (
    <div className="filter-popup ">
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">{filterText.organization}</label>
        <Dropdown>
          <Dropdown.Toggle
            variant="outline-secondary"
            className="filter-item d-flex align-items-center justify-content-between"
          >
            {selectedOrganization || "Select"}
            <img src={svgAssets.dropdownempty} alt="New Icon" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {organizations.map((organization) => (
              <Dropdown.Item
                key={organization}
                onClick={() => setSelectedOrganization(organization)}
              >
                {organization}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">{filterText.username}</label>
        <input
          type="text"
          value={username}
          placeholder="User"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">{filterText.email}</label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">{filterText.date}</label>
        <DatePicker
          selected={date}
          onChange={(date: Date | null) => setDate(date)} 
          placeholderText="Date" // Custom placeholder
          className="custom-date-input"
          dateFormat="yyyy-MM-dd" // Custom date format
        />
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">{filterText.phoneNumber}</label>
        <input
          type="number"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">{filterText.status}</label>
        <Dropdown>
          <Dropdown.Toggle
            variant="outline-secondary"
            className="filter-item d-flex align-items-center justify-content-between"
          >
            {selectedStatus || "Select"}
            <img src={svgAssets.dropdownempty} alt="status dropdown icon"/>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {statuses.map((status) => (
              <Dropdown.Item
                key={status}
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="filter-btn">
        <button className="btn btn-secondary" onClick={handleReset}>
          {filterText.reset}
        </button>
        <button className="btn btn-primary" onClick={handleFilter}>
          {filterText.filter}
        </button>
      </div>
    </div>
  );
};

export default FilterPopup;
