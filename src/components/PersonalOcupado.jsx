import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function TicketPromedio({ vista, setVista, mesSeleccionado }) {
  const totales = {
    ENERO: {
      total: { valor: 100105, interanual: 5.3, intermensual: -0.2 },
      gerentes: { valor: 11167, interanual: 3.2, intermensual: -0.3 },
      cajeros: { valor: 88938, interanual: 5.6, intermensual: -0.2 },
    },
    FEBRERO: {
      total: { valor: 99829, interanual: 5.3, intermensual: -0.4 },
      gerentes: { valor: 11181, interanual: 3, intermensual: -0.1 },
      cajeros: { valor: 88648, interanual: 5.6, intermensual: -0.5 },
    },
    MARZO: {
      total: { valor: 99861, interanual: 5.5, intermensual: 0 },
      gerentes: { valor: 10970, interanual: 0.9, intermensual: -1.2 },
      cajeros: { valor: 88891, interanual: 6.1, intermensual: 0.2 },
    },
    ABRIL: {
      total: { valor: 99257, interanual: 4.1, intermensual: -0.6 },
      gerentes: { valor: 10861, interanual: -0.6, intermensual: -1 },
      cajeros: { valor: 88396, interanual: 4.8, intermensual: -0.6 },
    },
    MAYO: {
      total: { valor: 98761, interanual: 3.1, intermensual: -0.5 },
      gerentes: { valor: 10931, interanual: 0, intermensual: -0.6 },
      cajeros: { valor: 87830, interanual: 3.5, intermensual: -0.6 },
    },
  };

  const dataGraficoTotales = [
    { name: "Gerentes", valor: totales[mesSeleccionado].gerentes.valor },
    { name: "Cajeros", valor: totales[mesSeleccionado].cajeros.valor },
  ];

  const COLORS = ["#405D72", "#DD5746"];

  return (
    <div className="w-full h-[95%]">
      <div className="relative w-full h-[5%] flex items-center justify-center text-center bg-gray-400 text-xl font-semibold">
        Personal Ocupado
        <button
          className="text-white bg-blue-900 rounded w-24 h-6 flex items-center justify-center absolute top-1 right-4 hover:bg-blue-600 border-black border-2 text-sm font-normal"
          onClick={() => setVista("general")}
        >
          Volver
        </button>
      </div>
      <div className="w-full h-[95%] flex">
        <div className="h-full w-1/2 ">
          <div className="w-full h-2/3 flex items-center justify-center">
            <PieChart width={400} height={400}>
              <Pie
                data={dataGraficoTotales}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="valor"
              >
                {dataGraficoTotales.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
          <div className="w-full h-1/3 flex items-center justify-center">
            Sueldos y salarios 2 tarjetas{" "}
          </div>
        </div>
        <div className="h-full w-1/2 ">
          <div className="w-full h-1/2 flex items-center justify-center">
            Torta Costo Laboral
          </div>
          <div className="w-full h-1/2 flex items-center justify-center">
            2 Tortas (Costo gerentes y costo cajeros){" "}
          </div>
        </div>
      </div>
    </div>
  );
}
