import { useState, useCallback } from "react";

// Reusable Button Component with styling
const Button = ({ onClick, children }) => {
  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    transition: "background-color 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#45a049",
  };
console.log(children)
  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
      onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
    >
      {children}
    </button>
  );
};

// Main Component
export default function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  const countStyle = {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={countStyle}>Count: {count}</h2>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
