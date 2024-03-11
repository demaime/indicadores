import React, { useState } from "react";
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

const data = [
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

export default function InflacionDesglose() {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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
        textAnchor="middle"
      >
        {`%${value}`}
      </text>
    );
  };

  return (
    <div className="w-full h-96 flex flex-col items-center">
      <h1 className="font-bold py-1 bg-gray-700 text-white text-2xl w-full text-center">
        INFLACION
      </h1>
      <div className="w-full h-full flex">
        <div className="w-1/6 h-full flex flex-col items-center justify-evenly relative">
          <h2 className="absolute top-1 font-bold text-md w-full text-center text-gray-800">
            VARIACIONES
          </h2>
          <div className="h-16 w-36 bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 rounded flex flex-col items-center justify-around text-2xl">
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
          <div className="h-16 w-36 bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 rounded flex flex-col items-center justify-around text-2xl">
            <span className="text-xs">ANUAL</span>
            +xxx%
          </div>
        </div>
        <div className="w-7/12 bg-yellow-200 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={[
                { name: "Diciembre", value: selectedItem.diciembre },
                { name: "Enero", value: selectedItem.enero },
                { name: "Febrero", value: selectedItem.febrero },
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
                dataKey="value"
                stroke="#8884d8"
                dot={{ stroke: "#8884d8", strokeWidth: 5 }}
                label={<CustomizedLabel />}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="w-3/12 bg-yellow-400 h-full">
          <ul className="w-full flex flex-col justify-around h-full text-xs">
            {data.map((item) => (
              <li
                key={item.name}
                onClick={() => handleItemClick(item)}
                className={`text-center cursor-pointer ${
                  item === selectedItem ? "font-bold" : ""
                }`}
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
