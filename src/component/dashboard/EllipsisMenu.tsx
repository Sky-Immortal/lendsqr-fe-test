import React from 'react';
import { svgAssets } from '../../shared/constants/imageContent';
import { ellipsisText } from "../../shared/constants/textContent";

interface EllipsisMenuProps {
  onClose: () => void;
  onViewDetails: () => void;
}

const EllipsisMenu: React.FC<EllipsisMenuProps> = ({ onClose, onViewDetails }) => {
  return (
    <div className="ellipsis-menu">
      <ul>
        <li onClick={() => { onViewDetails(); onClose(); }}> 
          <img src={svgAssets.view} alt="Option 1" />{ellipsisText.viewDetails} 
        </li>
        <li onClick={onClose}>
          <img src={svgAssets.deleteUser} alt="Option 2" />{ellipsisText.blacklistUser}
        </li>
        <li onClick={onClose}>
          <img src={svgAssets.activateUser} alt="Option 3" />{ellipsisText.activateUser}
        </li>
      </ul>
    </div>
  );
};

export default EllipsisMenu;