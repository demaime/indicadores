import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
} from "recharts";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const data = [
  {
    Mes: "diciembre",
    Subte: 80,
    Tren: 29.86,
    Colectivo: 52,
    Nafta: 123,
    "Peaje Norte": 132,
    "Peaje Sur": 145,
    Patente: 102,
  },
  {
    Mes: "enero",
    Subte: 110,
    Tren: 43.38,
    Colectivo: 76.92,
    Nafta: 123,
    "Peaje Norte": 132,
    "Peaje Sur": 145,
    Patente: 111,
  },
  {
    Mes: "febrero",
    Subte: 125,
    Tren: 130,
    Colectivo: 270,
    Nafta: 123,
    "Peaje Norte": 132,
    "Peaje Sur": 145,
    Patente: 164,
  },
  {
    Mes: "marzo",
    Subte: 125,
    Tren: 130,
    Colectivo: 270,
    Nafta: 123,
    "Peaje Norte": 54,
    "Peaje Sur": 65,
    Patente: 168,
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
  const [mesSeleccionadoIndex, setMesSeleccionadoIndex] = useState(0);

  const cambiarMes = (direccion) => {
    if (direccion === "anterior") {
      setMesSeleccionadoIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    } else {
      setMesSeleccionadoIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  return (
    <div className="h-full w-full flex relative">
      <div className="w-1/2 h-full bg-gray-700">
        <div className="w-full h-8 absolute top-1/2 justify-center flex items-center">
          <div className="w-1/4 flex h-full bg-gray-500 justify-evenly rounded-lg flex items-center">
            <RiArrowLeftSLine
              className=" cursor-pointer rounded-full bg-yellow-400"
              color="black"
              onClick={() => cambiarMes("anterior")}
            />{" "}
            <select
              value={data[mesSeleccionadoIndex].Mes}
              onChange={(e) =>
                setMesSeleccionadoIndex(
                  data.findIndex((mesData) => mesData.Mes === e.target.value)
                )
              }
              className="text-gray-300 font-semibold bg-transparent w-2/3 text-center appearance-none"
            >
              {data.map((mesData, index) => (
                <option key={index} value={mesData.Mes} className="bg-gray-900">
                  {mesData.Mes.toLocaleUpperCase()}
                </option>
              ))}
            </select>
            <RiArrowRightSLine
              className="cursor-pointer rounded-full bg-yellow-400"
              color="black"
              onClick={() => cambiarMes("siguiente")}
            />
          </div>
        </div>
        <div className="w-full h-1/2">
          <ResponsiveContainer>
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
                dataKey="Nafta"
                stroke="#f6893b"
                strokeWidth={2}
                dot={{ stroke: "#16a34a", strokeWidth: 2 }}
                label={<CustomizedLabelSubte stroke="#f6893b" />}
              />

              <Line
                type="monotone"
                dataKey="Peaje Norte"
                stroke="#f9f943"
                strokeWidth={2}
                dot={{ stroke: "#f9f943", strokeWidth: 2 }}
                label={<CustomizedLabelTren stroke="#f9f943" />}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-1/2 w-full">
          <div className="h-[10%] w-full"></div>
          <div className="h-[90%] w-1/4 flex flex-col items-center justify-evenly">
            <img src="/assets/peaje.png" alt="" className="w-16 h-16 " />
            <img src="/assets/nafta.png" alt="" className="w-16 h-16 " />
            <img src="/assets/auto.png" alt="" className="w-16 h-16 " />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-white">
        <div className="w-full h-1/2">
          <ResponsiveContainer>
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
        <div className="h-1/2 w-full">
          <div className="h-[10%] w-full"></div>
          <div className="h-[90%] w-1/4 flex flex-col items-center justify-evenly">
            <img src="/assets/subte.png" alt="" className="w-16 h-16 " />
            <img src="/assets/tren.png" alt="" className="w-16 h-16 " />
            <img src="/assets/bondi.png" alt="" className="w-16 h-16 " />
          </div>
        </div>
      </div>
    </div>
  );
}
//#ec68ff auto
//#f6893b nafta
//#f9f943 peaje
