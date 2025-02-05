import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Section, sections } from "./Section";
import Profile from "./Profile";
import '../../shared/styles/Dashboard.scss';
import svgAssets from "../../assets/images";

const Information: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("General Details");
  const [currentUser, setCurrentUser] = useState<any>(location.state?.user || {});

  useEffect(() => {
    if (location.state?.user) {
      setCurrentUser(location.state.user);
    }
  }, [location.state?.user]);

  const links = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "Apps and Systems",
  ];

  const getSectionData = (section: string) => {
    switch (section) {
      case "Documents":
        return currentUser.documents;
      case "Bank Details":
        return currentUser.bankDetails;
      case "Loans":
        return currentUser.loans;
      case "Savings":
        return currentUser.saving;
      case "Apps and Systems":
        return currentUser.appsAndSystems;
      default:
        return sections(currentUser);
    }
  };

  return (
    <div className="details-screen">
      <div className="back-icon p-2 d-flex align-items-center" onClick={() => navigate(-1)}>
        <img src={svgAssets.backArrow} className="mb-3" alt='back to users'/>
        <p className="px-4">Back to Users</p>
      </div>

      <h1 className="d-flex justify-content-between align-items-center">
        User Details
        <div className="d-flex">
          <button className="btn mx-2 btn-red-outline fs-14 fw-600 letter-md">BLACKLIST</button>
          <button className="btn mx-2 btn-green-outline fs-14 fw-600 letter-md">ACTIVATE</button>
        </div>
      </h1>

      <div className="details-screen-container bg-white">
        <Profile user={currentUser} />

        <div className="horizontal-links d-flex justify-content-between">
          {links.map((link, index) => (
            <Link
              key={index}
              to="#"
              className={`mx-3 col-gray text-decoration-none ${
                activeSection === link ? "active" : ""
              }`}
              onClick={() => setActiveSection(link)}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      {activeSection === "General Details" ? (
        sections(currentUser).map((section, index) => (
          <Section key={index} title={section.title} data={section.data} />
        ))
      ) : getSectionData(activeSection) ? (
        <Section title={activeSection} data={getSectionData(activeSection)} />
      ) : (
        <div className="coming-soon-container">
          <p className="w-100 text-center pt-4 col-blue fw-600">Coming Soon...</p>
        </div>
      )}
    </div>
  );
};

export default Information;
