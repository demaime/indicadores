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
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const dataNacion = [
  { name: "Bienes y servicios", diciembre: 32.7, enero: 44.4 },
  { name: "Transporte", diciembre: 31.7, enero: 26.3 },
  { name: "Comunicación", diciembre: 15.6, enero: 25.1 },
  { name: "Recreación y cultura", diciembre: 20.2, enero: 24 },
  {
    name: "Equipamiento y mantenimiento del hogar",
    diciembre: 30.7,
    enero: 22.3,
  },
  { name: "Bebidas alcohólicas y tabaco", diciembre: 20.2, enero: 21 },
  { name: "Salud", diciembre: 32.6, enero: 20.5 },
  { name: "Alimentos y bebidas no alcohólicas", diciembre: 29.7, enero: 20.4 },
  { name: "Restaurantes y hoteles", diciembre: 21.6, enero: 19.4 },
  {
    name: "Vivienda, agua, electricidad, gas y otros combustibles",
    diciembre: 13.8,
    enero: 14,
  },
  { name: "Prendas de vestir y calzado", diciembre: 17.2, enero: 11.9 },
  { name: "Educación", diciembre: 6.2, enero: 0.9 },
  {
    name: "Cuidado personal, protección social y otros",
    diciembre: 44.4,
    enero: 32.7,
  },
];

const dataCaba = [
  { name: "Bienes y servicios", diciembre: 12.4, enero: 24.2 },
  { name: "Transporte", diciembre: 30.4, enero: 33.7 },
  { name: "Comunicación", diciembre: 22.2, enero: 16.7 },
  { name: "Recreación y cultura", diciembre: 16, enero: 30.5 },
  {
    name: "Equipamiento y mantenimiento del hogar",
    diciembre: 21.9,
    enero: 20.2,
  },
  { name: "Bebidas alcohólicas y tabaco", diciembre: 23, enero: 22.7 },
  { name: "Salud", diciembre: 19.4, enero: 30.3 },
  { name: "Alimentos y bebidas no alcohólicas", diciembre: 30.4, enero: 25.4 },
  { name: "Restaurantes y hoteles", diciembre: 19.8, enero: 24.1 },
  {
    name: "Vivienda, agua, electricidad, gas y otros combustibles",
    diciembre: 11.6,
    enero: 10,
  },
  { name: "Prendas de vestir y calzado", diciembre: 16.2, enero: 10.6 },
  { name: "Educación", diciembre: 15.9, enero: 1.5 },
  {
    name: "Cuidado personal, protección social y otros",
    diciembre: 26.9,
    enero: 35.7,
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

  const febreroEneroDiff = selectedItem.enero - selectedItem.diciembre;

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

  return (
    <div className="w-full h-[28rem] flex flex-col items-center">
      <h1 className="font-bold py-1 bg-gray-700 text-white text-2xl w-full text-center">
        INFLACION
      </h1>
      <div className="w-full h-full flex">
        <div className="w-1/6 h-full flex flex-col items-center justify-evenly relative border-r-2 border-y">
          <h2 className="absolute top-1 font-bold text-md w-full text-center text-gray-800">
            VARIACIONES
          </h2>
          <div
            className={`h-16 w-36 text-white font-bold py-2 px-4 border-b-4 rounded flex flex-col items-center justify-around text-2xl ${
              dataInflacion === "caba"
                ? "bg-yellow-500 border-yellow-700"
                : "bg-[#f57b6dff] border-pink-600"
            }`}
          >
            <span className="text-xs">MENSUAL</span>
            <span className="flex items-center w-full justify-evenly">
              {" "}
              {febreroEneroDiff < 0 ? (
                <FaRegArrowAltCircleUp />
              ) : (
                <FaRegArrowAltCircleDown />
              )}
              {febreroEneroDiff.toFixed(1)}%
            </span>
          </div>
          <div
            className={`h-16 w-36 text-white font-bold py-2 px-4 border-b-4 rounded flex flex-col items-center justify-around text-2xl ${
              dataInflacion === "caba"
                ? "bg-yellow-500 border-yellow-700"
                : "bg-[#f57b6dff] border-pink-600"
            }`}
          >
            <span className="text-xs">ANUAL</span>
            +xxx%
          </div>
        </div>
        <div className="w-7/12 h-full flex items-center justify-between pt-8 flex-col">
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
                stroke="#8884d8"
                dot={{ stroke: "#8884d8", strokeWidth: 5 }}
                label={<CustomizedLabel />}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="w-full h-8 justify-center flex ">
            <button
              onClick={() => setDataInflacion("caba")}
              className={`h-full rounded-t-2xl h-8 bg-yellow-300 p-2 w-1/3 justify-center flex items-center border-t-2 border-x border-yellow-600 ${
                dataInflacion === "caba" ? "font-bold" : ""
              }`}
            >
              CABA
            </button>
            <button
              onClick={() => setDataInflacion("nacional")}
              className={`h-full rounded-t-2xl h-8 bg-pink-200 p-2 w-1/3 justify-center flex items-center border-t-2 border-x border-pink-400 ${
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
