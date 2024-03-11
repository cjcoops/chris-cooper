import clsx from "clsx";
import React from "react";

function TagsList({ tags, className }) {
  return (
    <ul>
      {tags?.map((tag) => (
        <li
          key={tag}
          className={clsx(
            "mb-1 mr-1 inline-block rounded-md border border-dotted border-amber-800 bg-amber-100 px-2 pb-1 font-medium text-amber-800  dark:border-amber-100 dark:bg-amber-800 dark:text-amber-100",
            className
          )}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagsList;
