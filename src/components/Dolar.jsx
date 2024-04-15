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
    Oficial: 687.8,
    Blue: 990.53,
    MEP: 965.09,
    Tarjeta: 1249.09,
  },
  {
    mes: "Enero",
    Oficial: 864.19,
    Blue: 1157.5,
    MEP: 1251.67,
    Tarjeta: 1382.71,
  },
  {
    mes: "Febrero",
    Oficial: 881.56,
    Blue: 1113.68,
    MEP: 1119.02,
    Tarjeta: 1410.49,
  },
  {
    mes: "Marzo",
    Oficial: 895.61,
    Blue: 1018.16,
    MEP: 1019.85,
    Tarjeta: 1432.97,
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
        <Line
          type="monotone"
          dataKey="Tarjeta"
          stroke="#facc15"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
