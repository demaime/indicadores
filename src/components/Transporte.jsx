import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
} from "recharts";

const CustomizedLabelBarras = ({ x, y, stroke, value }) => {
  return (
    <text
      x={x}
      y={y}
      dy={"10%"}
      dx={"8%"}
      fill={stroke}
      fontSize={12}
      className="font-bold"
      textAnchor="middle"
    >
      {`$${value}`}
    </text>
  );
};

const data = [
  {
    Mes: "Diciembre",
    Subte: 80,
    Tren: 29.86,
    Colectivo: 52,
  },
  {
    Mes: "Enero",
    Subte: 110,
    Tren: 43.38,
    Colectivo: 76.92,
  },
  {
    Mes: "Febrero",
    Subte: 125,
    Tren: 130,
    Colectivo: 270,
  },
  {
    Mes: "Marzo",
    Subte: 125,
    Tren: 130,
    Colectivo: 270,
  },
];

const CustomizedLabelSubte = ({ x, y, stroke, index }) => {
  let variation = 0;
  if (index < data.length - 1) {
    const validKeys = Object.keys(data[index]).filter((key) => key !== "Mes");
    const currentValue = data[index][validKeys[0]];

    const nextValue = data[index + 1][validKeys[0]];
    if (currentValue !== 0) {
      (variation = ((nextValue - currentValue) / currentValue) * 100).toFixed(
        2
      );
    }
  }
  const formattedVariation = isNaN(variation)
    ? "0%"
    : variation.toFixed(2) + "pp";

  return (
    <text
      x={x}
      y={y}
      dy={"-8%"}
      dx={"15%"}
      fill={stroke}
      fontSize={12}
      className="font-bold"
      textAnchor="middle"
    >
      {`${formattedVariation}`}
    </text>
  );
};

const CustomizedLabelTren = ({ x, y, stroke, value, index }) => {
  let variation = 0;
  if (index < data.length - 1) {
    const validKeys = Object.keys(data[index]).filter((key) => key !== "Mes");
    const currentValue = data[index][validKeys[1]];

    const nextValue = data[index + 1][validKeys[1]];
    if (currentValue !== 0) {
      variation = ((nextValue - currentValue) / currentValue) * 100;
    }
  }
  const formattedVariation = isNaN(variation)
    ? "0%"
    : variation.toFixed(2) + "pp";

  return (
    <text
      x={x}
      y={y}
      dy={"2%"}
      dx={"15%"}
      fill={stroke}
      fontSize={12}
      className="font-bold"
      textAnchor="middle"
    >
      {`${formattedVariation}`}
    </text>
  );
};

const CustomizedLabelColectivo = ({ x, y, stroke, value, index }) => {
  let variation = 0;
  if (index < data.length - 1) {
    const validKeys = Object.keys(data[index]).filter((key) => key !== "Mes");
    const currentValue = data[index][validKeys[2]];

    const nextValue = data[index + 1][validKeys[2]];
    if (currentValue !== 0) {
      variation = ((nextValue - currentValue) / currentValue) * 100;
    }
  }
  const formattedVariation = isNaN(variation)
    ? "0%"
    : variation.toFixed(2) + "pp";

  return (
    <text
      x={x}
      y={y}
      dy={"2%"}
      dx={"15%"}
      fill={stroke}
      fontSize={12}
      className="font-bold"
      textAnchor="middle"
    >
      {`${formattedVariation}`}
    </text>
  );
};

export default function Transporte() {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/3 bg-yellow-200 flex flex-col">
        <div className="h-1/3 w-full  flex flex-col items-center">
          <p className="w-full text-start pl-2 font-bold">Subte</p>
          <ResponsiveContainer width="80%" height="80%">
            <BarChart width={150} height={40} data={data}>
              <XAxis dataKey="Mes" />
              <YAxis />
              <Bar
                dataKey="Subte"
                fill="#facc15"
                label={<CustomizedLabelBarras />}
              />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-1/3 w-full  flex flex-col items-center border-t border-white  ">
          <p className="w-full text-start pl-2 font-bold">Tren</p>
          <ResponsiveContainer width="80%" height="80%">
            <BarChart width={150} height={40} data={data}>
              <XAxis dataKey="Mes" />
              <YAxis />
              <Bar
                dataKey="Tren"
                fill="#facc15"
                label={<CustomizedLabelBarras />}
              />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-1/3 w-full  flex flex-col items-center border-t border-white">
          <p className="w-full text-start pl-2 font-bold">Colectivo</p>
          <ResponsiveContainer width="80%" height="80%">
            <BarChart width={150} height={40} data={data}>
              <XAxis dataKey="Mes" />
              <YAxis />
              <Bar
                dataKey="Colectivo"
                fill="#facc15"
                label={<CustomizedLabelBarras />}
              />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="h-full w-2/3 flex flex-col">
        <div className="w-full h-2/3">
          <ResponsiveContainer className="p-2">
            <LineChart
              className="p-2 font-bold text-white"
              width={1030}
              height={350}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              style={{ color: "white" }}
            >
              <defs />
              <XAxis dataKey="Mes" interval={0} tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />

              {/* Línea para la serie "Subte" */}
              <Line
                type="monotone"
                dataKey="Subte"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ stroke: "#16a34a", strokeWidth: 2 }}
                label={<CustomizedLabelSubte stroke="#16a34a" />}
              />

              {/* Línea para la serie "Tren" */}
              <Line
                type="monotone"
                dataKey="Tren"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ stroke: "#2563eb", strokeWidth: 2 }}
                label={<CustomizedLabelTren stroke="#2563eb" />}
              />

              {/* Línea para la serie "Colectivo" */}
              <Line
                type="monotone"
                dataKey="Colectivo"
                stroke="#dc2626"
                strokeWidth={2}
                dot={{ stroke: "#dc2626", strokeWidth: 2 }}
                label={<CustomizedLabelColectivo stroke="#dc2626" />}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full h-1/3 bg-gray-300 flex flex-col">
          <div className="w-full h-1/6 bg-gray-500 text-white flex items-center justify-center font-bold">
            AUMENTO ACUMULADO ANUAL
          </div>
          <div className="w-full h-5/6 flex items-center justify-evenly">
            <div className="w-1/3 h-full text-[#16a34a] flex flex-col items-center justify-evenly">
              <img className="h-24" src="/assets/subte.png" alt="" />
              <p className="text-4xl font-bold">51.13%</p>
            </div>
            <div className="w-1/3 h-full text-[#2563eb] flex flex-col items-center justify-evenly">
              <img className="h-24" src="/assets/tren.png" alt="" />
              <p className="text-4xl font-bold">245%</p>
            </div>
            <div className="w-1/3 h-full text-[#dc2626] flex flex-col items-center justify-evenly">
              <img className="h-24" src="/assets/bondi.png" alt="" />
              <p className="text-4xl font-bold">296.25%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
