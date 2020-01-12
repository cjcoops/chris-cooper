import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Burger from "./burger";
import Navigation from "./navigation";

const Header = ({ siteTitle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setIsExpanded(false));
    return window.removeEventListener("resize", () => setIsExpanded(false));
  }, []);

  return (
    <header>
      <div className="flex items-baseline justify-between flex-grow pb-4 mt-5 md:mt-10 ">
        <h1 className="text-xl font-bold leading-none text-gray-900 sm:text-2xl md:text-3xl">
          <Link to="/">{siteTitle}</Link>
        </h1>
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
