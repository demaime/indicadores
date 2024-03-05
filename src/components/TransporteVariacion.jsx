import React from "react";

const subteMensual = 37.5;
const trenMensual = 45.32;
const colectivoMensual = 45.24;

const subteAnual = 134.5;
const trenAnual = 425.38;
const colectivoAnual = 1045.8;

export default function TransporteVariacion({ data }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-full h-4/5 bg-gray-700">
      <div className="text-white border-white border flex flex-col items-center justify-evenly text-6xl">
        <span className="text-sm">Variación vs Último</span>%{" "}
        {data === "subte" && subteMensual}
        {data === "colectivo" && colectivoMensual}
        {data === "tren" && trenMensual}
      </div>
      <div className="text-white border-white border flex flex-col items-center justify-evenly text-6xl">
        <span className="text-sm">Variación Anual</span>%{" "}
        {data === "subte" && subteAnual}
        {data === "colectivo" && colectivoAnual}
        {data === "tren" && trenAnual}
      </div>
      <div className="text-white border-white border flex flex-col items-center justify-evenly text-6xl">
        <span className="text-sm">titulo</span>
        TEST
      </div>
      <div className="text-white border-white border flex flex-col items-center justify-evenly text-6xl">
        <span className="text-sm">titulo</span>
        TEST
      </div>
    </div>
  );
}
