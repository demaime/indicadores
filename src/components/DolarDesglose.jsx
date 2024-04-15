import React, { useState } from "react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";

const data = [
  {
    mes: "Diciembre",
    oficial: 687.8,
    blue: 990.53,
    mep: 965.09,
    tarjeta: 1249.09,
  },
  {
    mes: "Enero",
    oficial: 864.19,
    blue: 1157.5,
    mep: 1251.67,
    tarjeta: 1382.71,
  },
  {
    mes: "Febrero",
    oficial: 881.56,
    blue: 1113.68,
    mep: 1119.02,
    tarjeta: 1410.49,
  },
  {
    mes: "Marzo",
    oficial: 895.61,
    blue: 1018.16,
    mep: 1019.85,
    tarjeta: 1432.97,
  },
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
  let variationTarjeta = 0;
  let pesoDifferenceOficial = 0;
  let pesoDifferenceBlue = 0;
  let pesoDifferenceMep = 0;
  let pesoDifferenceTarjeta = 0;

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
    variationTarjeta =
      ((selectedData.tarjeta - data[selectedIndex - 1].tarjeta) /
        data[selectedIndex - 1].tarjeta) *
      100;

    pesoDifferenceOficial =
      selectedData.oficial - data[selectedIndex - 1].oficial;
    pesoDifferenceBlue = selectedData.blue - data[selectedIndex - 1].blue;
    pesoDifferenceMep = selectedData.mep - data[selectedIndex - 1].mep;
    pesoDifferenceTarjeta =
      selectedData.tarjeta - data[selectedIndex - 1].tarjeta;
  }
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
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-green-400">Oficial</div>
            <div className="text-3xl">${selectedData.oficial}</div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-blue-400">Blue</div>
            <div className="text-3xl">${selectedData.blue}</div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-red-400">MEP</div>
            <div className="text-3xl">${selectedData.mep}</div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-yellow-400">Tarjeta</div>
            <div className="text-3xl">${selectedData.tarjeta}</div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-evenly w-1/3 items-center">
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="text-2xl font-bold text-green-400 flex flex items-center justify-evenly h-full w-full">
              {variationOficial > 0 ? (
                <FaRegArrowAltCircleUp className="text-white" />
              ) : (
                <FaRegArrowAltCircleDown className="text-white" />
              )}
              {variationOficial.toFixed(2)}%
            </div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="text-2xl font-bold text-blue-400 flex flex items-center justify-evenly h-full w-full">
              {variationBlue > 0 ? (
                <FaRegArrowAltCircleUp className="text-white" />
              ) : (
                <FaRegArrowAltCircleDown className="text-white" />
              )}
              {variationBlue.toFixed(2)}%
            </div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="text-2xl font-bold text-red-400 flex flex items-center justify-evenly h-full w-full">
              {variationMep > 0 ? (
                <FaRegArrowAltCircleUp className="text-white" />
              ) : (
                <FaRegArrowAltCircleDown className="text-white" />
              )}
              {variationMep.toFixed(2)}%
            </div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="text-2xl font-bold text-yellow-400 flex flex items-center justify-evenly h-full w-full">
              {variationMep > 0 ? (
                <FaRegArrowAltCircleUp className="text-white" />
              ) : (
                <FaRegArrowAltCircleDown className="text-white" />
              )}
              {variationTarjeta.toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-evenly w-1/3 items-center text-2xl">
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-green-400 flex flex items-center justify-evenly h-full w-full">
              {`${pesoDifferenceOficial > 0 ? "+" : "-"}$${Math.abs(
                pesoDifferenceOficial.toFixed(2)
              )}`}
            </div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-blue-400 flex flex items-center justify-evenly h-full w-full">
              {`${pesoDifferenceBlue > 0 ? "+" : "-"}$${Math.abs(
                pesoDifferenceBlue.toFixed(2)
              )}`}
            </div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-red-400 flex flex items-center justify-evenly h-full w-full">
              {`${pesoDifferenceMep > 0 ? "+" : "-"}$${Math.abs(
                pesoDifferenceMep.toFixed(2)
              )}`}
            </div>
          </div>
          <div className="p-2 w-48 h-20 border rounded flex flex-col items-center justify-evenly">
            <div className="font-bold text-yellow-400 flex flex items-center justify-evenly h-full w-full">
              {`${pesoDifferenceTarjeta > 0 ? "+" : "-"}$${Math.abs(
                pesoDifferenceTarjeta.toFixed(2)
              )}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
