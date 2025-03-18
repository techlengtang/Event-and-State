import React, { useState } from "react";
import "./index.css"; // Ensure you have this CSS file with .sunny and .rainy styles

function App() {
  const [isRaining, setIsRaining] = useState(false);

  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    return isRaining ? "It's Raning!" : "It's Sunny!";
  }

  function getBackgroundColor() {
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
