import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function GraficoGastosCotidianos({ data }) {
  const CustomizedAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#D3D3D3" // Gris claro
          transform="rotate(-35)"
          fontWeight="bold"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  // Función para formatear números con separadores de miles y símbolo de dólar
  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

  // Transformar los datos para tener una serie por cada categoría excepto "alquiler" e "internet"
  const chartData = Object.keys(data).map((month) => {
    const monthData = { ...data[month] };
    delete monthData.alquiler;
    delete monthData.internet;
    return {
      name: month,
      ...monthData,
    };
  });

  // Definir colores fijos para cada categoría
  const colors = {
    luz: "#FF0000",
    gas: "#00FF00",
    internet: "#6b6ff2",
    celular: "#eefa48",
    leche: "#20B2AA",
    carne: "#f765b3",
    pan: "#FFA500",
    cafe: "#32a852",
    yerba: "#3b81b5",
    coca: "#FFC0CB",
    cerveza: "#ADC2E2",
    fideo: "#a464d1",
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-600">
      <div className="w-2/3 h-full flex items-center justify-center">
        <ResponsiveContainer width={"90%"} height={"90%"}>
          <LineChart
            width={800}
            height={400}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              height={60}
              tick={<CustomizedAxisTick />}
              tickLine={{ stroke: "#D3D3D3" }}
              axisLine={{ stroke: "#D3D3D3" }}
            />
            <YAxis
              tick={{ fontWeight: "bold", fill: "#D3D3D3" }} // Gris claro
              tickLine={{ stroke: "#D3D3D3" }}
              axisLine={{ stroke: "#D3D3D3" }}
              tickFormatter={formatCurrency} // Formatear el eje Y
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                border: "none",
                color: "#fff",
              }}
              formatter={(value, name) => [
                `${name}: ${formatCurrency(value)}`,
                <span style={{ color: colors[name] || "#fff" }}>{name}</span>,
              ]}
            />
            {/* Mapear cada categoría para renderizar una línea */}
            {Object.keys(data.marzo)
              .filter(
                (category) => category !== "alquiler" && category !== "internet"
              )
              .map((category, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={category}
                  stroke={colors[category] || "#000000"} // Usar color predefinido o negro si no se encuentra
                  strokeWidth={3} // Línea más gruesa
                  dot={{ fill: colors[category] }}
                  activeDot={{ r: 8 }}
                ></Line>
              ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/3 h-full flex">
        <div className="w-1/2 h-full flex items-center justify-start">
          <div className="w-[80%] h-[80%] bg-gray-400  rounded-xl"></div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-start">
          <div className="w-[80%] h-[80%] bg-gray-400  rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
