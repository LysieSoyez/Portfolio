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
      root.classList.remove('wtf');
      root.classList.add('light');

    } else {
      root.classList.add("dark");
      root.classList.remove("light");
      root.classList.remove('wtf');
    }
  }

  return (
    <>
      <button onClick={handleToggle} id="switchMode">
        {isDarkMode ? "Mode clair" : "Mode sombre"}
      </button>
    </>
  );
}

export default DarkMode;
