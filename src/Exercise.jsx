import React from "react";
import UserCard from "./PostCard";
import posts from "./postsData.js";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-Special-Red2">
        Post Cards
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {posts.map((post) => (
          <UserCard
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;