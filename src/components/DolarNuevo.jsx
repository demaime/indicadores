import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Oficial", valor: 900 },
  { name: "MEP", valor: 920 },
  { name: "Blue", valor: 850 },
  { name: "Otro", valor: 880 },
  // Agrega más tipos de cambio aquí si es necesario
];

export default function DolarNuevo() {
  const officialValue = data.find((entry) => entry.name === "Oficial").valor;

  const modifiedData = data.map((entry) => ({
    name: entry.name,
    difference: entry.name === "Oficial" ? 0 : entry.valor - officialValue,
  }));

  return (
    <div className="w-full h-full bg-gray-800 text-gray-100">
      <div className="w-full h-3/4">
        <div className="w-full h-8 bg-yellow-200 font-semibold tracker-wider text-black flex items-center justify-center ">
          COTIZACION HISTORICA
        </div>
        <BarChart width={600} height={300} data={modifiedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="difference" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="w-full h-1/4 bg-gray-300 flex flex-col">
        <div className="w-full h-8 bg-pink-200 font-semibold tracker-wider text-black flex items-center justify-center ">
          COTIZACION AL DIA
        </div>
        <div className="w-full h-full bg-gray-800 text-gray-100 flex">
          <div className="h-full w-4/5 flex">
            <div className="h-full w-[15%]  border-r border-gray-600 pl-4">
              <div className="w-full h-1/5 flex items-center justify-center"></div>
              <div className="w-full h-2/5 flex items-center text-2xl">
                EN VIVO
                <img src="/assets/live.gif" alt="" className="w-2 h-2 ml-3" />
              </div>
              <div className="w-full h-1/5 flex items-center text-lg text-center">
                17/04/2024
              </div>
              <div className="w-full h-1/5 flex items-center text-xs">
                16/04/2024
              </div>
            </div>
            <div className="h-full w-5/6 flex">
              <div className="w-1/4 h-full">
                <div className="w-full h-1/5 flex items-center justify-center text-green-400 text-lg border-b-2 border-green-200 ">
                  OFICIAL
                </div>
                <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                  $880&nbsp; <span className="text-gray-400">(+2.3%)</span>
                </div>

                <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                  $875&nbsp; <span className="text-gray-400">(+5.4%)</span>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center text-xs">
                  812 <span className="text-gray-400">(+5.9%)</span>
                </div>
              </div>
              <div className="w-1/4 h-full">
                <div className="w-full h-1/5 flex items-center justify-center text-blue-400 text-lg border-b-2 border-blue-200">
                  BLUE
                </div>
                <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                  $880&nbsp; <span className="text-gray-400">(+2.3%)</span>
                </div>

                <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                  $875&nbsp; <span className="text-gray-400">(+5.4%)</span>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center text-xs">
                  812&nbsp; <span className="text-gray-400">(+5.9%)</span>
                </div>
              </div>
              <div className="w-1/4 h-full">
                <div className="w-full h-1/5 flex items-center justify-center text-red-400 text-lg border-b-2 border-red-200">
                  MEP
                </div>
                <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                  $880&nbsp; <span className="text-gray-400">(+2.3%)</span>
                </div>

                <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                  $875&nbsp; <span className="text-gray-400">(+5.4%)</span>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center text-xs">
                  812&nbsp; <span className="text-gray-400">(+5.9%)</span>
                </div>
              </div>
              <div className="w-1/4 h-full">
                <div className="w-full h-1/5 flex items-center justify-center text-yellow-400 text-lgx border-b-2 border-yellow-200">
                  TARJETA
                </div>
                <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                  $880&nbsp; <span className="text-gray-400">(+2.3%)</span>
                </div>

                <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                  $875&nbsp; <span className="text-gray-400">(+5.4%)</span>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center text-xs">
                  812&nbsp; <span className="text-gray-400">(+5.9%)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-1/5 border-l border-gray-600 pl-4">
            <div className="w-full h-1/3 items-center flex ">
              <div className="h-full w-1/2 items-center flex text-cyan-400">
                CCL
              </div>
              <div className="h-full w-1/2 items-center flex">
                {" "}
                812&nbsp; <span className="text-gray-400">(+5.9%)</span>
              </div>
            </div>
            <div className="w-full h-1/3 items-center flex">
              {" "}
              <div className="h-full w-1/2 items-center flex text-orange-400">
                Mayorista
              </div>
              <div className="h-full w-1/2 items-center flex">
                {" "}
                812&nbsp; <span className="text-gray-400">(+5.9%)</span>
              </div>
            </div>
            <div className="w-full h-1/3 items-center flex">
              {" "}
              <div className="h-full w-1/2 items-center flex text-pink-400">
                Cripto
              </div>
              <div className="h-full w-1/2 items-center flex">
                {" "}
                812&nbsp; <span className="text-gray-400">(+5.9%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
