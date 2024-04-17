"use client";
import React from "react";
import Link from "next/link";
import Cookie from "js-cookie";
import clsx from "clsx";
import { Sun, Moon, Linkedin, GitHub } from "react-feather";

import VisuallyHidden from "@/components/VisuallyHidden";
import {
  SITE_TITLE,
  LINKED_IN_URL,
  GITHUB_URL,
  COLOUR_THEME_COOKIE_NAME,
} from "@/constants";

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleColourThemeChange() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookie.set(COLOUR_THEME_COOKIE_NAME, nextTheme, {
      expires: 500,
    });

    const root = document.documentElement;

    if (nextTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  return (
    <header
      className={clsx(
        "relative mx-auto flex h-20 w-full max-w-4xl items-center justify-between px-3 md:px-4",
        className
      )}
      {...delegated}
    >
      <Link
        href="/"
        className="text-2xl font-semibold tracking-tight no-underline 	 "
      >
        {SITE_TITLE}
      </Link>

      <div className="flex items-center">
        <a
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-gray-700 transition duration-200 hover:bg-yellow-300 dark:text-white dark:hover:bg-black"
          href={GITHUB_URL}
        >
          <GitHub size="1.5rem" />
          <VisuallyHidden>GitHub</VisuallyHidden>
        </a>
        <a
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-gray-700 transition duration-200 hover:bg-yellow-300 dark:text-white dark:hover:bg-black"
          href={LINKED_IN_URL}
        >
          <Linkedin size="1.5rem" />
          <VisuallyHidden>LinkedIn</VisuallyHidden>
        </a>
        <button
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-gray-700 transition duration-200 hover:bg-yellow-300 dark:text-white dark:hover:bg-black"
          onClick={handleColourThemeChange}
        >
          {theme === "dark" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark/light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
