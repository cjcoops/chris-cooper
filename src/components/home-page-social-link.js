import React from "react";

const HomePageSocialLink = ({ href, name }) => (
  <li className="mr-6 md:mr-8">
    <a
      href={href}
      className="border-chris-teal hover:text-chris-blue hover:border-b-2"
    >
      {name}
    </a>
  </li>
);

export default HomePageSocialLink;
