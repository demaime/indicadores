// IntermensualDisplay.js
import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const IntermensualDisplay = ({ intermensual }) => {
  if (intermensual > 0) {
    return (
      <span className="mx-2 font-light text-green-500 flex items-center">
        <FaArrowUp className="mr-1" /> {intermensual.toLocaleString()} %
      </span>
    );
  } else if (intermensual < 0) {
    return (
      <span className="mx-2 font-light text-red-500 flex items-center">
        <FaArrowDown className="mr-1" /> {intermensual.toLocaleString()} %
      </span>
    );
  } else {
    return (
      <span className="mx-2 font-light">
        ({intermensual.toLocaleString()} %)
      </span>
    );
  }
};

export default IntermensualDisplay;
