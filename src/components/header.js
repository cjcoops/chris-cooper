import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Burger from "./burger";
import Profile from "../images/kew-profile-square.jpg";
import Navigation from "./navigation";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header>
      <div className="mt-5 pb-4 flex items-baseline justify-between flex-grow md:mt-10 ">
        <h1 className="text-m sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium leading-none">
          <Link to="/">chriscooper.cc</Link>
        </h1>
        {/* <a
          href=""
          className="hidden text-gray-700 md:block text-xl border-b border-transparent hover:border-gray-900 hover:text-gray-900 pb-1"
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
