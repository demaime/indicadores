import React from "react";

export default function GraficoGastosCotidianos({
  graficoOEtiquetas,
  setGraficoOEtiquetas,
}) {
  return (
    <div className="w-full h-full absolute">
      <div className="absolute w-6 h-full left-0 text-gray-700">
        <div
          onClick={() => setGraficoOEtiquetas(true)}
          className={`h-1/2 rounded-r-3xl cursor-pointer writing-vertical w-full flex items-center justify-center text-xs font-bold tracking-wider ${
            graficoOEtiquetas
              ? "bg-orange-300 border-r-2 border-orange-500"
              : "bg-orange-200 border-r-2 border-orange-300"
          }`}
        >
          TARJETAS
        </div>
        <div
          onClick={() => setGraficoOEtiquetas(false)}
          className={`h-1/2 rounded-r-3xl cursor-pointer writing-vertical w-full flex items-center justify-center text-xs font-bold tracking-wider ${
            graficoOEtiquetas
              ? "bg-orange-200 border-r-2 border-orange-300"
              : "bg-orange-300 border-r-2 border-orange-500"
          }`}
        >
          GRAFICO
        </div>{" "}
      </div>
    </div>
  );
}
