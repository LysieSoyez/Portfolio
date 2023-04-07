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
      root.classList.remove('dark');
      root.classList.remove('light');
      root.classList.add('wtf');
    } else  if (root.classList == 'dark'){
      root.classList.remove ('dark');
      root.classList.add('wtf');
    } else if (root.classList == 'light'){
      root.classList.remove('light');
      root.classList.add('wtf');
    } else if (root.classList == 'wtf'){
      root.classList.remove('wtf');
      root.classList.add('light');
    }
  }

  return (
    <>
      <button onClick={handleToggle} id="SecretMode">
        Secret mode
      </button>
    </>
  );
}

export default WtfMode;