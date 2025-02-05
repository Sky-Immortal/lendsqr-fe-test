import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import '../../shared/styles/dashboard/Dashboard.scss';
import svgAssets from "../../shared/constants/imageContent";
import "react-datepicker/dist/react-datepicker.css";


interface FilterPopupProps {
  position: { top: number; left: number }; // Add this line
  organizations: string[];
  statuses: string[];
  onFilter: (filters: any) => void;
  onReset: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  organizations,
  statuses,
  onFilter,
  onReset,
}) => {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

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
        <label className="fw-500 fs-14 col-gray">Organization</label>
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
        <label className="fw-500 fs-14 col-gray">Username</label>
        <input
          type="text"
          value={username}
          placeholder="User"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">Date</label>
        <DatePicker
          selected={date}
          onChange={(date: Date | null) => setDate(date)} 
          placeholderText="Date" // Custom placeholder
          className="custom-date-input"
          dateFormat="yyyy-MM-dd" // Custom date format
        />
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">Phone Number</label>
        <input
          type="number"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="fw-500 fs-14 col-gray">Status</label>
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
          Reset
        </button>
        <button className="btn btn-primary" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterPopup;
