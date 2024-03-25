import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Monotributo() {
  const meses = ["enero", "febrero", "marzo"];
  const [mesIndex, setMesIndex] = useState(0);

  const handlePrevMonth = () => {
    setMesIndex((prevIndex) =>
      prevIndex === 0 ? meses.length - 1 : prevIndex - 1
    );
  };

  const handleNextMonth = () => {
    setMesIndex((prevIndex) =>
      prevIndex === meses.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full relative flex flex-col">
      <div className="w-full h-[5%] flex items-center text-center justify-center font-black">
        <div className="flex w-1/3 flex justify-between items-center">
          <div onClick={handlePrevMonth} className="cursor-pointer">
            <BsChevronLeft />
          </div>
          <div className="">{meses[mesIndex].toUpperCase()}</div>
          <div onClick={handleNextMonth} className="cursor-pointer">
            <BsChevronRight />
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="bg-gray-700 h-1/2 w-full">
          <h1 className="bg-yellow-200 border-b-2 border-yellow-400 font-bold p-1">
            MONOTRIBUTO CATEGORIA A (SERVICIOS)
          </h1>
        </div>
        <div className="bg-gray-300 h-1/2 w-full">
          <h1 className="bg-yellow-200 border-b-2 border-yellow-400 font-bold p-1">
            INGRESOS BRUTOS CATEGORIA A
          </h1>
        </div>
      </div>
    </div>
  );
}
