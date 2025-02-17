import React from "react";
import Highlight_05 from "../../../assets/red_highlight_sm.svg";

const SideShapeHeading = ({
  children,
  className = "",
  headingClassName = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={Highlight_05}
        className="absolute -left-12 -top-8 max-lg:-left-8 max-lg:-top-6 max-lg:max-w-[40px]"
        alt="Highlight_05"
      />
      <h2
        className={`text-5xl font-semibold text-gray-900 ${headingClassName}`}
      >
        {children}
      </h2>
    </div>
  );
};

export default SideShapeHeading;
