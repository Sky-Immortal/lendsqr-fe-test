import React from "react";
import "../../shared/styles/navigation/SideNav.scss";
import svgAssets from "../../shared/constants/imageContent";
import SideNavLink from "../../component/navigation/SideNavLink";
import useSideNav from "../../shared/hooks/useSideNavHook";
import { sideNavText } from "../../shared/constants/textContent";

// Interface for navigation link items
interface NavLink {
  icon: string;
  text: string;
  to?: string;
  alt?: string;
}

// Props interface for SideNav
interface SideNavProps {
  onLogout: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ onLogout }) => {
  const { isOpen, toggleSideNav } = useSideNav(); // Use the custom hook

  // Navigation links for Customers section
  const customerLinks: NavLink[] = [
    {
      icon: svgAssets.users,
      text: "Users",
      alt: "Users section",
      to: "/dashboard/users",
    },
    {
      icon: svgAssets.guarantors,
      text: "Guarantors",
      alt: "Guarantors section",
    },
    { icon: svgAssets.loans, text: "Loans", alt: "Loans section" },
    {
      icon: svgAssets.decisionModels,
      text: "Decision Models",
      alt: "Decision Models section",
    },
    { icon: svgAssets.savings, text: "Savings", alt: "Savings section" },
    {
      icon: svgAssets.loanRequests,
      text: "Loan Requests",
      alt: "Loan Requests section",
    },
    { icon: svgAssets.whiteList, text: "Whitelist", alt: "Whitelist section" },
    { icon: svgAssets.karma, text: "Karma", alt: "Karma section" },
  ];

  // Navigation links for Business section
  const businessLinks: NavLink[] = [
    {
      icon: svgAssets.switchOrg,
      text: "Organization",
      alt: "Organization section",
    },
    {
      icon: svgAssets.loanRequests,
      text: "Loan Products",
      alt: "Loan Products section",
    },
    {
      icon: svgAssets.savingsProduct,
      text: "Savings Products",
      alt: "Savings Products section",
    },
    {
      icon: svgAssets.fees,
      text: "Fees and Charges",
      alt: "Fees and Charges section",
    },
    {
      icon: svgAssets.transactions,
      text: "Transactions",
      alt: "Transactions section",
    },
    { icon: svgAssets.services, text: "Services", alt: "Services section" },
    {
      icon: svgAssets.servicesAcct,
      text: "Service Account",
      alt: "Service Account section",
    },
    {
      icon: svgAssets.settlement,
      text: "Settlements",
      alt: "Settlements section",
    },
    { icon: svgAssets.reports, text: "Reports", alt: "Reports section" },
  ];

  // Navigation links for Settings section
  const settingsLinks: NavLink[] = [
    {
      icon: svgAssets.preferences,
      text: "Preferences",
      alt: "Preferences section",
    },
    {
      icon: svgAssets.pricing,
      text: "Fees and Pricing",
      alt: "Fees and Pricing section",
    },
    { icon: svgAssets.audit, text: "Audit Logs", alt: "Audit Logs section" },
    {
      icon: svgAssets.messages,
      text: "Systems Messages",
      alt: "System Messages section",
    },
  ];

  return (
    <>
      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleSideNav}>
        <img src={svgAssets.filter} alt="Menu" />
      </div>

      {/* SideNav */}
      <nav
        className={`sidenav vh-100 position-fixed start-0 top-0 shadow-sm ${
          isOpen ? "open" : ""
        }`}
        role="navigation"
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search for anything"
            aria-label="Search input"
          />
          <button
            className="btn search-button px-4 bg-green border-none"
            aria-label="Submit search"
          >
            <img src={svgAssets.search} alt="Search icon" height="14" />
          </button>
        </div>
        {/* Organization Switcher */}
        <div className="mb-4 special d-flex align-items-center">
          <SideNavLink
            icon={svgAssets.switchOrg}
            text={sideNavText.switchOrg}
            alt="Switch Organization"
          />
          <img className="dropdown-icon position-absolute" src={svgAssets.dropdownempty} alt="Dropdown icon" height="8px" />
        </div>

        {/* Dashboard Link */}
        <div className="mb-4">
          <SideNavLink
            icon={svgAssets.dashboard}
            text={sideNavText.dashboard}
            alt="Dashboard"
            to="/dashboard"
          />
        </div>

        {/* Customers Section */}
        <div className="mb-4">
          <h3 className="fs-12 fw-500 col-gray p-3 mb-2">{sideNavText.sections.customers}</h3>
          {customerLinks.map((link, index) => (
            <SideNavLink
              key={`customer-${index}`}
              icon={link.icon}
              text={link.text}
              alt={link.alt}
              to={link.to}
            />
          ))}
        </div>

        {/* Businesses Section */}
        <div className="mb-4">
          <h3 className="fs-12 fw-500 col-gray p-3 mb-2">{sideNavText.sections.businesses}</h3>
          {businessLinks.map((link, index) => (
            <SideNavLink
              key={`business-${index}`}
              icon={link.icon}
              text={link.text}
              alt={link.alt}
              to={link.to}
            />
          ))}
        </div>

        {/* Settings Section */}
        <div className="mb-4">
          <h3 className="fs-12 fw-500 col-gray p-3 mb-2">{sideNavText.sections.settings}</h3>
          {settingsLinks.map((link, index) => (
            <SideNavLink
              key={`settings-${index}`}
              icon={link.icon}
              text={link.text}
              alt={link.alt}
              to={link.to}
            />
          ))}
        </div>

        <div className="sidenav-divider my-4" role="separator"></div>

        {/* Logout and Version Section */}
        <div>
          <SideNavLink
            icon={svgAssets.logout}
            text="Logout"
            alt="Logout"
            onClick={onLogout}
          />
          <div className="version p-3 fs-6" aria-label="Application version">
            v1.2.0
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
