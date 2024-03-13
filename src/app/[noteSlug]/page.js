import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import NoteHero from "@/components/NoteHero";
import { loadNote } from "@/data";
import { SITE_TITLE } from "@/constants";
import { COMPONENT_MAP } from "@/component-map";

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadNote(params.noteSlug);

  return {
    title: `${frontmatter.title} | ${SITE_TITLE}`,
    description: `${frontmatter.abstract}`,
  };
}

async function Note({ params }) {
  const { frontmatter, content } = await loadNote(params.noteSlug);

  return (
    <article className="relative pb-56">
      <NoteHero
        title={frontmatter.title}
        publishedOn={new Date(frontmatter.publishedOn)}
        tags={frontmatter.tags}
      />
      <div className="mx-auto my-0 max-w-7xl bg-white shadow-lg xl:rounded-lg dark:border dark:border-gray-800 dark:bg-gray-900">
        <div className="!prose-pre:rounded-none prose prose-gray mx-auto my-0 max-w-4xl px-3 py-12 md:prose-xl dark:prose-invert md:px-4">
          <MDXRemote source={content} components={COMPONENT_MAP} />
        </div>
      </div>
    </article>
  );
}

export default Note;
