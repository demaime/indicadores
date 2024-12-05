// IntermensualDisplay.js
import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const IntermensualDisplay = ({ intermensual }) => {
  if (intermensual > 0) {
    return (
      <span className="text-green-400 flex items-center bg-gray-800 py-0.5 px-2 rounded flex items-center justify-center">
        <FaArrowUp className="mr-1" /> {intermensual.toLocaleString()} %
      </span>
    );
  } else if (intermensual < 0) {
    return (
      <span className="text-red-400 flex items-center bg-gray-800 py-0.5 px-2 rounded flex items-center justify-center">
        <FaArrowDown className="mr-1" /> {intermensual.toLocaleString()} %
      </span>
    );
  } else {
    return (
      <span className="text-gray-200 flex items-center bg-gray-800 py-0.5 px-2 rounded flex items-center justify-center">
        ({intermensual.toLocaleString()} %)
      </span>
    );
  }
};

export default IntermensualDisplay;
