// src/components/FormField.jsx
import React from "react";

export const FormField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-400">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 rounded-md bg-[#0E1A09] border border-gray-700 focus:border-green-500 outline-none text-sm"
      />
    </div>
  );
};


