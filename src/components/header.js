import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import Burger from "./burger";
import Profile from "../images/kew-profile-square.jpg";
import Navigation from "./navigation";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setIsExpanded(false));
  }, []);

  return (
    <header>
      <div className="flex items-baseline justify-between flex-grow pb-4 mt-5 md:mt-10 ">
        <h1 className="font-medium leading-none text-gray-900 text-m sm:text-xl md:text-2xl lg:text-3xl">
          <Link to="/">chriscooper.cc</Link>
        </h1>
        {/* <a
          href=""
          className="hidden pb-1 text-xl text-gray-700 border-b border-transparent md:block hover:border-gray-900 hover:text-gray-900"
        >
          Resume
        </a> */}
      </div>
      <Burger
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      />
      {isExpanded ? <Navigation /> : null}
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
