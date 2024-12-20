import React from "react";

function ButtonAdd({ onSum, onClear }) {
  return (
    <div>
      <button
        onClick={onSum}
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Somar
      </button>
      <button
        onClick={onClear}
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Limpar
      </button>
    </div>
  );
}

export default ButtonAdd;
