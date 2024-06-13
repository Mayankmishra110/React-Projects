import React from "react";
import { useState } from "react";

export default function App() {
  const [isToggled, setIsToggles] = useState(false);

  const handleToggle = () => {
    setIsToggles(!isToggled);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{isToggled ? "On" : "Off"}</p>
    </div>
  );
}
