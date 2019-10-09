import React from "react";

const ResumeItem = () => (
  <div className="border-b border-gray-400 py-6 sm:py-8 lg:py-10">
    <div className="lg:flex items-center justify-between">
      <div>
        <h3 className="text-gray-900 sm:text:lg lg:text-xl">
          Software Developer
        </h3>
        <div className="flex flex-wrap text-gray-700 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">
          <div>KORE Software</div>
          <div className="mx-3 text-gray-500">•</div>
          <div>Vancouver, BC</div>
          <div className="mx-3 text-gray-500">•</div>
          <div>Sep 2018 - Current</div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumeItem;
