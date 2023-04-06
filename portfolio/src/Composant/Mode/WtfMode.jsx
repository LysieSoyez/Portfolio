import React, { useState } from "react";

function WtfMode() {
  const [isWtfMode, setIsWtfMode] = useState(false);

  function handleToggle() {
    setIsWtfMode(!isWtfMode);
    toggleWtfModeClass();
  }

  function toggleWtfModeClass() {
    const root = document.getElementById("root");
    if (isWtfMode) {
      root.classList.remove("dark");
      root.classList.remove('light');
      root.classList.add('wtf')

    }
  }

  return (
    <>
      <button onClick={handleToggle} className="SecretMode">
        Secret mode
      </button>
    </>
  );
}

export default WtfMode;