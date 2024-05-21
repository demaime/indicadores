import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GraficoGastosCotidianos({
  data,
  variaciones,
  mesData,
}) {
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
    fideos: "#a464d1",
  };

  const categories = Object.keys(data[Object.keys(data)[0]]).filter(
    (category) => category !== "alquiler" && category !== "internet"
  );

  console.log(mesData);

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
      <div className="w-1/3 h-full flex ">
        <div className="w-1/3 h-full flex items-center justify-start">
          <div className="w-[90%] h-[80%] bg-gray-500  rounded-xl px-4">
            {" "}
            <ul className="w-full h-full flex flex-col items-center justify-evenly">
              {categories.map((category) => (
                <li
                  className="text-black font-semibold flex items-center justify-between w-[90%] h-8 rounded-xl"
                  key={category}
                >
                  <div
                    className="w-10 h-6 rounded-full border-r-4 pr-4"
                    style={{
                      // backgroundColor: colors[category],
                      borderColor: colors[category],
                    }}
                  >
                    <img
                      src={`/assets/${category}.png`}
                      alt={category}
                      className="w-6 h-full rounded-full"
                    />
                  </div>
                  <p className="text-xs">{category.toUpperCase()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/3 h-full flex items-center justify-start relative">
          <div className="w-3/4 h-12 absolute left-2 top-2 text-xs flex items-center justify-evenly">
            <div className="rounded-xl bg-gray-500 w-28 flex items-center justify-center text-white h-8 ">
              Valor
            </div>
            <div className="rounded-xl bg-gray-500 w-28 flex items-center justify-center text-white h-8 ">
              Variación Mensual
            </div>
          </div>
          <div className="w-[80%] h-[80%] bg-gray-800 flex justify-evenly rounded-xl">
            <ul className="w-1/3 h-full flex flex-col items-center justify-evenly text-xs">
              {categories.map((category) => (
                <li
                  className="text-black font-bold flex items-center justify-center w-full h-full"
                  style={{
                    color: colors[category],
                  }}
                  key={category}
                >
                  {data[mesData] && data[mesData][category] !== undefined
                    ? formatCurrency(data[mesData][category])
                    : "No disponible"}
                </li>
              ))}
            </ul>
            <ul className="w-1/3 h-full flex flex-col items-center justify-evenly text-xs">
              {categories.map((category) => (
                <li
                  className="text-black font-bold flex items-center justify-center w-full h-full"
                  style={{
                    color: colors[category],
                  }}
                  key={category}
                >
                  {variaciones[mesData] &&
                  variaciones[mesData][category] !== undefined
                    ? variaciones[mesData][category]
                    : "No disponible"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
