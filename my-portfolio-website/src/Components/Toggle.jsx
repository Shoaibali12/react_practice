import React, { useState } from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";

export default function Toggle() {
  const [isNightMode, setIsNightMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsNightMode((prevMode) => !prevMode);
    // Apply the theme to the body or a parent element
    if (!isNightMode) {
      document.body.classList.add("night-mode");
      document.body.classList.remove("day-mode");
    } else {
      document.body.classList.add("day-mode");
      document.body.classList.remove("night-mode");
    }
  };

  return (
    <div className="toggle" onClick={toggleTheme}>
      <Moon className={isNightMode ? "active" : ""} />
      <Sun className={!isNightMode ? "active" : ""} />
      <div
        className="t-btn"
        style={{
          transform: isNightMode ? "translateX(100%)" : "translateX(0)",
        }}
      ></div>
    </div>
  );
}
