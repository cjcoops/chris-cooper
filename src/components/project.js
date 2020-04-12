import React from "react";

const Project = ({ project }) => {
  return (
    <div className="my-8 text-base">
      <a
        className="block font-medium text-gray-900"
        href={project.url || project.github}
      >
        {project.name}
      </a>
      <div className="mt-1 text-gray-700 max-w-60ch">{project.description}</div>
      <a
        className="inline-block text-sm text-chris-blue transition-fast hover:translate-r-3px"
        href={project.github}
      >
        View code on GitHub →
      </a>
    </div>
  );
};

export default Project;
