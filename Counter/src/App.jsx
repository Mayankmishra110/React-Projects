import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2 style={{ backgroundColor: "red", marginTop: "0px" }}>
        My counter app
      </h2>
      <button
        onClick={inc}
        style={{
          backgroundColor: "green",
          color: "white",
          margin: "10px",
          padding: "30px",
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={dec}
        style={{
          backgroundColor: "blue",
          color: "white",
          margin: "10px",
          padding: "30px",
          border: "15px",
        }}
      >
        -
      </button>
    </div>
  );
}
