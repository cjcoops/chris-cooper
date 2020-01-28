import React from "react";

const PostExcerpt = ({ post }) => (
  <div className="my-8 text-base">
    <a
      className="block font-medium text-gray-900"
      href={post.frontmatter.devTo}
    >
      {post.frontmatter.title}
    </a>
    <div className="hidden mt-1 text-gray-700 md:block max-w-60ch">
      {post.excerpt}
    </div>
    <a
      className="inline-block text-sm text-chris-blue transition-fast hover:translate-r-3px"
      href={post.frontmatter.devTo}
    >
      Read on Dev.to →
    </a>
  </div>
);

export default PostExcerpt;
