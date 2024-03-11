import React from "react";
import Link from "next/link";
import { format } from "date-fns";

import Card from "@/components/Card";
import TagsList from "./TagsList";

function NoteSummaryCard({ slug, title, publishedOn, abstract, tags }) {
  const href = `/${slug}`;
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <Card className="mb-4 w-full max-w-5xl">
      <Link
        href={href}
        className="mb-2 block text-2xl font-medium leading-5  decoration-2 underline-offset-2 transition-colors duration-200 hover:underline"
      >
        {title}
      </Link>
      <time
        dateTime={publishedOn}
        className="mb-2 block text-lg font-medium text-amber-800 dark:text-amber-500"
      >
        {humanizedDate}
      </time>
      <TagsList tags={tags} className="text-sm" />
      <p className=" mb-0 line-clamp-1 text-lg">{abstract}</p>
    </Card>
  );
}

export default NoteSummaryCard;
