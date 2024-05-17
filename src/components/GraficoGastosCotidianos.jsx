import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function GraficoGastosCotidianos({ data }) {
  const months = ["marzo", "abril", "mayo"];

  const CustomizedAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  // Transformar los datos para tener una serie por cada categoría excepto "alquiler"
  const chartData = Object.keys(data).map((month) => {
    const monthData = { ...data[month] };
    delete monthData.alquiler;
    return {
      name: month,
      ...monthData,
    };
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className=""></div>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          {/* Mapear cada categoría para renderizar una línea */}
          {Object.keys(data.marzo)
            .filter((category) => category !== "alquiler")
            .map((category, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={category}
                stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Color aleatorio para cada línea
                activeDot={{ r: 8 }}
              />
            ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
