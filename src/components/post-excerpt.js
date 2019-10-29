import React from "react";

const PostExcerpt = ({ post }) => (
  <div className="mt-4">
    <a
      className="flex align-center hover:text-gray-900"
      href={post.frontmatter.path}
    >
      <div className="text-gray-900">{post.frontmatter.title}</div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1 -mt-px"
      >
        <path d="M16.5 13V18.5H6.5V8.5H12" stroke="#4A5568"></path>
        <path d="M10 15L18.5 6.5" stroke="#4A5568"></path>
        <path d="M14 6.5H18.5V11" stroke="#4A5568"></path>
      </svg>
    </a>
    <div className="text-gray-700 mt-1">{post.excerpt}</div>
  </div>
);

export default PostExcerpt;
