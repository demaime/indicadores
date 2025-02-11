import React from "react";
import { MdArrowForward } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Slide3() {
  const data2023 = [
    { name: "Calzado y marroquinería", value: 6.7 },
    { name: "Cosmética y Perfumería", value: 3.1 },
    { name: "Equipos de audio y video", value: 2.5 },
    { name: "Indumentaria", value: 1.2 },
    { name: "Promedio ponderado", value: 1.0 },
    { name: "Juguetería", value: -1.9 },
    { name: "Librería", value: -5.8 },
  ];

  const data2024 = [
    { name: "Indumentaria", value: 9.2 },
    { name: "Librerías", value: 8.8 },
    { name: "Juguetería", value: -0.3 },
    { name: "Promedio", value: -2.8 },
    { name: "Electrodomésticos", value: -7.9 },
    { name: "Calzado y marroquinería", value: -13.6 },
    { name: "Cosmética y Perfumería", value: -23.5 },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-1/5 flex items-center justify-around">
        <div className=" bg-red-200 w-1/2 h-4 text-6xl font-semibold relative">
          <p className="absolute -top-6 font-black tracking-wider left-4">
            2023
          </p>
        </div>
        <div className=" bg-red-400 w-1/2 h-4 text-6xl font-semibold relative">
          <p className="absolute -top-6 font-black tracking-wider right-4">
            2024
          </p>
        </div>
      </div>
      <div className="w-full h-3/5 flex items-center justify-center text-xl font-semibold">
        <div className="w-[45%] h-full flex flex-col items-center justify-evenly">
          <div className="w-[90%] p-2 rounded bg-red-200">
            Variación vs año anterior: 🔽 2.8%
          </div>
          <div className="w-[90%] p-2 rounded bg-red-200">
            Ticket Promedio: $25.860
          </div>
          <div className="w-[90%] flex items-center justify-center h-[200px] p-2 rounded bg-red-200">
            <ResponsiveContainer width="90%" height="90%">
              <BarChart
                layout="vertical"
                data={data2023}
                margin={{ top: 5, right: 5, left: 40, bottom: 5 }}
              >
                <XAxis
                  type="number"
                  domain={[-25, 10]}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={100}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip contentStyle={{ fontSize: 12 }} />
                <Bar
                  dataKey="value"
                  fill="#4ade80"
                  label={{
                    position: "right",
                    fill: "#000",
                    fontSize: 12,
                    formatter: (value) => `${value}%`,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-[10%] h-full flex flex-col items-center justify-evenly">
          <MdArrowForward size={25} className="text-green-600" />
          <MdArrowForward size={25} className="text-green-600" />
          <MdArrowForward size={25} className="text-green-600" />
        </div>
        <div className="w-[45%] h-full flex flex-col items-center justify-evenly">
          <div className="w-[90%] p-2 rounded bg-red-400">
            Variación vs año anterior: 🔼 1%
          </div>
          <div className="w-[90%] p-2 rounded bg-red-400">
            Ticket Promedio: $36.165{" "}
            <strong className="text-red-100">(+% 10.3%)</strong>
          </div>
          <div className="w-[90%] flex items-center justify-center h-[200px] p-2 rounded bg-red-400">
            <ResponsiveContainer width="90%" height="90%">
              <BarChart
                layout="vertical"
                data={data2024}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis
                  type="number"
                  domain={[-35, 10]}
                  tick={{ fontSize: 12, fill: "#fff" }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={150}
                  tick={{ fontSize: 12, fill: "#fff" }}
                />
                <Tooltip contentStyle={{ fontSize: 12 }} />
                <Bar
                  dataKey="value"
                  fill="#16a34a"
                  label={{
                    position: "right",
                    fill: "#fff",
                    fontSize: 12,
                    formatter: (value) => `${value}%`,
                    dx: 5,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="w-full h-1/5 flex items-center justify-center">
        <div className="px-8 py-2 rounded bg-green-600 font-semibold text-red-100 flex flex-col items-center justify-evenly">
          <p className="text-lg">Inflación Interanual</p>
          <p className="text-4xl">117.8%</p>
        </div>
      </div>
    </div>
  );
}
