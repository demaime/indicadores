import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function ActividadEconomica() {
  const data = [
    { mes: "ENERO", dato: 136.5, intermensual: -1.9, interanual: -4.1 },
    { mes: "FEBRERO", dato: 133, intermensual: -2.5, interanual: -3 },
    { mes: "MARZO", dato: 141.7, intermensual: 94.82, interanual: 14.1 },
  ];

  const dataApertura = {
    "Agricultura, ganadería, caza y silvicultura": [
      { mes: "ENERO", dato: 91.4, intermensual: -17.07, interanual: 11.9 },
      { mes: "FEBRERO", dato: 73.7, intermensual: -19.39, interanual: 5 },
      { mes: "MARZO", dato: 143.3, intermensual: 94.82, interanual: 14.1 },
    ],
    Pesca: [
      { mes: "ENERO", dato: 153.9, intermensual: 19.31, interanual: -13.4 },
      { mes: "FEBRERO", dato: 167.7, intermensual: 8.93, interanual: 31.4 },
      { mes: "MARZO", dato: 114, intermensual: -31.73, interanual: 2.9 },
    ],
    "Explotación de minas y canteras": [
      { mes: "ENERO", dato: 114.8, intermensual: 3.42, interanual: 7.3 },
      { mes: "FEBRERO", dato: 109.2, intermensual: -4.87, interanual: 11.3 },
      { mes: "MARZO", dato: 111.2, intermensual: 1.68, interanual: 5.9 },
    ],
    "Industria manufacturera": [
      { mes: "ENERO", dato: 100.7, intermensual: -10.29, interanual: -10.8 },
      { mes: "FEBRERO", dato: 103.3, intermensual: 2.55, interanual: -8.3 },
      { mes: "MARZO", dato: 111.6, intermensual: 7.67, interanual: -19.6 },
    ],
    "Electricidad, gas y agua": [
      { mes: "ENERO", dato: 155.5, intermensual: -5.39, interanual: -5.8 },
      { mes: "FEBRERO", dato: 157.3, intermensual: 1.16, interanual: 7.9 },
      { mes: "MARZO", dato: 152.1, intermensual: -3.38, interanual: -7.5 },
    ],
    Construcción: [
      { mes: "ENERO", dato: 124.4, intermensual: -6.2, interanual: -18.8 },
      { mes: "FEBRERO", dato: 119.2, intermensual: -4.22, interanual: -20.7 },
      { mes: "MARZO", dato: 113, intermensual: -4.94, interanual: -29.9 },
    ],
    "Comercio mayorista, minorista y reparaciones": [
      { mes: "ENERO", dato: 132.7, intermensual: -4.24, interanual: -8.4 },
      { mes: "FEBRERO", dato: 136, intermensual: 2.47, interanual: -6.3 },
      { mes: "MARZO", dato: 140.6, intermensual: 3.38, interanual: -16.7 },
    ],
    "Hoteles y restaurantes": [
      { mes: "ENERO", dato: 160.9, intermensual: -7.69, interanual: -0.5 },
      { mes: "FEBRERO", dato: 156.2, intermensual: -2.84, interanual: -0.3 },
      { mes: "MARZO", dato: 124.9, intermensual: -20.06, interanual: -1.5 },
    ],
    "Transporte y comunicaciones": [
      { mes: "ENERO", dato: 176.5, intermensual: -0.23, interanual: -0.1 },
      { mes: "FEBRERO", dato: 171.8, intermensual: -2.59, interanual: -0.1 },
      { mes: "MARZO", dato: 178.4, intermensual: 3.67, interanual: -1.4 },
    ],
    "Intermediación financiera": [
      { mes: "ENERO", dato: 147.7, intermensual: -4.4, interanual: -10.8 },
      { mes: "FEBRERO", dato: 139.2, intermensual: -5.59, interanual: -11.2 },
      { mes: "MARZO", dato: 152.8, intermensual: 9.79, interanual: -15.2 },
    ],
    "Actividades inmobiliarias, empresariales y de alquiler": [
      { mes: "ENERO", dato: 147.8, intermensual: -3.23, interanual: -1 },
      { mes: "FEBRERO", dato: 147.3, intermensual: -0.34, interanual: -0.5 },
      { mes: "MARZO", dato: 148.2, intermensual: 0.34, interanual: -3.1 },
    ],
    "Administración pública y defensa; planes de seguridad social de afiliación obligatoria":
      [
        { mes: "ENERO", dato: 166.4, intermensual: -1, interanual: 1.1 },
        { mes: "FEBRERO", dato: 166.8, intermensual: 0.24, interanual: 1.2 },
        { mes: "MARZO", dato: 164.9, intermensual: -1.14, interanual: 0.2 },
      ],
    Enseñanza: [
      { mes: "ENERO", dato: 167.1, intermensual: -4.48, interanual: 1.9 },
      { mes: "FEBRERO", dato: 168.6, intermensual: 0.9, interanual: 1.9 },
      { mes: "MARZO", dato: 170.7, intermensual: 1.19, interanual: 0.9 },
    ],
    "Servicios sociales y de salud": [
      { mes: "ENERO", dato: 186.8, intermensual: 15.83, interanual: 1.7 },
      { mes: "FEBRERO", dato: 178.6, intermensual: -4.38, interanual: 1.4 },
      { mes: "MARZO", dato: 192.7, intermensual: 7.84, interanual: 1 },
    ],
    "Otras actividades de servicios comunitarios, sociales y personales": [
      { mes: "ENERO", dato: 148.1, intermensual: 15.79, interanual: -1 },
      { mes: "FEBRERO", dato: 138.7, intermensual: -6.72, interanual: -2 },
      { mes: "MARZO", dato: 131.1, intermensual: -5.59, interanual: -2.7 },
    ],
    "Impuestos netos de subsidios": [
      { mes: "ENERO", dato: 159.2, intermensual: 24.61, interanual: -5.9 },
      { mes: "FEBRERO", dato: 149, intermensual: -6.95, interanual: -4 },
      { mes: "MARZO", dato: 153.4, intermensual: 2.36, interanual: -11 },
    ],
  };

  const meses = dataApertura["Agricultura, ganadería, caza y silvicultura"].map(
    (item) => item.mes
  );
  const categorias = Object.keys(dataApertura);

  const [mesSeleccionado, setMesSeleccionado] = useState(meses[0]);
  const [mensualoAnual, setMensualoAnual] = useState(true);
  const handleChangeMes = (event) => {
    setMesSeleccionado(event.target.value);
  };

  const dataForChart = meses.map((mes) => {
    const dataObj = { mes };
    for (const categoria in dataApertura) {
      const dato = dataApertura[categoria].find((item) => item.mes === mes);
      dataObj[categoria] = dato ? dato.dato : null;
    }
    return dataObj;
  });

  const colors = [
    "#e6194b", // Red
    "#3cb44b", // Green
    "#ffe119", // Yellow
    "#4363d8", // Blue
    "#f58231", // Orange
    "#911eb4", // Purple
    "#42d4f4", // Cyan
    "#f032e6", // Magenta
    "#bfef45", // Lime
    "#fabebe", // Pink
    "#469990", // Teal
    "#e6beff", // Lavender
    "#9a6324", // Brown
    "#fffac8", // Beige
    "#800000", // Maroon
    "#aaffc3", // Mint
  ];

  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full bg-gray-600 flex items-center justify-start relative">
        <div className="flex justify-center items-center absolute top-0 w-full">
          <select
            value={mesSeleccionado}
            onChange={handleChangeMes}
            className="p-2 w-full text-center bg-blue-900 text-white font-semibold"
          >
            {meses.map((mes, index) => (
              <option key={index} value={mes}>
                {mes}
              </option>
            ))}
          </select>
          <button
            className={`w-32 text-xs mx-2 rounded ${
              mensualoAnual ? "bg-gray-400" : "bg-gray-200"
            }`}
            onClick={() => setMensualoAnual(false)}
          >
            Variación Intermensual
          </button>
          <button
            className={`w-32 text-xs mx-2 rounded ${
              mensualoAnual ? "bg-gray-200" : "bg-gray-400"
            }`}
            onClick={() => setMensualoAnual(true)}
          >
            Variación Interanual
          </button>
        </div>
        <ResponsiveContainer height={"90%"} width={"100%"}>
          <LineChart
            data={dataForChart}
            margin={{ top: 5, right: 50, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" tick={{ fill: "white" }} />
            <YAxis domain={[50, 200]} tick={{ fill: "white" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                color: "#fff",
                fontSize: "12px",
              }}
              cursor={{ stroke: "#333", strokeWidth: 2 }}
            />
            {Object.keys(dataApertura).map((categoria, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={categoria}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-1/2 h-full bg-gray-800 grid grid-cols-4 grid-rows-4">
        {categorias.map((categoria, index) => {
          const datoObj = dataApertura[categoria].find(
            (item) => item.mes === mesSeleccionado
          );
          const dato = datoObj?.dato;
          const intermensual = datoObj?.intermensual;
          const interanual = datoObj?.interanual;

          const fila = Math.floor(index / 4);
          const columna = index % 4;
          const isEvenRow = fila % 2 === 0;
          const isEvenColumn = columna % 2 === 0;
          const backgroundColorClass =
            (isEvenRow && !isEvenColumn) || (!isEvenRow && isEvenColumn)
              ? "bg-gray-200 text-gray-800"
              : "bg-gray-800 text-gray-200";

          const getArrow = (value) => {
            if (value > 0) {
              return <FaArrowUp className="text-green-500 ml-2" size={15} />;
            } else if (value < 0) {
              return <FaArrowDown className="text-red-500 ml-2" size={15} />;
            }
            return null;
          };

          return (
            <div
              key={index}
              className={`flex justify-center items-center flex-col ${backgroundColorClass}`}
            >
              <div className="h-full w-full flex items-center justify-between flex-col p-1">
                <div className="w-full h-1/5 flex">
                  {" "}
                  <div className="w-12 h-12">
                    <img
                      src={`/assets/emae/${categoria
                        .split(" ")[0]
                        .toLowerCase()}.png`}
                      alt=""
                    />
                  </div>
                  <p className="flex items-center justify-center w-full text-center text-xs font-semibold text-yellow-600">
                    {categoria}
                  </p>
                </div>
                <div className="w-full h-4/5 flex flex-col justify-evenly">
                  <p className="flex flex-col items-center text-5xl">{dato}</p>
                  {!mensualoAnual ? (
                    <p className="flex flex-col items-center text-[8px]">
                      VARIACION INTERMENSUAL:{" "}
                      <span className="text-2xl flex items-center">
                        {intermensual}pp {getArrow(intermensual)}
                      </span>
                    </p>
                  ) : (
                    <p className="flex flex-col items-center text-[8px]">
                      VARIACION INTERANUAL:{" "}
                      <span className="text-2xl flex items-center">
                        {interanual}pp {getArrow(interanual)}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
