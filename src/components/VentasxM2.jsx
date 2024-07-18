import React, { useState } from "react";
import Map from "./Map";
import { MAP_JSON } from "./Map/constants";
import { FaArrowLeft, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { datosHabitantes } from "./Map/datosHabitantes";
import { datosVentas } from "./Map/datosVentas";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

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
      },
      totales: {
        ENERO: 162128358,
        FEBRERO: 19056464,
        MARZO: 239157194,
        ABRIL: 232152015,
      },
      variaciones: {
        ENERO: 264.3,
        FEBRERO: 303.0,
        MARZO: 309.9,
        ABRIL: 273.0,
      },
      porcentuales: {
        ENERO: 14.7,
        FEBRERO: 16.0,
        MARZO: 16.8,
        ABRIL: 17.4,
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

  return (
    <div className="w-full h-[95%] flex">
      <div className="w-1/3 h-full flex items-center justify-center">
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
          className="text-white bg-blue-900 rounded w-24 h-8 flex items-center justify-center absolute top-1 right-4 hover:bg-blue-600 border-black border-2"
          onClick={() => setVista("general")}
        >
          Volver
        </button>

        <div className="h-[580px] w-full border-4 rounded-xl border-gray-800 mr-8 p-4">
          {hoveredItem ? (
            <div className="w-full h-full flex flex-col items-center justify-evenly">
              <h3 className="text-4xl font-bold w-full text-center">
                {hoveredItem.name.toLocaleUpperCase()}
              </h3>
              <div className="w-full h-full flex flex-col">
                <div className="w-full flex h-1/2 items-center justify-evenly">
                  <div className="w-1/3 h-full flex flex-col items-center justify-evenly">
                    <div className="w-72 h-14 rounded text-gray-200 bg-green-700 flex flex-col items-center justify-center">
                      <span className="text-2xl">VENTAS POR HABITANTE</span>
                    </div>
                    <div className="w-24 h-12 rounded text-green-700 flex items-center justify-center text-4xl">
                      {hoveredItem.habitantes[mesSeleccionado].toLocaleString(
                        "es-AR"
                      )}
                    </div>
                  </div>
                  <div className="w-2/3 h-full flex">
                    <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
                      <div className="w-72 h-14 rounded text-gray-200 bg-gray-700 flex flex-col items-center justify-center">
                        <span className="text-2xl">VENTAS TOTALES</span>
                      </div>
                      <div className="w-24 h-12 rounded text-gray-700 flex items-center justify-center text-4xl">
                        {hoveredItem.totales[mesSeleccionado].toLocaleString(
                          "es-AR"
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-center justify-evenly">
                      <div className="w-full h-1/5 flex justify-center items-center">
                        {hoveredItem.variaciones[mesSeleccionado] >= 0 ? (
                          <FaArrowUp className="text-green-500" size={30} />
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
                      <div className="w-full h-4/5">
                        <PieChart width={400} height={400}>
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
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
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
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex h-1/2 items-center justify-evenly bg-red-300">
                  graficos
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
