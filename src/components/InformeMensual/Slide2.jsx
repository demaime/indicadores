import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";

export default function Slide2() {
  // Datos originales
  const data = {
    "Equipos de audio y video, celulares y accesorios": 39126,
    "Calzado y marroquinería": 38636,
    Promedio: 31987,
    Juguetería: 30626,
    Indumentaria: 27213,
    Librería: 21777,
  };

  // Filtrar y transformar los datos con color definido
  const filteredData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value,
    fill: key === "Promedio" ? "#fef08a" : "#facc15", // Color condicional
  }));

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-xl">
      <ResponsiveContainer width={"50%"} height={600}>
        <BarChart
          data={filteredData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: -30, bottom: 5 }}
        >
          <XAxis
            type="number"
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            tick={{ fontSize: 10, fill: "#d1d5db" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={200}
            tick={{ fontSize: 10, fill: "#d1d5db" }}
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Bar dataKey="value" barSize={30}>
            <LabelList
              dataKey="value"
              position="insideRight"
              formatter={(value) => `$${value.toLocaleString()}`}
              fill="black"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-[90%] h-[90%] bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
