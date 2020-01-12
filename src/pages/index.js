import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomePageSocialLink from "../components/home-page-social-link";

import DevTo from "../svg/dev-badge.svg";
import Instagram from "../svg/instagram.svg";
import GitHub from "../svg/github.svg";
import LinkedIn from "../svg/linkedin.svg";

const IndexPage = ({
  data: {
    // allMarkdownRemark: { edges },
    site: { siteMetadata },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <div className="text-gray-700 sm:text-2xl ">
      <div>
        <p className="mt-6 max-w-60ch">
          Hey, I'm&nbsp;
          <strong className="font-medium text-chris-blue">Chris</strong>&nbsp;
          <span role="img" aria-label="peace">
            ✌
          </span>
          . I'm a&nbsp;
          <strong className="font-medium text-chris-blue">web developer</strong>
          &nbsp;from England currently living and working in&nbsp;
          <strong className="font-medium text-chris-blue">Vancouver</strong>.
          I'm passionate about&nbsp;
          <strong className="font-medium text-chris-blue">
            JavaScript
          </strong>{" "}
          and writing{" "}
          <strong className="font-medium text-chris-blue">quality code</strong>{" "}
          to build awesome web applications.
        </p>
      </div>
    </div>
    <ul className="flex-wrap hidden mt-8 font-medium text-gray-600 sm:flex text-m md:text-xl ">
      <HomePageSocialLink href={siteMetadata.devTo} name="Dev.to" />
      <HomePageSocialLink href={siteMetadata.github} name="GitHub" />
      <HomePageSocialLink href={siteMetadata.linkedIn} name="LinkedIn" />
      <HomePageSocialLink href={siteMetadata.instagram} name="Instagram" />
      <HomePageSocialLink href={`mailto:${siteMetadata.email}`} name="Email" />
    </ul>
    {/* <div className="pt-6 mt-6 border-t border-gray-400 sm:text-2xl">
      <h2 className="font-medium text-gray-900">Latest Posts</h2>
      <div>
        {edges.map(edge => (
          <PostExcerpt key={edge.node.id} post={edge.node} />
        ))}
      </div>
    </div> */}
    <div className="items-center justify-between pt-6 mt-6 mb-20 border-t border-gray-400 sm:mt-8 md:mt-10 sm:flex">
      <p className="text-xs text-gray-700 sm:text:base md:text-lg">
        Built with&nbsp;
        <a
          href="https://www.gatsbyjs.org/"
          className="text-gray-900 border-gray-900 hover:border-b"
        >
          Gatsby
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://tailwindcss.com"
          className="text-gray-900 border-gray-900 hover:border-b"
        >
          TailwindCSS
        </a>
        &nbsp;and hosted on&nbsp;
        <a
          href="https://www.netlify.com/"
          className="text-gray-900 border-gray-900 hover:border-b"
        >
          Netlify
        </a>
        &nbsp;
        <span role="img" aria-label="love">
          💙
        </span>
      </p>
      <div className="hidden sm:flex">
        <a href={siteMetadata.devTo} className="">
          <DevTo className="footer-social-link" />
        </a>
        <a href={siteMetadata.github} className="">
          <GitHub className="footer-social-link" />
        </a>
        <a href={siteMetadata.linkedIn} className="">
          <LinkedIn className="footer-social-link" />
        </a>
        <a href={siteMetadata.instagram} className="">
          <Instagram className="mr-0 footer-social-link" />
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
    site {
      siteMetadata {
        github
        linkedIn
        instagram
        devTo
        email
        title
      }
    }
  }
`;

// {
/* <Layout>
<SEO title="Home" />
<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div>

<div
  className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded"
  role="alert"
>
  <strong className="font-bold">Holy smokes!</strong>
  <span className="block sm:inline">Something seriously bad happened.</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg
      className="w-6 h-6 text-red-500 fill-current"
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
// }
