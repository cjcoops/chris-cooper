import React from "react";
import { Spline_Sans_Mono, Noto_Sans_Display } from "next/font/google";
import clsx from "clsx";

import { SITE_TITLE, COLOUR_THEME_COOKIE_NAME } from "@/constants";

import Header from "@/components/Header";
import "./styles.css";

import { cookies } from "next/headers";

const mainFont = Noto_Sans_Display({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata = {
  title: SITE_TITLE,
  description: "Chris Cooper's personal site.",
};

function RootLayout({ children }) {
  const savedTheme = cookies().get(COLOUR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || "light";

  return (
    <html
      lang="en"
      className={clsx(
        mainFont.variable,
        monoFont.variable,
        theme === "dark" ? "dark" : "",
        " bg-purple-200 text-gray-900  transition-colors duration-200 selection:bg-amber-300  dark:bg-gray-700 dark:text-gray-100 dark:selection:bg-amber-700"
      )}
    >
      <head>
        <link rel="icon" href="https://fav.farm/🍍" />
      </head>
      <body className="relative flex min-h-screen flex-col">
        <div className="absolute left-0 top-0 h-screen w-full bg-gradient-to-b from-purple-50 to-purple-200 dark:bg-gray-900 dark:from-gray-900 dark:to-gray-700" />
        <Header initialTheme={theme} />
        <main className="relative flex-1">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
