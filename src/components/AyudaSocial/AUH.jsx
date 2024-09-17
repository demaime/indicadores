import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import IntermensualDisplay from "./IntermensualDisplay";

export default function AUH({ data, meses, mesSeleccionado }) {
  const dataauh = meses.map((mes) => ({
    mes,
    "Asignación Universal por Hijo": data[mes].auh.valor,
  }));

  return (
    <div className="h-full w-1/3">
      <div className="w-full h-1/2 flex flex-col items-center justify-evenly">
        <h1 className="w-full h-1/5 text-center flex items-center justify-center text-2xl font-bold">
          AUH
          <IntermensualDisplay
            intermensual={data[mesSeleccionado].auh.intermensual}
          />
        </h1>
        <h1 className="w-full h-1/2 text-center flex items-center justify-center text-7xl font-black">
          $ {data[mesSeleccionado].auh.valor.toLocaleString()}
        </h1>
        <h1 className="w-full h-1/5 text-center flex items-center justify-center text-xl">
          Tope ingreso individual:
          <span className="font-semibold mx-2">
            $ {data[mesSeleccionado].tope_individual.valor.toLocaleString()}
          </span>
        </h1>
        <h1 className="w-full h-1/5 text-center flex items-center justify-center text-xl">
          Tope ingreso grupo familiar:
          <span className="font-semibold mx-2">
            $ {data[mesSeleccionado].tope_familiar.valor.toLocaleString()}
          </span>
        </h1>
      </div>
      <div className="w-full h-1/2 flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded bg-gray-800 flex items-center justify-center shadow shadow-black">
          <ResponsiveContainer width="90%" height="90%">
            <LineChart
              data={dataauh}
              margin={{ left: -25, top: 10, right: 10 }}
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
                domain={[50000, 90000]}
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
                dataKey="Asignación Universal por Hijo"
                stroke="#f9d900"
                strokeWidth={2}
                dot={{ stroke: "#f9d900", fill: "#f9d900" }}
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
  );
}
