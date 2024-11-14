import React from "react";
import IntermensualDisplay from "./IntermensualDisplay";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export default function DesempleoMaxYMin({ data, meses, mesSeleccionado }) {
  const dataMinimo = meses.map((mes) => ({
    mes,
    "Seguro por Desempleo mínimo": data[mes].desempleo_minimo.valor,
  }));

  const dataMaximo = meses.map((mes) => ({
    mes,
    "Seguro por Desempleo máximo": data[mes].desempleo_maximo.valor,
  }));

  return (
    <div className="h-full w-1/3">
      <div className="w-full h-1/2 py-2">
        <div className="w-full h-1/3">
          <div className="h-1/2 w-full">
            <h1 className="ml-2 text-2xl font-bold">
              {" "}
              SEGURO POR DESEMPLEO MÍNIMO
            </h1>
          </div>
          <div className="h-1/2 w-full flex items-center justify-end">
            <h1 className="mr-4 text-5xl font-black flex items-center">
              {" "}
              $ {data[mesSeleccionado].desempleo_minimo.valor.toLocaleString()}
              <span className="bg-gray-200 rounded text-sm ml-2 flex items-center justify-center rounded px-1">
                <IntermensualDisplay
                  intermensual={
                    data[mesSeleccionado].desempleo_minimo.intermensual
                  }
                />
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full h-2/3 flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-gray-800 flex items-center justify-center shadow shadow-black">
            <ResponsiveContainer width="90%" height="90%">
              <LineChart
                data={dataMinimo}
                margin={{ left: -15, top: 10, right: 10 }}
              >
                <XAxis
                  dataKey="mes"
                  tick={{
                    fill: "#e5e7eb",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                />
                <YAxis
                  tick={{
                    fill: "#e5e7eb",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                  domain={[90000, 150000]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111111",
                    border: "none",
                    borderRadius: "15px",
                    color: "white",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="Seguro por Desempleo mínimo"
                  stroke="#28fa28"
                  strokeWidth={2}
                  dot={{ stroke: "#28fa28", fill: "#28fa28" }}
                  activeDot={{ r: 8 }}
                />

                <ReferenceLine
                  x={mesSeleccionado}
                  stroke="gray"
                  strokeDasharray="3 3"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 py-2">
        <div className="w-full h-1/3">
          <div className="h-1/2 w-full">
            <h1 className="ml-2 text-2xl font-bold">
              SEGURO POR DESEMPLEO MÁXIMO
            </h1>
          </div>
          <div className="h-1/2 w-full flex items-center justify-end">
            <h1 className="mr-4 text-5xl font-black flex items-center">
              {" "}
              $ {data[mesSeleccionado].desempleo_maximo.valor.toLocaleString()}
              <span className="bg-gray-200 rounded text-sm ml-2 flex items-center justify-center rounded px-1">
                <IntermensualDisplay
                  intermensual={
                    data[mesSeleccionado].desempleo_maximo.intermensual
                  }
                />
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full h-2/3 flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-gray-800 flex items-center justify-center shadow shadow-black">
            <ResponsiveContainer width="90%" height="90%">
              <LineChart
                data={dataMaximo}
                margin={{ left: -15, top: 10, right: 10 }}
              >
                <XAxis
                  dataKey="mes"
                  tick={{
                    fill: "#e5e7eb",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                />
                <YAxis
                  tick={{
                    fill: "#e5e7eb",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                  domain={[190000, 300000]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111111",
                    border: "none",
                    borderRadius: "15px",
                    color: "white",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="Seguro por Desempleo máximo"
                  stroke="#3a993a"
                  strokeWidth={2}
                  dot={{ stroke: "#3a993a", fill: "#3a993a" }}
                  activeDot={{ r: 8 }}
                />

                <ReferenceLine
                  x={mesSeleccionado}
                  stroke="gray"
                  strokeDasharray="3 3"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
