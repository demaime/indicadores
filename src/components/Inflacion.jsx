import React from "react";
import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";

const nacional = [
  { mes: "Diciembre", valor: 32 },
  { mes: "Enero", valor: 20.6 },
  { mes: "Febrero", valor: 18 },
  { mes: "Marzo", valor: 21.1 },
  { mes: "Abril", valor: 15 },
  { mes: "Mayo", valor: 13 },
];

const caba = [
  { mes: "Diciembre", valor: 28 },
  { mes: "Enero", valor: 21.7 },
  { mes: "Febrero", valor: 19 },
  { mes: "Marzo", valor: 35 },
  { mes: "Abril", valor: 30 },
  { mes: "Mayo", valor: 16.7 },
];

export default function Inflacion({ data }) {
  console.log(data);
  const CustomLabel = ({ x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill={data === "nacional" ? "white" : "black"}
        className="font-semibold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    );
  };
  const formatValue = (value) => `${value}%`;
  return (
    <>
      <div className="w-full flex justify-center items-center pt-4">
        <BarChart
          width={1500}
          height={350}
          data={data === "nacional" ? nacional : caba}
        >
          <XAxis dataKey="mes" />
          <YAxis tickFormatter={formatValue} domain={[0, 100]} />
          <Tooltip />
          <Bar
            dataKey="valor"
            fill={data === "nacional" ? "#818cf8" : "#facc15"}
            label={<CustomLabel />}
          />
        </BarChart>
      </div>
    </>
  );
}
