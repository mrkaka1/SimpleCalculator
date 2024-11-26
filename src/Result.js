import React from "react";

function Result({ result }) {
  return (
    <div>
      {result !== null && (
        <h2 style={{ color: "#007bff" }}>result: {result}</h2>
      )}
    </div>
  );
}

export default Result;
