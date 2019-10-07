import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl md:font-light text-gray-700">
      <p className="mt-10">Hi, I'm Chris Cooper.</p>
      <p className="mt-6 sm:mt-8 md:mt-10">
        I'm a web developer from the United Kingdom living in Vancouver, Canada.
        🇨🇦
      </p>
      <p className="mt-6 sm:mt-8 md:mt-10">
        I'm passionate about JavaScript and writing clean, tested and
        maintainable code.
      </p>
    </div>
    <p className="border-gray-400 border-t pt-6 mt-6 sm:mt-8 md:mt-10 mb-20 text-gray-700 text-sm sm:text:base lg:text-lg">
      This website was built with{" "}
      <a
        href="https://www.gatsbyjs.org/"
        className="border-b border-gray-900 text-gray-900"
      >
        Gatsby
      </a>
      &nbsp;and&nbsp;
      <a
        href="https://tailwindcss.com"
        className="border-b border-gray-900 text-gray-900"
      >
        TailwindCSS
      </a>
    </p>
  </Layout>
);

export default IndexPage;

{
  /* <Layout>
<SEO title="Home" />
<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div>

<div
  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
  role="alert"
>
  <strong className="font-bold">Holy smokes!</strong>
  <span className="block sm:inline">Something seriously bad happened.</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg
      className="fill-current h-6 w-6 text-red-500"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>Close</title>
      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
    </svg>
  </span>
</div>

<Link to="/page-2/">Go to page 2</Link>
</Layout> */
}
