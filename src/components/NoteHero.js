import React from "react";
import { format } from "date-fns";
import clsx from "clsx";
import TagsList from "@/components/TagsList";

function NoteHero({ title, publishedOn, tags, className, ...delegated }) {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <header
      className={clsx(
        "relative mx-auto my-0 flex w-full max-w-4xl flex-col items-center justify-end px-3 pb-16 pt-20 md:px-4",
        className
      )}
      {...delegated}
    >
      <div className="relative mx-auto my-0 w-full max-w-6xl">
        <h1 className="mb-2 text-3xl font-semibold">{title}</h1>
        <p className="mb-3 text-lg font-normal text-amber-800 dark:text-amber-500">
          <time className="font-medium" dateTime={publishedOn}>
            {humanizedDate}
          </time>
        </p>
        <TagsList tags={tags} className="text-xl" />
      </div>
    </header>
  );
}

export default NoteHero;
