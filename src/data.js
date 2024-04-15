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

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/notes/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    if (tag && !frontmatter.tags.includes(tag)) {
      continue;
    }

    notes.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    });
  }

  return notes.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export const loadNote = cache(async function loadNote(slug) {
  const rawContent = await readFile(`/notes/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});
