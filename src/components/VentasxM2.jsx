import React, { useState } from "react";
import Map from "./Map";
import { MAP_JSON } from "./Map/constants";
import { FaArrowLeft, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { datosHabitantes } from "./Map/datosHabitantes";
import { datosVentas } from "./Map/datosVentas";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function VentasxM2({ vista, setVista, mesSeleccionado }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleImageHover = () => {
    setHoveredItem({
      name: "Ciudad de Buenos Aires",
      habitantes: {
        ENERO: 52546,
        FEBRERO: 61762,
        MARZO: 77510,
        ABRIL: 75240,
        MAYO: 79990,
      },
      totales: {
        ENERO: 162128358,
        FEBRERO: 190564640,
        MARZO: 239157194,
        ABRIL: 232152015,
        MAYO: 246808287,
      },
      variaciones: {
        ENERO: 264.3,
        FEBRERO: 303.0,
        MARZO: 309.9,
        ABRIL: 273.0,
        MAYO: 287.8,
      },
      porcentuales: {
        ENERO: 14.7,
        FEBRERO: 16.0,
        MARZO: 16.8,
        ABRIL: 17.4,
        MAYO: 17.5,
      },
    });
  };

  const handleImageLeave = () => {
    setHoveredItem(null);
  };

  MAP_JSON.objects.gadm36_ARG_1.geometries.forEach((geometry) => {
    const nombreProvincia = geometry.properties.NAME;

    if (datosHabitantes[nombreProvincia]) {
      geometry.properties.HABITANTES = datosHabitantes[nombreProvincia];
    }

    if (datosVentas[nombreProvincia]) {
      geometry.properties.TOTALES = datosVentas[nombreProvincia].totales;
      geometry.properties.VARIACIONES =
        datosVentas[nombreProvincia].variaciones;
      geometry.properties.PORCENTUALES =
        datosVentas[nombreProvincia].porcentuales;
    }
  });

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const habitantesChartData = hoveredItem
    ? Object.keys(hoveredItem.habitantes).map((month) => ({
        name: month,
        VentasPorHabitante: hoveredItem.habitantes[month],
      }))
    : [];

  const ventasChartData = hoveredItem
    ? Object.keys(hoveredItem.totales).map((month) => ({
        name: month,
        VentasPorHabitante: hoveredItem.totales[month],
      }))
    : [];

  return (
    <div className="w-full h-[95%] flex">
      <div className="w-1/3 h-full flex items-center justify-center ">
        <div className="w-[350px] h-[580px] border-4 rounded-xl border-gray-800 bg-blue-200 flex items-center justify-center relative">
          <div className="absolute bottom-0 right-0 h-28 w-28 flex items-center justify-center bg-blue-200 rounded ">
            <img
              src="./assets/cabamapa.png"
              className="h-24 w-24 img-hover"
              alt=""
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            />
          </div>
          <Map
            data={{
              map: MAP_JSON,
              width: 300,
              height: 490,
              center: [-60, -34],
              scale: 250,
            }}
            onHover={(item) => setHoveredItem(item)}
          />
        </div>
      </div>
      <div className="w-2/3 h-full flex justify-center items-center relative">
        <button
          className="text-white bg-blue-900 rounded w-24 h-8 flex items-center justify-center absolute top-2 right-4 hover:bg-blue-600 border-black border-2"
          onClick={() => setVista("general")}
        >
          Volver
        </button>
        <div className="h-[580px] w-full border-4 rounded-xl border-gray-800 mr-8">
          {hoveredItem ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-200 bg-gray-700">
              <h3 className="text-5xl font-bold w-full text-center h-[10%] flex items-center justify-center">
                {hoveredItem.name.toLocaleUpperCase()}
              </h3>
              <div className="w-full h-[90%] flex ">
                <div className="w-1/3 p-4">
                  <div className="w-full h-full bg-gray-200 rounded-xl flex flex-col shadow-xl shadow-gray-950">
                    <div className="w-full h-1/4 ">
                      <div className="w-full h-14 rounded text-gray-200 bg-green-700 flex flex-col items-center justify-center">
                        <span className="text-xl">VENTAS POR HABITANTE</span>
                        <span className="text-xs">
                          a precios corrientes, en pesos
                        </span>
                      </div>
                      <div className="w-full h-12 rounded text-green-700 flex items-center justify-center text-4xl font-semibold">
                        {hoveredItem.habitantes[mesSeleccionado].toLocaleString(
                          "es-AR"
                        )}
                      </div>
                    </div>
                    <div className="w-full h-3/4">
                      <ResponsiveContainer width={"90%"} height={"90%"}>
                        <LineChart
                          data={habitantesChartData}
                          margin={{
                            top: 5,
                            right: 5,
                            left: -15,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 10, fill: "green" }}
                          />
                          <YAxis tick={{ fontSize: 10, fill: "green" }} />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="VentasPorHabitante"
                            stroke="#15803d"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                            dot={{
                              stroke: "#15803d",
                              fill: "#15803d",
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4 ">
                  <div className="w-full h-full bg-gray-200 rounded-xl flex flex-col relative shadow-xl shadow-gray-950">
                    <div className="absolute bottom-0 h-8 w-full bg-teal-800 flex items-center justify-evenly text-center">
                      {hoveredItem.variaciones[mesSeleccionado] >= 0 ? (
                        <div className="bg-white h-6 w-6 rounded-full flex items-center justify-center">
                          <FaArrowUp className="text-green-500" size={15} />
                        </div>
                      ) : (
                        <FaArrowDown className="text-red-500" size={30} />
                      )}
                      <p className="font-semibold text-xl">
                        {hoveredItem.variaciones[
                          mesSeleccionado
                        ].toLocaleString("es-AR")}
                        %
                      </p>
                      <p className="text-xs">vs. {mesSeleccionado} de 2023</p>
                    </div>
                    <div className="w-full h-1/4">
                      <div className="w-full h-14 rounded text-gray-200 bg-teal-700 flex flex-col items-center justify-center">
                        <span className="text-xl">VENTAS TOTALES</span>
                        <span className="text-xs">
                          a precios corrientes, en millones de pesos
                        </span>
                      </div>
                      <div className="w-full h-12 rounded text-teal-700 flex items-center justify-center text-4xl font-semibold">
                        {hoveredItem.totales[mesSeleccionado].toLocaleString(
                          "es-AR"
                        )}
                      </div>
                    </div>
                    <div className="w-full h-3/4">
                      <ResponsiveContainer width={"90%"} height={"90%"}>
                        <LineChart
                          data={ventasChartData}
                          margin={{
                            top: 5,
                            right: 5,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 10, fill: "teal" }}
                          />
                          <YAxis tick={{ fontSize: 10, fill: "teal" }} />
                          <Tooltip />

                          <Line
                            type="monotone"
                            dataKey="VentasPorHabitante"
                            stroke="#0f766e"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                            dot={{
                              stroke: "#0f766e",
                              fill: "#0f766e",
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-4">
                  <div className="w-full h-full bg-gray-200 rounded-xl flex flex-col shadow-xl shadow-gray-950">
                    <div className="w-full h-1/4 ">
                      <div className="w-full h-14 rounded text-gray-200 bg-indigo-700 flex flex-col items-center justify-center">
                        <span className="text-xl">COMP. PORCENTUAL</span>
                        <span className="text-xs">sobre total del país</span>
                      </div>
                      <div className="w-full h-12 rounded text-indigo-700 flex items-center justify-center text-4xl font-semibold relative">
                        {hoveredItem.porcentuales[
                          mesSeleccionado
                        ].toLocaleString("es-AR")}
                        %
                      </div>
                    </div>
                    <div className="w-full h-3/4">
                      <ResponsiveContainer width={"100%"} height={"70%"}>
                        <PieChart>
                          <Pie
                            data={[
                              {
                                name: hoveredItem.name,
                                value:
                                  hoveredItem.porcentuales[mesSeleccionado],
                              },
                              {
                                name: "Otras Provincias",
                                value:
                                  100 -
                                  hoveredItem.porcentuales[mesSeleccionado],
                              },
                            ]}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#4338ca"
                            dataKey="value"
                          >
                            {[
                              {
                                name: hoveredItem.name,
                                value:
                                  hoveredItem.porcentuales[mesSeleccionado],
                              },
                              {
                                name: "Otras Provincias",
                                value:
                                  100 -
                                  hoveredItem.porcentuales[mesSeleccionado],
                              },
                            ].map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={index === 0 ? "#4338ca" : "#6b7280"}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="h-[30%] w-full text-xl text-gray-500 font semibold flex items-center justify-center font-semibold">
                        {100 - hoveredItem.porcentuales[mesSeleccionado]} % -
                        Resto del país
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full items-center justify-evenly flex-col">
              <p className="h-1/3 text-center flex items-center justify-center">
                Pasa el mouse sobre un elemento del mapa para ver la
                información.
              </p>

              <div className="w-full h-1/3 flex items-center justify-center">
                <FaArrowLeft className="opacity-10 animate-pulse" size={150} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
