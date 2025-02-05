import { useState } from 'react';

// Custom hook to handle side navigation state
const useSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, toggleSideNav };
};

export default useSideNav;

