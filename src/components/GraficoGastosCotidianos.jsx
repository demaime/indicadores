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

  return (
    <div className="w-full h-full flex items-end justify-center bg-gray-600">
      <div className="w-2/3 h-full flex flex-col items-center justify-center bg-gray-200">
        <ResponsiveContainer width="90%" height="90%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />

            {categories.map((category) => (
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
      <div className="w-1/3 h-full flex pl-4">
        <div className="w-1/3 h-full flex items-end justify-start pb-4">
          <div className="w-[90%] h-[90%] bg-gray-400 rounded-xl px-4">
            <ul className="w-full h-full flex flex-col items-center justify-evenly">
              {categories.map((category) => (
                <li
                  className="text-black font-semibold flex items-center justify-between w-[90%] h-8 rounded-xl"
                  key={category}
                >
                  <div
                    className="w-10 h-6 rounded-full border-r-4 pr-4"
                    style={{
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
        <div className="w-2/3 h-full flex items-end justify-center relative pb-4">
          <div className="w-3/4 h-12 absolute left-10 top-2 text-[10px] flex items-center justify-evenly">
            <div className="rounded-xl bg-gray-500 w-28 flex items-center justify-center text-white h-8 ">
              Valor
            </div>
            <div className="rounded-xl bg-gray-500 w-28 flex items-center justify-center text-white h-8 ">
              Variación Mensual
            </div>
          </div>
          <div className="w-[80%] h-[90%] bg-gray-800 flex justify-evenly rounded-xl">
            <ul className="w-1/3 h-full flex flex-col items-center justify-evenly text-xs">
              {categories.map((category) => (
                <li
                  className="text-black font-bold flex items-center justify-center w-full h-full"
                  style={{
                    color: colors[category],
                  }}
                  key={category}
                >
                  {data[months[months.length - 1]] &&
                  data[months[months.length - 1]][category] !== undefined
                    ? formatCurrency(data[months[months.length - 1]][category])
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
