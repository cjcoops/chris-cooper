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
    <div className="absolute top-0 left-0 z-40 flex items-center justify-center w-screen h-screen dark-gradient">
      <div className="text-2xl font-medium text-center text-gray-100">
        {/* <a
          href={data.allFile.edges[0].node.publicURL}
          className="flex items-center justify-center pb-6 group"
          download
        >
          <Download
            width="30"
            height="30"
            className="mr-3 text-blue-200 fill-current group-hover:text-gray-100"
          />
          <div className="pb-1 border-b border-transparent group-hover:text-gray-100 group-hover:border-gray-100">
            Resume
          </div>
        </a> */}
        <a
          href="https://dev.to/cjcoops"
          className="flex items-center justify-center pb-6 "
        >
          <DevTo width="30" height="30" className="mr-3 fill-current " />
          <div className="pb-1 ">Blog</div>
        </a>
        <a
          href="https://github.com/cjcoops"
          className="flex items-center justify-center pb-6 "
        >
          <GitHub width="30" height="30" className="mr-3 fill-current " />
          <div className="pb-1 ">GitHub</div>
        </a>
        <a
          href="https://www.instagram.com/cjcoops/"
          className="flex items-center justify-center pb-6 "
        >
          <Instagram width="30" height="30" className="mr-3 fill-current " />
          <div className="pb-1 ">Instagram</div>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
