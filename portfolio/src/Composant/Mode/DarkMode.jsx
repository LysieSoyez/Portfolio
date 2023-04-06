import React, { useState } from "react";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggle() {
    setIsDarkMode(!isDarkMode);
    toggleDarkModeClass();
  }

  function toggleDarkModeClass() {
    const root = document.getElementById("root");
    if (isDarkMode) {
      root.classList.remove("dark");
      root.classList.add('light');

    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }

  return (
    <>
      <button onClick={handleToggle} className="switchMode">
        {isDarkMode ? "Mode clair" : "Mode sombre"}
      </button>
    </>
  );
}

export default DarkMode;
