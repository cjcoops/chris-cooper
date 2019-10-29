import React from "react";

const Burger = ({ isExpanded, onClick }) => (
  <div
    className="md:hidden absolute z-50"
    style={{ top: "1rem", right: "1rem" }}
  >
    <button type="button" onClick={onClick}>
      {isExpanded ? (
        <svg
          role="button"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-teal-500"
        >
          <path d="M4 4L20 20M20 4L4 20" stroke="white"></path>
        </svg>
      ) : (
        <svg
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          className="fill-current text-grey-900"
        >
          <path d="M2 6H22V7H2V6ZM2 12H22V13H2V12ZM22 18H2V19H22V18Z"></path>
        </svg>
      )}
    </button>
  </div>
);

export default Burger;
