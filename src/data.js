import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}

export async function getNoteList(tag) {
  const fileNames = await readDirectory("/notes");

  const notes = [];
  const tags = new Set();

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/notes/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    for (const tag of frontmatter.tags) {
      tags.add(tag);
    }

    if (tag && !frontmatter.tags.includes(tag)) {
      continue;
    }

    notes.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    });
  }

  return {
    notes: notes.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1)),
    tags: Array.from(tags).sort(),
  };
}

export const loadNote = cache(async function loadNote(slug) {
  const rawContent = await readFile(`/notes/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});
