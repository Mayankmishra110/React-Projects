import React from "react";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ backgroundColor: "white", margin: "5px", padding: "20px" }}>
        <input
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="Enter text"
        />
        <br />
        <p>User Input: {input}</p>
      </div>
    </div>
  );
}
