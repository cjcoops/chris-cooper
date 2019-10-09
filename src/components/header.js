import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import HeaderInternalLink from "./header-internal-link";
import HeaderExternalLink from "./header-external-link";
import Burger from "./burger";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <header>
      <div>
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium md:font-normal leading-none">
            <Link to="/">Chris Cooper</Link>
          </h1>
          <Burger
            isExpanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
        <div className={`${isExpanded ? "block" : "hidden"} lg:block`}>
          <div className="w-full block lg:flex lg:justify-between lg:border-b lg:border-gray-400 mt-10 text-gray-700 font-medium lg:text-lg">
            <div className="lg:flex -mb-px">
              <HeaderInternalLink label="Resume" to="resume" />
            </div>
            <div className="lg:flex">
              <HeaderExternalLink
                label="Instagram"
                href="https://www.instagram.com/cjcoops/"
              />
              <HeaderExternalLink
                label="GitHub"
                href="https://github.com/cjcoops"
                classes="mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }
{
  /* <header
style={{
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
}}
>
<div
  style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}
>
  <h1 style={{ margin: 0 }}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </h1>
</div> */
}
