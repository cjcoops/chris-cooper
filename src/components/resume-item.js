import React from "react";
import TickBullet from "./tick-bullet";

const ResumeItem = ({ name, company, location, period, description }) => (
  <div className="border-b border-gray-400 py-6 sm:py-8 lg:py-10">
    <div className="lg:flex items-center justify-between">
      <div>
        <h3 className="text-gray-900 sm:text:lg lg:text-xl">{name}</h3>
        <div className="flex flex-wrap text-gray-700 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">
          <div>{company}</div>
          <div className="mx-3 text-gray-500">•</div>
          <div>{location}</div>
          <div className="mx-3 text-gray-500">•</div>
          <div>{period}</div>
        </div>
        {description ? (
          <ul className="text-gray-700 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">
            {description.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  </div>
);

export default ResumeItem;
