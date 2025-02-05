import React, { useState } from 'react';
import '../../shared/styles/SideNav.scss';
import svgAssets from '../../assets/images/index';
import SideNavLink from './SideNavLink';

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  // Navigation links for Customers section
  const customerLinks: NavLink[] = [
    { icon: svgAssets.users, text: 'Users', alt: 'Users section', to: '/dashboard/users' },
    { icon: svgAssets.guarantors, text: 'Guarantors', alt: 'Guarantors section' },
    { icon: svgAssets.loans, text: 'Loans', alt: 'Loans section' },
    { icon: svgAssets.decisionModels, text: 'Decision Models', alt: 'Decision Models section' },
    { icon: svgAssets.savings, text: 'Savings', alt: 'Savings section' },
    { icon: svgAssets.loanRequests, text: 'Loan Requests', alt: 'Loan Requests section' },
    { icon: svgAssets.whiteList, text: 'Whitelist', alt: 'Whitelist section' },
    { icon: svgAssets.karma, text: 'Karma', alt: 'Karma section' },
  ];

  // Navigation links for Business section
  const businessLinks: NavLink[] = [
    { icon: svgAssets.switchOrg, text: 'Organization', alt: 'Organization section' },
    { icon: svgAssets.loanRequests, text: 'Loan Products', alt: 'Loan Products section' },
    { icon: svgAssets.savingsProduct, text: 'Savings Products', alt: 'Savings Products section' },
    { icon: svgAssets.fees, text: 'Fees and Charges', alt: 'Fees and Charges section' },
    { icon: svgAssets.transactions, text: 'Transactions', alt: 'Transactions section' },
    { icon: svgAssets.services, text: 'Services', alt: 'Services section' },
    { icon: svgAssets.servicesAcct, text: 'Service Account', alt: 'Service Account section' },
    { icon: svgAssets.settlement, text: 'Settlements', alt: 'Settlements section' },
    { icon: svgAssets.reports, text: 'Reports', alt: 'Reports section' },
  ];

  // Navigation links for Settings section
  const settingsLinks: NavLink[] = [
    { icon: svgAssets.preferences, text: 'Preferences', alt: 'Preferences section' },
    { icon: svgAssets.pricing, text: 'Fees and Pricing', alt: 'Fees and Pricing section' },
    { icon: svgAssets.audit, text: 'Audit Logs', alt: 'Audit Logs section' },
    { icon: svgAssets.messages, text: 'Systems Messages', alt: 'System Messages section' },
  ];

  return (
    <>
      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleSideNav}>
        <img src={svgAssets.filter} alt="Menu" />
      </div>

      {/* SideNav */}
      <nav className={`sidenav vh-100 position-fixed start-0 top-0 shadow-sm ${isOpen ? 'open' : ''}`} role="navigation">

        {/* Organization Switcher */}
        <div className="mb-4">
          <SideNavLink 
            icon={svgAssets.switchOrg} 
            text="Switch Organization"
            alt="Switch Organization"
          />
        </div>

        {/* Dashboard Link */}
        <div className="mb-4">
          <SideNavLink 
            icon={svgAssets.dashboard} 
            text="Dashboard"
            alt="Dashboard"
            to="/dashboard"
          />
        </div>

        {/* Customers Section */}
        <div className="mb-4">
          <h3 className="fs-6 fw-500 p-3 mb-2">CUSTOMERS</h3>
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
          <h3 className="fs-6 fw-500 p-3 mb-2">BUSINESSES</h3>
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
          <h3 className="fs-6 fw-500 p-3 mb-2">SETTINGS</h3>
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