import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="
      bg-white p-4 rounded-lg shadow-md transition-all duration-300 
      flex flex-col justify-between 
      hover:scale-[1.03] hover:shadow-xl hover:border hover:border-black hover:bg-pink-50"
    >
      <div className="text-center">
        <h2 className="text-sm font-bold mb-2 capitalize leading-tight">
          {title}
        </h2>
        <p className="text-gray-700 text-xs">{body}</p>
      </div>

      <button
        onClick={() => setIsClicked(true)}
        disabled={isClicked}
        className={`
          mt-4 w-full p-2 rounded-md text-white text-sm font-medium
          transition-all duration-200
          ${isClicked ? "bg-Special-Red2" : "bg-gray-500"}
          hover:brightness-110
          disabled:opacity-70
        `}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;