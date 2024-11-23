import React from "react";

export const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-white border-b border-indigo-400"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
