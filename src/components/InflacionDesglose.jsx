import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";

const dataNacion = [
  { name: "GENERAL", diciembre: 25.5, enero: 20.6, febrero: 13.2 },
  { name: "Bienes y servicios", diciembre: 32.7, enero: 44.4, febrero: 16.6 },
  { name: "Transporte", diciembre: 31.7, enero: 26.3, febrero: 21.6 },
  { name: "Comunicación", diciembre: 15.6, enero: 25.1, febrero: 24.7 },
  { name: "Recreación y cultura", diciembre: 20.2, enero: 24, febrero: 8.6 },
  {
    name: "Equipamiento y mantenimiento del hogar",
    diciembre: 30.7,
    enero: 22.3,
    febrero: 10.3,
  },
  {
    name: "Bebidas alcohólicas y tabaco",
    diciembre: 20.2,
    enero: 21,
    febrero: 17.7,
  },
  { name: "Salud", diciembre: 32.6, enero: 20.5, febrero: 13.6 },
  {
    name: "Alimentos y bebidas no alcohólicas",
    diciembre: 29.7,
    enero: 20.4,
    febrero: 11.9,
  },
  {
    name: "Restaurantes y hoteles",
    diciembre: 21.6,
    enero: 19.4,
    febrero: 11.2,
  },
  {
    name: "Vivienda, agua, electricidad, gas y otros combustibles",
    diciembre: 13.8,
    enero: 14,
    febrero: 20.2,
  },
  {
    name: "Prendas de vestir y calzado",
    diciembre: 17.2,
    enero: 11.9,
    febrero: 7.2,
  },
  { name: "Educación", diciembre: 6.2, enero: 0.9, febrero: 9.9 },
  {
    name: "Cuidado personal, protección social y otros",
    diciembre: 44.4,
    enero: 32.7,
    febrero: 21.6,
  },
];

const dataCaba = [
  { name: "GENERAL", diciembre: 21.7, enero: 21.1, febrero: 14.1 },
  { name: "Bienes y servicios", diciembre: 12.4, enero: 24.2, febrero: 30 },
  { name: "Transporte", diciembre: 30.4, enero: 33.7, febrero: 21 },
  { name: "Comunicación", diciembre: 22.2, enero: 16.7, febrero: 19.4 },
  { name: "Recreación y cultura", diciembre: 16, enero: 30.5, febrero: 9.4 },
  {
    name: "Equipamiento y mantenimiento del hogar",
    diciembre: 21.9,
    enero: 20.2,
    febrero: 7.5,
  },
  {
    name: "Bebidas alcohólicas y tabaco",
    diciembre: 23,
    enero: 22.7,
    febrero: 21.1,
  },
  { name: "Salud", diciembre: 19.4, enero: 30.3, febrero: 21.1 },
  {
    name: "Alimentos y bebidas no alcohólicas",
    diciembre: 30.4,
    enero: 25.4,
    febrero: 14.7,
  },
  { name: "Restaurantes y hoteles", diciembre: 19.8, enero: 24.1, febrero: 8 },
  {
    name: "Vivienda, agua, electricidad, gas y otros combustibles",
    diciembre: 11.6,
    enero: 10,
    febrero: 13.2,
  },
  {
    name: "Prendas de vestir y calzado",
    diciembre: 16.2,
    enero: 10.6,
    febrero: 9.8,
  },
  { name: "Educación", diciembre: 15.9, enero: 1.5, febrero: 9.4 },
  {
    name: "Cuidado personal, protección social y otros",
    diciembre: 26.9,
    enero: 35.7,
    febrero: 14.3,
  },
];

export default function InflacionDesglose() {
  const [dataInflacion, setDataInflacion] = useState("nacional");
  let data = dataInflacion === "nacional" ? dataNacion : dataCaba;
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const newData = dataInflacion === "nacional" ? dataNacion : dataCaba;
    const foundItem = newData.find((item) => item.name === selectedItem.name);
    if (foundItem) {
      setSelectedItem(foundItem);
    } else {
      setSelectedItem(newData[0]);
    }
  }, [dataInflacion, selectedItem.name]);

  const CustomizedLabel = ({ x, y, stroke, value }) => {
    return (
      <text
        x={x}
        y={y}
        dy={-10}
        dx={12}
        fill={stroke}
        fontSize={12}
        className="font-bold"
        textAnchor="middle"
      >
        {`%${value}`}
      </text>
    );
  };

  const monthDiff = selectedItem.febrero - selectedItem.enero;
  const acumuladoAnual = selectedItem.enero + selectedItem.febrero;
  const valorMensual = selectedItem.febrero;

  // Obtener el dato de "GENERAL" para el mes actual
  const generalData = data.find((item) => item.name === "GENERAL");
  const valorMensualGeneral = generalData.febrero;
  const monthDiffGeneral = generalData.febrero - generalData.enero;
  const acumuladoAnualGeneral = generalData.enero + generalData.febrero;

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="bg-gray-200 border-b border-gray-800 w-full h-1/3 flex items-center justify-evenly">
        <div
          className={`bg-gray-700 rounded w-96 h-24 flex flex-col justify-between p-4 text-5xl text-center items-center ${
            dataInflacion === "caba" ? "text-yellow-400" : "text-pink-200"
          }`}
        >
          <span className="w-full text-center text-gray-200 text-xs">
            Valor Mensual
          </span>{" "}
          {valorMensualGeneral}%
        </div>
        <div
          className={`bg-gray-700 rounded w-96 h-24 flex flex-col justify-between p-4 text-5xl text-center items-center ${
            dataInflacion === "caba" ? "text-yellow-400" : "text-pink-200"
          }`}
        >
          <span className="w-full text-center text-gray-200 text-xs">
            Variación Mensual
          </span>{" "}
          {monthDiffGeneral.toFixed(1)}pp
        </div>
        <div
          className={`bg-gray-700 rounded w-96 h-24 flex flex-col justify-between p-4 text-5xl text-center items-center ${
            dataInflacion === "caba" ? "text-yellow-400" : "text-pink-200"
          }`}
        >
          <span className="w-full text-center text-gray-200 text-xs">
            Acumulado Anual
          </span>
          {acumuladoAnualGeneral.toFixed(1)}%
        </div>
      </div>
      <div className="w-full h-full flex">
        <div className="w-1/6 h-full flex flex-col items-center justify-evenly relative border-r-2 border-y">
          <div
            className={`h-20 w-40 text-white font-bold py-2 px-4 border-b-4 rounded flex flex-col items-center justify-around text-2xl ${
              dataInflacion === "caba"
                ? "bg-yellow-500 border-yellow-700"
                : "bg-[#f57b6dff] border-pink-600"
            }`}
          >
            <span className="text-xs text-center">VARIACION MENSUAL</span>
            <span className="flex items-center w-full justify-evenly">
              {" "}
              {monthDiff < 0 ? (
                <FaRegArrowAltCircleUp />
              ) : (
                <FaRegArrowAltCircleDown />
              )}
              {monthDiff.toFixed(1)}pp
            </span>
          </div>
          <div
            className={`h-20 w-40 text-white font-bold py-2 px-4 border-b-4 rounded flex flex-col items-center justify-around text-2xl ${
              dataInflacion === "caba"
                ? "bg-yellow-500 border-yellow-700"
                : "bg-[#f57b6dff] border-pink-600"
            }`}
          >
            <span className="text-xs text-center">ACUMULADO ANUAL</span>
            {acumuladoAnual.toFixed(1)}%
          </div>
        </div>
        <div className="w-7/12 h-full flex items-center justify-evenly pt-8 flex-col">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              width={500}
              height={300}
              data={[
                { name: "Diciembre", Inflación: selectedItem.diciembre },
                { name: "Enero", Inflación: selectedItem.enero },
                { name: "Febrero", Inflación: selectedItem.febrero },
              ]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 50]} />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="Inflación"
                stroke="#1f2937"
                dot={{
                  stroke:
                    dataInflacion === "nacional" ? "#f57b6dff" : "#facc15",
                  strokeWidth: 5,
                }}
                label={<CustomizedLabel />}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="w-full h-8 justify-evenly flex ">
            <button
              onClick={() => setDataInflacion("caba")}
              className={`h-full rounded h-8 bg-yellow-300 p-2 w-1/3 justify-center flex items-center border-2  border-yellow-600 ${
                dataInflacion === "caba" ? "font-bold" : ""
              }`}
            >
              CABA
            </button>
            <button
              onClick={() => setDataInflacion("nacional")}
              className={`h-full rounded h-8 bg-pink-200 p-2 w-1/3 justify-center flex items-center border-2  border-pink-400 ${
                dataInflacion === "nacional" ? "font-bold" : ""
              }`}
            >
              NACIONAL
            </button>
          </div>
        </div>
        <div
          className={`w-3/12 h-full ${
            dataInflacion === "nacional" ? "bg-[#f57b6dff]" : "bg-yellow-400"
          }`}
        >
          <ul className="w-full flex flex-col justify-around h-full text-xs">
            {data.map((item) => (
              <li
                key={item.name}
                onClick={() => handleItemClick(item)}
                className={`text-center cursor-pointer p-1 ${
                  item === selectedItem ? "font-bold" : ""
                } ${
                  item === selectedItem && dataInflacion === "nacional"
                    ? "bg-pink-200"
                    : item === selectedItem && dataInflacion !== "nacional"
                    ? "bg-yellow-200"
                    : ""
                } rounded`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
