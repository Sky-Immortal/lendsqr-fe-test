// Information.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { useInformationHooks } from "../../shared/hooks/useInformationHooks";
import { getSectionData } from "../../shared/utils/informationUtils";
import {
  UserDetailsSections,
  userDetailsSections,
} from "../../component/dashboard/userDetailsSections";
import UserDetailsProfile from "../../component/dashboard/UserDetailsProfile";
import "../../shared/styles/dashboard/Dashboard.scss";
import svgAssets from "../../shared/constants/imageContent";

const Information: React.FC = () => {
  const { currentUser, activeSection, setActiveSection, links } =
    useInformationHooks();
  const navigate = useNavigate();

  return (
    <div className="details-screen padding-60">
      <div
        className="back-icon p-2 d-flex align-items-center"
        onClick={() => navigate(-1)}
      >
        <img
          src={svgAssets.backArrow}
          className="mb-3 col-blue"
          alt="back to users"
        />
        <p className="px-4 col-blue">Back to Users</p>
      </div>

      <h1 className="d-flex col-blue fs-24 fw-500 justify-content-between align-items-center">
        User Details
        <div className="d-flex">
          <button className="btn mx-2 btn-red-outline fs-14 fw-600 letter-md">
            BLACKLIST
          </button>
          <button className="btn mx-2 btn-green-outline fs-14 fw-600 letter-md">
            ACTIVATE
          </button>
        </div>
      </h1>

      <div className="details-screen-container bg-white">
        <div className="details-screen-header">
          <UserDetailsProfile user={currentUser} />
        </div>
        <div className="horizontal-links d-flex justify-content-between">
          {links.map((link, index) => (
            <a
              key={index}
              href="#links"
              className={`mx-3 col-gray text-decoration-none ${
                activeSection === link ? "active" : ""
              }`}
              onClick={() => setActiveSection(link)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="details-section rounded-lg">
        {activeSection === "General Details" ? (
          userDetailsSections(currentUser).map((section, index, array) => (
            <UserDetailsSections
              key={index}
              title={section.title}
              data={section.data}
              isLast={index === array.length - 1} 
            />
          ))
        ) : getSectionData(activeSection, currentUser) ? (
          <UserDetailsSections
            title={activeSection}
            data={getSectionData(activeSection, currentUser)}
          />
        ) : (
          <div className="coming-soon-container">
            <p className="w-100 text-center pt-4 col-blue fw-600">
              Coming Soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Information;
