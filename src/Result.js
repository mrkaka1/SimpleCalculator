import React from "react";

function Result({ resultado }) {
  return (
    <div>
      {resultado !== null && (
        <h2 style={{ color: "#007bff" }}>Resultado: {resultado}</h2>
      )}
    </div>
  );
}

export default Result;
