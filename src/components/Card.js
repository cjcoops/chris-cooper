import React from "react";
import clsx from "clsx";

function Card({ children, className, ...delegated }) {
  return (
    <div
      className={clsx(
        "mb-16 rounded-lg border border-transparent bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-black",
        className
      )}
      {...delegated}
    >
      {children}
    </div>
  );
}

export default Card;
