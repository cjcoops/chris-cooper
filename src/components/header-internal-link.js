import { Link } from "gatsby";
import React from "react";

const HeaderInternalLink = ({ label, to }) => (
  <Link
    to={`/${to}`}
    className="block pb-6 border-b border-transparent lg:mt-0 lg:mr-8 hover:text-gray-900"
    activeClassName="lg:border-gray-900 text-gray-900"
  >
    {label}
  </Link>
);

export default HeaderInternalLink;
