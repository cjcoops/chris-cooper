import React from "react";
import { graphql } from "gatsby";
import Profile from "../images/kew-profile-square.jpg";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import PostExcerpt from "../components/post-excerpt";

import DevTo from "../svg/dev-badge.svg";
import Instagram from "../svg/instagram.svg";
import GitHub from "../svg/github.svg";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className=" sm:text-2xl md:text-3xl lg:text-4xl md:font-light text-gray-700">
      <div>
        <div className="mx-auto flex justify-center h-40 w-40 md:float-right md:ml-5 ">
          <img
            src={Profile}
            alt="Chris Cooper"
            className="h-full object-cover rounded-full shadow-inner"
          />
        </div>
        <p className="mt-6">Hi, I'm Chris.</p>
        <p className="mt-4 sm:mt-8">
          I'm a web developer from England currently living and working in
          Vancouver.
        </p>
        <p className="mt-4 sm:mt-8">
          I'm passionate about JavaScript and writing clean, tested and
          maintainable code.
        </p>
      </div>
    </div>
    <div className="mt-6 pt-6 border-gray-400 border-t sm:text-2xl">
      <h2 className="font-medium text-gray-900">Latest Posts</h2>
      <div>
        {edges.map(edge => (
          <PostExcerpt key={edge.node.id} post={edge.node} />
        ))}
      </div>
    </div>
    <div className="border-gray-400 border-t pt-6 mt-6 sm:mt-8 md:mt-10 mb-20 md:flex justify-between items-center">
      <p className=" text-gray-700 text-xs sm:text:base lg:text-lg">
        Built with&nbsp;
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
        &nbsp;and hosted on&nbsp;
        <a
          href="https://www.netlify.com/"
          className="border-b border-gray-900 text-gray-900"
        >
          Netlify
        </a>
        &nbsp;<span>💙</span>
      </p>
      <div className="hidden md:flex">
        <a href="https://dev.to/cjcoops" className="">
          <DevTo
            width="30"
            height="30"
            className="fill-current text-gray-600 mr-4 hover:text-gray-900"
          />
        </a>
        <a href="https://github.com/cjcoops" className="">
          <GitHub
            width="30"
            height="30"
            className="fill-current text-gray-600 mr-4 hover:text-gray-900"
          />
        </a>
        <a href="https://www.instagram.com/cjcoops/" className="">
          <Instagram
            width="30"
            height="30"
            className="fill-current text-gray-600 hover:text-gray-900"
          />
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;

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
