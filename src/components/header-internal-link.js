import { Link } from "gatsby";
import React from "react";

const HeaderInternalLink = ({ label, to }) => (
  <Link to={`/${to}`} className="block pb-6 border-b border-transparent">
    {label}
  </Link>
);

export default HeaderInternalLink;
