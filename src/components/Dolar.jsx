import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    mes: "Diciembre",
    Oficial: 695.64,
    Blue: 990.52,
    MEP: 965.58,
  },
  {
    mes: "Enero",
    Oficial: 863.1,
    Blue: 1165.25,
    MEP: 1153.54,
  },
  {
    mes: "Febrero",
    Oficial: 880.4,
    Blue: 1117.5,
    MEP: 1128.79,
  },
];
const formatValue = (value) => `$${value}`;

export default function Dolar() {
  const textStyle = {
    fill: "white",
  };

  return (
    <ResponsiveContainer className="p-2">
      <LineChart
        className="p-2 font-bold text-white"
        width={1030}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        style={{ color: "white" }}
      >
        <defs></defs>
        <XAxis dataKey="mes" tick={textStyle} />
        <YAxis
          tickFormatter={formatValue}
          domain={[500, "dataMax"]}
          tick={textStyle}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
        <Line
          type="monotone"
          dataKey="Oficial"
          stroke="#4ade80"
          strokeWidth={2}
        />
        <Line type="monotone" dataKey="Blue" stroke="#60a5fa" strokeWidth={2} />
        <Line type="monotone" dataKey="MEP" stroke="#f87171" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
