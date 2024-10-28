import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full border border-gray-300 rounded-lg shadow-md overflow-hidden h-[400px] sm:w-[430px] transition-transform hover:scale-105">
      <Link to={`/post/${post.slug}`} className="block relative">
        {/* Post image with overlay and hover transition */}
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover transition-all duration-300 group-hover:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>

      {/* Post content */}
      <div className="p-4 flex flex-col gap-2">
        <p className="text-lg font-semibold  line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
          {post.title}
        </p>
        <span className="italic text-sm text-gray-500">{post.category}</span>
      </div>

      {/* "Read article" button with smooth slide-up animation */}
      <Link
        to={`/post/${post.slug}`}
        className="absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-teal-500 text-white text-center py-3 rounded-t-md"
      >
        Read article
      </Link>
    </div>
  );
}
