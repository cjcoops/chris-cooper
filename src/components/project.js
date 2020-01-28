import React from "react";

const Project = () => {
  return (
    <div className="my-8 text-base">
      <a
        className="block font-medium text-gray-900"
        href="https://us-states.netlify.com/"
      >
        US State Machines{" "}
      </a>
      <div className="mt-1 text-gray-700 max-w-60ch">
        A game to learn US States built with State Machines and React
      </div>
      <a
        className="inline-block text-sm text-chris-blue transition-fast hover:translate-r-3px"
        href="https://github.com/cjcoops/us-state-machine"
      >
        View code on GitHub →
      </a>
    </div>
  );
};

export default Project;
