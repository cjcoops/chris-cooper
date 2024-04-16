import React from "react";
import Link from "next/link";

function TagsFilterItem({ tag }) {
  return (
    <li className="mb-1 mr-1 inline-block rounded-2xl border border-dotted border-amber-800 bg-amber-100 px-4 py-1 font-medium text-amber-800  dark:border-amber-100 dark:bg-amber-800 dark:text-amber-100">
      {tag}
    </li>
  );
}

function TagsFilter({ tags }) {
  return (
    <ul className="mb-4 w-full">
      <Link href={`/`}>
        <TagsFilterItem tag="all" />
      </Link>
      {tags?.map((tag) => (
        <Link href={`/?tag=${tag}`} key={tag}>
          <TagsFilterItem tag={tag} />
        </Link>
      ))}
    </ul>
  );
}

export default TagsFilter;
