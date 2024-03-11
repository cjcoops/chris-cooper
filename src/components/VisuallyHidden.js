import React from "react";
import clsx from "clsx";

function VisuallyHidden({
  as: Element = "span",
  className,
  children,
  ...delegated
}) {
  return (
    <Element
      className={clsx(
        "absolute m-px size-px overflow-hidden border-[0] p-0 [clip:rect(0_0_0_0)]",
        className
      )}
      {...delegated}
    >
      {children}
    </Element>
  );
}

export default VisuallyHidden;
