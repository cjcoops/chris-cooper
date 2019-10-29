import React from "react";
import DevTo from "../svg/dev-badge.svg";
import Instagram from "../svg/instagram.svg";
import GitHub from "../svg/github.svg";
import Download from "../svg/download-1.svg";
import { useStaticQuery, graphql } from "gatsby";

// import Resume from "../assets/resume.pdf";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <div className="flex h-screen w-screen absolute top-0 left-0 z-40 bg-blue-900 items-center justify-center">
      <div className="text-center text-blue-200 text-2xl font-medium">
        <a
          href={data.allFile.edges[0].node.publicURL}
          className="flex items-center justify-center pb-6 group"
          download
        >
          <Download
            width="30"
            height="30"
            className="fill-current text-blue-200 mr-3 group-hover:text-gray-100"
          />
          <div className="pb-1 group-hover:text-gray-100 border-b border-transparent group-hover:border-gray-100">
            Resume
          </div>
        </a>
        <a
          href="https://dev.to/cjcoops"
          className="flex items-center justify-center pb-6 group"
        >
          <DevTo
            width="30"
            height="30"
            className="fill-current text-blue-200 mr-3 group-hover:text-gray-100"
          />
          <div className="pb-1 group-hover:text-gray-100 border-b border-transparent group-hover:border-gray-100">
            Blog
          </div>
        </a>
        <a
          href="https://github.com/cjcoops"
          className="flex items-center justify-center pb-6 group"
        >
          <GitHub
            width="30"
            height="30"
            className="fill-current text-blue-200 mr-3 group-hover:text-gray-100"
          />
          <div className="pb-1 group-hover:text-gray-100 border-b border-transparent group-hover:border-gray-100">
            GitHub
          </div>
        </a>
        <a
          href="https://www.instagram.com/cjcoops/"
          className="flex items-center justify-center pb-6 group"
        >
          <Instagram
            width="30"
            height="30"
            className="fill-current text-blue-200 mr-3 group-hover:text-gray-100"
          />
          <div className="pb-1 group-hover:text-gray-100 border-b border-transparent group-hover:border-gray-100">
            Instagram
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
