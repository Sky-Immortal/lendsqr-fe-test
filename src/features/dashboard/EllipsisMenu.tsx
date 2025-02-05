import React from 'react';
import { svgAssets } from '../../assets/images/index';

interface EllipsisMenuProps {
  onClose: () => void;
  onViewDetails: () => void;
}

const EllipsisMenu: React.FC<EllipsisMenuProps> = ({ onClose, onViewDetails }) => {
  return (
    <div className="ellipsis-menu">
      <ul>
        <li onClick={() => { onViewDetails(); onClose(); }}> 
          <img src={svgAssets.view} alt="Option 1" /> View Details
        </li>
        <li onClick={onClose}>
          <img src={svgAssets.deleteUser} alt="Option 2" /> Blacklist User
        </li>
        <li onClick={onClose}>
          <img src={svgAssets.activateUser} alt="Option 3" /> Activate User
        </li>
      </ul>
    </div>
  );
};

export default EllipsisMenu;