import React from "react";

// src/components/Elements/Card.jsx

const Card = (props) => {
  const { title, desc } = props;
  return (
    /* PERBAIKAN: Pastikan tidak ada class 'shadow', 'shadow-sm', atau 'shadow-md'.
       Gunakan 'border border-gray-100' agar terlihat datar.
    */
    <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      </div>
      <div>{desc}</div>
    </div>
  );
};

export default Card;