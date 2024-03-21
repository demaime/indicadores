import React, { useState } from "react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";

const data = [
  { mes: "Diciembre", oficial: 695.64, blue: 990.52, mep: 965.58 },
  { mes: "Enero", oficial: 863.1, blue: 1165.25, mep: 1153.54 },
  { mes: "Febrero", oficial: 880.4, blue: 1117.5, mep: 1128.79 },
];

export default function DolarDesglose() {
  const [selectedMonth, setSelectedMonth] = useState(data[data.length - 1].mes);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const selectedData = data.find((item) => item.mes === selectedMonth);
  const selectedIndex = data.findIndex((item) => item.mes === selectedMonth);

  let variationOficial = 0;
  let variationBlue = 0;
  let variationMep = 0;

  if (selectedIndex > 0) {
    variationOficial =
      ((selectedData.oficial - data[selectedIndex - 1].oficial) /
        data[selectedIndex - 1].oficial) *
      100;
    variationBlue =
      ((selectedData.blue - data[selectedIndex - 1].blue) /
        data[selectedIndex - 1].blue) *
      100;
    variationMep =
      ((selectedData.mep - data[selectedIndex - 1].mep) /
        data[selectedIndex - 1].mep) *
      100;
  }

  const pesoDifferenceOficial =
    selectedData.oficial - data[selectedIndex - 1].oficial;
  const pesoDifferenceBlue = selectedData.blue - data[selectedIndex - 1].blue;
  const pesoDifferenceMep = selectedData.mep - data[selectedIndex - 1].mep;

  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-full h-1/5 flex items-center justify-center">
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="bg-gray-700 font-bold text-white w-1/3 rounded h-10 px-1"
        >
          {data.map((item) => (
            <option key={item.mes} value={item.mes}>
              {item.mes}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full h-4 text-xs grid grid-cols-3 items-center justify-center">
        <p className="text-center">{""}</p>
        <p className="text-center">VARIACION PORCENTUAL</p>
        <p className="text-center">VARIACION EN PESOS</p>
      </div>
      <div className="h-4/5  w-full flex">
        <div className="h-full flex flex-col justify-evenly w-1/3 items-center">
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-green-400">Oficial</div>
            <div className="text-3xl">${selectedData.oficial}</div>
          </div>
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-blue-400">Blue</div>
            <div className="text-3xl">${selectedData.blue}</div>
          </div>
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-red-400">MEP</div>
            <div className="text-3xl">${selectedData.mep}</div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-evenly w-1/3 items-center">
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="text-2xl font-bold text-green-400 flex flex items-center justify-evenly h-full w-full">
              {variationOficial > 0 ? (
                <FaRegArrowAltCircleUp className="text-white" />
              ) : (
                <FaRegArrowAltCircleDown className="text-white" />
              )}
              {variationOficial.toFixed(2)}%
            </div>
          </div>
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="text-2xl font-bold text-blue-400 flex flex items-center justify-evenly h-full w-full">
              {variationBlue > 0 ? (
                <FaRegArrowAltCircleUp className="text-white" />
              ) : (
                <FaRegArrowAltCircleDown className="text-white" />
              )}
              {variationBlue.toFixed(2)}%
            </div>
          </div>
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="text-2xl font-bold text-red-400 flex flex items-center justify-evenly h-full w-full">
              {variationMep > 0 ? (
                <FaRegArrowAltCircleUp className="text-white" />
              ) : (
                <FaRegArrowAltCircleDown className="text-white" />
              )}
              {variationMep.toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-evenly w-1/3 items-center text-2xl">
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-green-400 flex flex items-center justify-evenly h-full w-full">
              {`${pesoDifferenceOficial > 0 ? "+" : "-"}$${Math.abs(
                pesoDifferenceOficial.toFixed(2)
              )}`}
            </div>
          </div>
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-blue-400 flex flex items-center justify-evenly h-full w-full">
              {`${pesoDifferenceBlue > 0 ? "+" : "-"}$${Math.abs(
                pesoDifferenceBlue.toFixed(2)
              )}`}
            </div>
          </div>
          <div className="p-2 w-48 h-24 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-red-400 flex flex items-center justify-evenly h-full w-full">
              {`${pesoDifferenceMep > 0 ? "+" : "-"}$${Math.abs(
                pesoDifferenceMep.toFixed(2)
              )}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
