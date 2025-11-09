import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <p>Current Count: {count}</p>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
          margin: "5px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
        onMouseOver={(e) => (e.target.style.backgroundColor = "darkred")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
      >
        Increment
      </button>

      <button
        style={{
          backgroundColor: "green",
          color: "white",
          margin: "5px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count - 1)}
        onMouseOver={(e) => (e.target.style.backgroundColor = "darkgreen")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
      >
        Decrement
      </button>

      <button
        style={{
          backgroundColor: "gray",
          color: "white",
          margin: "5px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setCount(0)}
        onMouseOver={(e) => (e.target.style.backgroundColor = "darkgray")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "gray")}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
