import dynamic from "next/dynamic";

const SelectingRangesWithNthOfType = dynamic(() =>
  import("./SelectingRangesWithNthOfType")
);

export default SelectingRangesWithNthOfType;
