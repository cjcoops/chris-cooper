import React from "react";

const Navigation = () => (
  <div className="flex h-screen w-screen absolute top-0 left-0 z-40 bg-blue-900 items-center justify-center">
    <div className="text-center text-gray-100 text-2xl font-medium">
      <a className="block pb-6 border-b border-transparent hover:text-gray-900">
        Resume
      </a>
      <a className="block pb-6 border-b border-transparent hover:text-gray-900">
        Instagram
      </a>
      <a className="block pb-6 border-b border-transparent hover:text-gray-900">
        GitHub
      </a>
      {/* <HeaderInternalLink label="Resume" to="resume" />
      <HeaderExternalLink
        label="Instagram"
        href="https://www.instagram.com/cjcoops/"
      />
      <HeaderExternalLink label="GitHub" href="https://github.com/cjcoops" /> */}
    </div>
  </div>
);

export default Navigation;
