import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  {
    mes: "Diciembre",
    subte: 80,
    tren: 33.29,
    colectivo: 76.92,
  },
  {
    mes: "Enero",
    subte: 110,
    tren: 43.38,
    colectivo: 76.92,
  },
  {
    mes: "Febrero",
    subte: 125,
    tren: 55,
    colectivo: 330,
  },
  {
    mes: "Marzo",
    subte: 125,
    tren: 55,
    colectivo: 330,
  },
  {
    mes: "Abril",
    subte: 180,
    tren: 75,
    colectivo: 330,
  },
  {
    mes: "Mayo",
    subte: 180,
    tren: 98,
    colectivo: 345,
  },
];

export default function Transporte() {
  return (
    <>
      <AreaChart
        className="p-2"
        width={730}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorsubte" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colortren" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorcolectivo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff8080" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff8080" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="mes" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
        <Area
          type="monotone"
          dataKey="subte"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorsubte)"
        />
        <Area
          type="monotone"
          dataKey="tren"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colortren)"
        />
        <Area
          type="monotone"
          dataKey="colectivo"
          stroke="#ff8080"
          fillOpacity={1}
          fill="url(#colorcolectivo)"
        />
      </AreaChart>
    </>
  );
}
