import React, { useState } from "react";
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
  const [selectedCategories, setSelectedCategories] = useState([]);

  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

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

  const months = Object.keys(variaciones);
  const categories = Object.keys(data[Object.keys(data)[0]]).filter(
    (category) => category !== "alquiler"
  );

  const chartData = months.map((month) => {
    const monthData = { name: month };
    categories.forEach((category) => {
      monthData[category] = parseFloat(variaciones[month][category]) || 0;
    });
    return monthData;
  });

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <div className="w-full h-full flex items-end justify-center bg-gray-200">
      <div className="w-2/3 h-full flex flex-col items-center justify-center bg-gray-200">
        <ResponsiveContainer width="90%" height="90%" className={"relative"}>
          {selectedCategories.length === 0 && (
            <div className="text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 text-center p-4 rounded-xl border-gray-700 h-24 bg-yellow-200 z-50 text-gray-700 flex flex-col items-center justify-evenly">
              <p>Seleccione alguna categoría para verla en el gráfico</p>
            </div>
          )}
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="black" />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: "black" }} />
            <YAxis tick={{ fontSize: 10, fill: "black" }} />
            <Tooltip />

            {selectedCategories.map((category) => (
              <Line
                key={category}
                type="monotone"
                dataKey={category}
                stroke={colors[category]}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/3 h-full p-2 flex items-center justify-center">
        <div className="w-[95%] h-[95%] rounded border border-black flex">
          <ul className="w-1/3 h-full flex flex-col items-center justify-evenly">
            {categories.map((category) => (
              <li
                className="text-black font-semibold flex items-center justify-between w-[90%] h-8 rounded-xl cursor-pointer pr-4 relative hover:bg-gray-300"
                key={category}
                onClick={() => toggleCategory(category)}
              >
                <span
                  className="absolute h-[15%] opacity-85 bottom-0 w-[95%] -right-2"
                  style={{
                    backgroundColor: selectedCategories.includes(category)
                      ? colors[category]
                      : "transparent",
                  }}
                ></span>
                <div
                  className="h-8 w-8 flex items-center justify-center bg-white rounded-full z-50 border-[4px]"
                  style={{
                    borderColor: selectedCategories.includes(category)
                      ? colors[category]
                      : "transparent",
                  }}
                >
                  <img
                    src={`/assets/${category}.png`}
                    alt={category}
                    className="w-3/5 h-3/5"
                  />
                </div>
                <p className="text-xs">{category.toUpperCase()}</p>
              </li>
            ))}
          </ul>
          <ul className="w-1/3 h-full border-x border-gray-400 flex flex-col items-center justify-evenly">
            {categories.map((category) => (
              <li
                className="text-black text-xs flex items-center justify-center w-full h-8 relative"
                key={category}
              >
                {data[months[months.length - 1]] &&
                data[months[months.length - 1]][category] !== undefined
                  ? formatCurrency(data[months[months.length - 1]][category])
                  : "No disponible"}
                <span
                  className="absolute h-[15%] opacity-85 bottom-0 w-full right-0"
                  style={{
                    backgroundColor: selectedCategories.includes(category)
                      ? colors[category]
                      : "transparent",
                  }}
                ></span>
              </li>
            ))}
          </ul>
          <ul className="w-1/3 h-full flex flex-col items-center justify-evenly">
            {" "}
            {categories.map((category) => (
              <li
                className="text-black font-semibold text-xs flex items-center justify-center w-full h-8 relative"
                key={category}
              >
                {variaciones[mesData] &&
                variaciones[mesData][category] !== undefined
                  ? variaciones[mesData][category]
                  : "No disponible"}
                <div
                  className="absolute h-[15%] opacity-85 bottom-0 w-full  right-0"
                  style={{
                    backgroundColor: selectedCategories.includes(category)
                      ? colors[category]
                      : "transparent",
                  }}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
