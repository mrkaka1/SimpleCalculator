import React from "react";

function InputNumber({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        style={{ padding: "5px", fontSize: "16px" }}
      />
    </div>
  );
}

export default InputNumber;
