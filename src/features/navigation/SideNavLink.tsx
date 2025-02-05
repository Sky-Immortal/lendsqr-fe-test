/**
 * SideNavLink Component
 * 
 * This component renders a single navigation link item in the side navigation.
 * Features:
 * - Icon and text display
 * - Navigation handling (both route and click events)
 * - Accessibility support
 * - Consistent styling
 */

import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Props interface for SideNavLink
interface SideNavLinkProps {
  /** URL of the icon to display */
  icon: string;
  /** Text label for the navigation item */
  text: string;
  /** Alternative text for the icon (accessibility) */
  alt?: string;
  /** Route to navigate to when clicked */
  to?: string;
  /** Optional click handler for custom actions (e.g., logout) */
  onClick?: () => void;
}

/**
 * SideNavLink displays a navigation item with an icon and text
 * 
 * @param icon - 
 * @param text - Text label for the navigation item
 * @param alt - Alternative text for the icon (defaults to text if not provided)
 * @param to - Route to navigate to when clicked
 * @param onClick - Optional click handler for custom actions
 */
const SideNavLink: React.FC<SideNavLinkProps> = ({ 
  icon, 
  text, 
  alt, 
  to, 
  onClick 
}) => {
  const navigate = useNavigate();

  /**
   * Handles click events on the navigation item
   * - Executes onClick if provided
   * - Navigates to 'to' route if provided
   */
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  }, [onClick, to, navigate]);

  return (
    <div 
      className="nav-item d-flex align-items-center p-3" 
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
