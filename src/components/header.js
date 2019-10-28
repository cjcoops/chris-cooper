import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Burger from "./burger";
import Profile from "../images/kew-profile-square.jpg";
import Navigation from "./navigation";

// Links - GitHub, DevTo, Instagram,

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(isExpanded);

  return (
    <header>
      <div>
        <div className="mt-5">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-900 font-medium md:font-normal leading-none">
            <Link to="/">Chris Cooper</Link>
          </h1>
          <div className="flex justify-center mt-5">
            <img
              src={Profile}
              alt="Chris Cooper"
              className="h-40 object-cover rounded-full shadow-inner"
            />
          </div>
          {/* <div className="flex items-center">
            <img
              src={Profile}
              alt="Chris Cooper"
              className="h-16 object-cover rounded-full mr-3"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-900 font-medium md:font-normal leading-none">
              <Link to="/">Chris Cooper</Link>
            </h1>
          </div> */}
        </div>
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
