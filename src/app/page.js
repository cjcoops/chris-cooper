/* eslint-disable react/no-unescaped-entities */
import React from "react";

import NoteSummaryCard from "@/components/NoteSummaryCard";
import { getNoteList } from "@/data";

async function Home() {
  const notes = await getNoteList();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-3 py-16 sm:px-4">
      <h2 className="mb-8 mt-4 text-3xl font-semibold">About</h2>
      <div className="mb-8 grid gap-8 text-lg">
        <p>
          👋 Hi, I'm Chris. Welcome to my site! I'm a software engineer living
          in Vancouver, BC, specialzing in front-end and the web.
        </p>
        <p>
          I use this site to make notes of what I've learnt in the world of
          JavaScript, TypeScript, CSS, Vue.js, React etc. It's mainly just a way
          for me to remember new stuff I learn but hopefully you'll find it
          useful too!
        </p>
      </div>
      <h2 className="mb-8 mt-4 text-3xl font-semibold">Latest Notes</h2>

      {notes.map(({ slug, ...delegated }) => (
        <NoteSummaryCard key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Home;
