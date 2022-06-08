import React from "react";

function FormRow({
  label,
  type,
  name,
  value,
  handleChange,
  icon,
  placeholder,
  labelText,
}) {
  return (
    <div className="w-full mt-3">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-800 uppercase"
      >
        {labelText || label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-800 text-lg">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full outline-none pl-10 p-2.5"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default FormRow;
