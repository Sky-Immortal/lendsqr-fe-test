import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Props interface for SideNavLink
interface SideNavLinkProps {
  icon: string;
  text: string;
  alt?: string;
  to?: string;
  onClick?: () => void;
}

// Side Navigation component
const SideNavLink: React.FC<SideNavLinkProps> = ({ 
  icon, 
  text, 
  alt, 
  to, 
  onClick 
}) => {
  // Navigation
  const navigate = useNavigate();

  // Handle click
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  }, [onClick, to, navigate]);

  // Render
  return (
    // Side Navigation Item
    <div 
      className="nav-item fs-16 d-flex align-items-center p-3" 
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      aria-label={`Navigate to ${text}`}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Icon */}
      <img 
        src={icon} 
        alt={alt || text} 
        width="16" 
        height="16" 
        className="me-2"
        loading="lazy"
      />
      <span className="nav-text">{text}</span>
    </div>
  );
};

export default SideNavLink;
