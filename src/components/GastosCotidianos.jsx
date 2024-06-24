import React, { useState } from "react";
import ServiciosMes from "./ServiciosMes";

export default function GastosCotidianos() {
  const [mesSeleccionado, setMesSeleccionado] = useState("abril");
  const [graficoOEtiquetas, setGraficoOEtiquetas] = useState(true);

  const meses = ["marzo", "abril", "mayo"];

  return (
    <div className="w-full h-full bg-gray-200 flex flex-col relative">
      <div className="w-full h-[8%] bg-gray-800 flex items-center justify-evenly">
        {meses.map((mes) => (
          <button
            key={mes}
            className={`h-8 w-64 rounded-xl text-sm font-bold ${
              mes === mesSeleccionado ? "bg-pink-200" : "bg-gray-200"
            }`}
            onClick={() => setMesSeleccionado(mes)}
          >
            {mes.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="absolute w-6 top-24 h-5/6 left-0 text-gray-700 z-50">
        <div
          onClick={() => setGraficoOEtiquetas(true)}
          className={`h-1/2 rounded-r-3xl cursor-pointer writing-vertical w-full flex items-center justify-center text-xs font-bold tracking-wider ${
            graficoOEtiquetas
              ? "bg-yellow-200 border-r-2 border-yellow-500"
              : "bg-yellow-100 border-r-2 border-yellow-300"
          }`}
        >
          TARJETAS
        </div>
        <div
          onClick={() => setGraficoOEtiquetas(false)}
          className={`h-1/2 rounded-r-3xl cursor-pointer writing-vertical w-full flex items-center justify-center text-xs font-bold tracking-wider ${
            graficoOEtiquetas
              ? "bg-yellow-100 border-r-2 border-yellow-300"
              : "bg-yellow-200 border-r-2 border-yellow-500"
          }`}
        >
          GRAFICO
        </div>{" "}
      </div>
      <ServiciosMes
        mesData={mesSeleccionado}
        graficoOEtiquetas={graficoOEtiquetas}
      />
    </div>
  );
}
