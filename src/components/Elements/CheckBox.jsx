import React from "react";

const CheckBox = (props) => {
  const { label, name } = props;
  return (
    <div className="flex items-center mb-6">
      <input
        type="checkbox"
        className="text-sm accent-teal-600 w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500"
        name={name}
        id={name}
      />
      <label htmlFor={name} className="ml-2 text-sm text-slate-500">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;