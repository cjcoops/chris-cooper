import React from "react";
import DevTo from "../svg/dev-badge.svg";
import Instagram from "../svg/instagram.svg";
import GitHub from "../svg/github.svg";
import LinkedIn from "../svg/linkedin.svg";
import { useStaticQuery, graphql } from "gatsby";

// import Resume from "../assets/resume.pdf";

const Navigation = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          github
          linkedIn
          instagram
          devTo
        }
      }
    }
  `);

  return (
    <div className="absolute top-0 left-0 z-40 flex items-center justify-center w-screen h-screen dark-gradient">
      <div className="text-2xl font-medium text-center text-gray-100">
        <a
          href={siteMetadata.devTo}
          className="flex items-center justify-center pb-6 "
        >
          <DevTo width="30" height="30" className="mr-3 fill-current " />
          <div className="pb-1 ">Dev.to</div>
        </a>
        <a
          href={siteMetadata.github}
          className="flex items-center justify-center pb-6 "
        >
          <GitHub width="30" height="30" className="mr-3 fill-current " />
          <div className="pb-1 ">GitHub</div>
        </a>
        <a
          href={siteMetadata.linkedIn}
          className="flex items-center justify-center pb-6 "
        >
          <LinkedIn width="30" height="30" className="mr-3 fill-current " />
          <div className="pb-1 ">LinkedIn</div>
        </a>
        <a
          href={siteMetadata.instagram}
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
