import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

function SelectingRangesWithNthOfType() {
  return (
    <div className="grid grid-cols-[repeat(4,_1fr)] gap-4 border-4 border-[blue] p-4">
      {[...Array(12)].map((_, index) => (
        <div key={index} className={clsx("p-8", styles.box)}></div>
      ))}
    </div>
  );
}

export default SelectingRangesWithNthOfType;
