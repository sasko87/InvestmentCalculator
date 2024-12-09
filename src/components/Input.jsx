import React from "react";

const Input = ({ label, onChange, value }) => {
  return (
    <>
      <div>
        <label className="label">{label}</label>
        <input
          type="number"
          className="input"
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
};

export default Input;
