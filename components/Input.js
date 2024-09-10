"use client";
import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Type here"
      className="input input-bordered input-info w-full max-w-xs rounded-none"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
