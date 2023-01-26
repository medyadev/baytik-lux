import React from "react";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <div className="w-full">
      <p className={activeTab === id ? "active" : ""}></p>
      <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
        {title}
      </li>
    </div>
  );
};
export default TabNavItem;
