import React, { useState } from "react";
import {
  XAxis,
  Bar,
  BarChart,
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
    Nafta: 553,
    PeajeNorte: 254.03,
    PeajeOeste: 611.03,
    Patentamiento: 9317,
  },
  {
    Mes: "enero",
    Subte: 110,
    Tren: 43.38,
    Colectivo: 76.92,
    Nafta: 699,
    PeajeNorte: 378.5,
    PeajeOeste: 910.43,
    Patentamiento: 21728,
  },
  {
    Mes: "febrero",
    Subte: 125,
    Tren: 130,
    Colectivo: 270,
    Nafta: 744,
    PeajeNorte: 378.5,
    PeajeOeste: 910.43,
    Patentamiento: 16611,
  },
  {
    Mes: "marzo",
    Subte: 125,
    Tren: 130,
    Colectivo: 270,
    Nafta: 800,
    PeajeNorte: 378.5,
    PeajeOeste: 910.43,
    Patentamiento: 17282,
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

const CustomizedLabelNafta = ({ x, y, stroke, index }) => {
  let variation = 0;
  if (index < data.length - 1) {
    const validKeys = Object.keys(data[index]).filter((key) => key !== "Mes");
    const currentValue = data[index][validKeys[3]];

    const nextValue = data[index + 1][validKeys[3]];
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

const CustomizedLabelPeajeNorte = ({ x, y, stroke, index }) => {
  let variation = 0;
  if (index < data.length - 1) {
    const validKeys = Object.keys(data[index]).filter((key) => key !== "Mes");
    const currentValue = data[index][validKeys[4]];

    const nextValue = data[index + 1][validKeys[4]];
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

const CustomizedLabelPeajeOeste = ({ x, y, stroke, index }) => {
  let variation = 0;
  if (index < data.length - 1) {
    const validKeys = Object.keys(data[index]).filter((key) => key !== "Mes");
    const currentValue = data[index][validKeys[5]];

    const nextValue = data[index + 1][validKeys[5]];
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

export default function Transporte() {
  const [mesSeleccionadoIndex, setMesSeleccionadoIndex] = useState(
    data.length - 1
  );
  const [oesteOnorte, setOesteOnorte] = useState(true);

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

  const calcularVariacionMensual = (valorActual, valorAnterior) => {
    if (valorAnterior === 0 || mesSeleccionadoIndex === 0) {
      return "-";
    }
    const variacion = ((valorActual - valorAnterior) / valorAnterior) * 100;
    return `${variacion.toFixed(2)}%`;
  };

  const mesSeleccionado = data[mesSeleccionadoIndex].Mes.toLowerCase();

  const variacionesAnuales = [
    {
      Mes: "diciembre",
      Subte: "-",
      Tren: "-",
      Colectivo: "-",
      Nafta: "-",
      PeajeNorte: "-",
      PeajeOeste: "-",
    },
    {
      Mes: "enero",
      Subte: 37.5,
      Tren: 45.28,
      Colectivo: 47.92,
      Nafta: 26.4,
      PeajeNorte: 49,
      PeajeOeste: 49,
    },
    {
      Mes: "febrero",
      Subte: 51.14,
      Tren: 244.96,
      Colectivo: 298.93,
      Nafta: 32.84,
      PeajeNorte: 49,
      PeajeOeste: 49,
    },
    {
      Mes: "marzo",
      Subte: 51.14,
      Tren: 244.96,
      Colectivo: 298.93,
      Nafta: 32.84,
      PeajeNorte: 49,
      PeajeOeste: 49,
    },
  ];

  const variacionInteranualPatentes = {
    diciembre: -20.8,
    enero: -33.5,
    febrero: -14.2,
    marzo: -31.1,
  };

  return (
    <div className="h-full w-full flex relative">
      <div className="w-1/4 h-full bg-gray-700">
        <div className="w-full h-8 absolute top-1/2 justify-center flex items-center">
          <div className="w-full flex h-full bg-gray-900 justify-evenly flex items-center">
            <RiArrowLeftSLine
              className=" cursor-pointer rounded-full bg-yellow-400"
              color="black"
              onClick={() => cambiarMes("anterior")}
            />
            <select
              value={data[mesSeleccionadoIndex].Mes}
              onChange={(e) =>
                setMesSeleccionadoIndex(
                  data.findIndex((mesData) => mesData.Mes === e.target.value)
                )
              }
              className="text-gray-200 font-semibold bg-transparent w-2/3 text-center appearance-none"
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
              <XAxis
                dataKey="Mes"
                interval={0}
                tick={{ fontSize: 12, fill: "white" }}
              />
              <YAxis
                tickFormatter={(value) => `$${value}`}
                tick={{ fill: "white" }}
                domain={[400, 1200]}
              />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />

              {/* Línea para la serie "Subte" */}
              <Line
                type="monotone"
                dataKey="Nafta"
                stroke="#f6893b"
                strokeWidth={2}
                dot={{ stroke: "#f6893b", strokeWidth: 2 }}
                label={<CustomizedLabelNafta stroke="#f6893b" />}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-1/2 w-full">
          <div className="h-[10%] w-full"></div>
          <div className="h-[90%] w-full flex flex-col items-center justify-evenly">
            <div className="w-full h-2/5   flex items-center justify-center">
              <img src="/assets/nafta.png" alt="" className="w-16 h-16 " />
            </div>
            <div className="w-full h-3/5 flex items-center justify-center text-gray-700">
              <div className="w-[80%] h-[80%] rounded-xl bg-gray-300 ">
                <div className="w-full h-1/2 flex flex-col items-center justify-evenly">
                  <div className="text-md font-semibold">Valor</div>
                  <div className="bg-[#f6893b] w-1/3 rounded-xl font-bold text-center text-2xl">
                    $ {data[mesSeleccionadoIndex].Nafta}
                  </div>
                </div>
                <div className="w-full h-1/2 flex">
                  <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
                    <div className="text-xs font-semibold">
                      Variación Mensual
                    </div>
                    <div className="bg-[#f6893b] w-2/3 rounded-xl font-bold text-center text-xl">
                      {calcularVariacionMensual(
                        data[mesSeleccionadoIndex].Nafta,
                        data[
                          mesSeleccionadoIndex - 1 < 0
                            ? data.length - 1
                            : mesSeleccionadoIndex - 1
                        ].Nafta
                      )}
                    </div>
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
                    <div className="text-xs font-semibold">Acumulada Anual</div>
                    <div className="bg-[#f6893b] w-2/3 rounded-xl font-bold text-center text-xl">
                      {variacionesAnuales[mesSeleccionadoIndex].Nafta}%{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-full bg-gray-300">
        <div className="w-full h-1/2 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              className="p-2 font-bold text-white"
              layout="vertical"
              data={data}
              margin={{ top: 0, right: 30, left: 30, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="Mes" type="category" tick={{ fill: "#1f2937" }} />
              <Tooltip />
              <Legend />
              <Bar
                label={{
                  fill: "#1f2937",
                  fontSize: 12,
                  fontWeight: "bold",
                  position: "inside",
                }}
                dataKey="Patentamiento"
                fill="#e95faa"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-1/2 w-full">
          <div className="h-[10%] w-full"></div>
          <div className="h-[90%] w-full flex flex-col items-center justify-evenly">
            <div className="w-full h-2/5 flex items-center justify-center">
              <img src="/assets/auto.png" alt="" className="w-16 h-16 " />
            </div>
            <div className="w-full h-3/5 flex items-center justify-center text-gray-300">
              <div className="w-[80%] h-[80%] rounded-xl bg-gray-700 ">
                <div className="w-full h-1/2 flex flex-col items-center justify-evenly">
                  <div className="text-md font-semibold">Valor</div>
                  <div className="bg-[#e95faa] flex items-center w-2/3 justify-center rounded-xl font-bold text-center text-2xl">
                    {data[mesSeleccionadoIndex].Patentamiento}{" "}
                    <span className="text-[14px] flex items-center pl-2 ">
                      Automóviles
                    </span>
                  </div>
                </div>
                <div className="w-full h-1/2 flex">
                  <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
                    <div className="text-xs font-semibold">
                      Variación Mensual
                    </div>
                    <div className="bg-[#e95faa] w-2/3 rounded-xl font-bold text-center text-xl">
                      {calcularVariacionMensual(
                        data[mesSeleccionadoIndex].Patentamiento,
                        data[
                          mesSeleccionadoIndex - 1 < 0
                            ? data.length - 1
                            : mesSeleccionadoIndex - 1
                        ].Patentamiento
                      )}
                    </div>
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
                    <div className="text-xs font-semibold">
                      Variacion Interanual
                    </div>
                    <div className="bg-[#e95faa] w-2/3 rounded-xl font-bold text-center text-xl">
                      {variacionInteranualPatentes[mesSeleccionado]}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-gray-600">
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
              <XAxis
                dataKey="Mes"
                interval={0}
                tick={{ fontSize: 12, fill: "white" }}
              />
              <YAxis
                tickFormatter={(value) => `$${value}`}
                tick={{ fill: "white" }}
              />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />

              {/* Línea para la serie "Subte" */}
              <Line
                type="monotone"
                dataKey="Subte"
                stroke="#44f56c"
                strokeWidth={2}
                dot={{ stroke: "#44f56c", strokeWidth: 2 }}
                label={<CustomizedLabelSubte stroke="#44f56c" />}
              />

              {/* Línea para la serie "Tren" */}
              <Line
                type="monotone"
                dataKey="Tren"
                stroke="#5f91ff"
                strokeWidth={2}
                dot={{ stroke: "#5f91ff", strokeWidth: 2 }}
                label={<CustomizedLabelTren stroke="#5f91ff" />}
              />

              {/* Línea para la serie "Colectivo" */}
              <Line
                type="monotone"
                dataKey="Colectivo"
                stroke="#ef7070"
                strokeWidth={2}
                dot={{ stroke: "#ef7070", strokeWidth: 2 }}
                label={<CustomizedLabelColectivo stroke="#ef7070" />}
              />
              <Line
                type="monotone"
                dataKey="PeajeOeste"
                stroke="#feef6a"
                strokeDasharray="3 3"
                strokeWidth={2}
                dot={{ stroke: "#feef6a", strokeWidth: 2 }}
                label={<CustomizedLabelPeajeOeste stroke="#feef6a" />}
              />
              <Line
                type="monotone"
                dataKey="PeajeNorte"
                stroke="#f9d900"
                strokeDasharray="3 3"
                strokeWidth={2}
                dot={{ stroke: "#f9d900", strokeWidth: 2 }}
                label={<CustomizedLabelPeajeNorte stroke="#f9d900" />}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-1/2 w-full">
          <div className="h-[10%] w-full"></div>
          <div className="h-[90%] w-full">
            <div className="w-full flex items-center justify-between h-1/2">
              <div className="w-[45%] bg-gray-800 rounded-r-full h-2/3 relative flex">
                <div className="w-1/3 h-full text-white p-1">
                  <div className="w-full h-1/2">
                    <div className="w-full h-1/3 text-[10px] text-[#44f56c] font-semibold flex items-center justify-center">
                      Variación Mensual
                    </div>
                    <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                      {calcularVariacionMensual(
                        data[mesSeleccionadoIndex].Subte,
                        data[
                          mesSeleccionadoIndex - 1 < 0
                            ? data.length - 1
                            : mesSeleccionadoIndex - 1
                        ].Subte
                      )}
                    </div>
                  </div>
                  <div className="w-full h-1/2">
                    {" "}
                    <div className="w-full h-1/3 text-[10px] text-[#44f56c] font-semibold flex items-center justify-center">
                      Acumulada Anual
                    </div>
                    <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                      {variacionesAnuales[mesSeleccionadoIndex].Subte}%
                    </div>
                  </div>
                </div>
                <div className="w-1/3 h-full text-white text-center">
                  <div className="w-full h-1/3 text-xs text-[#44f56c] font-semibold flex items-center justify-center">
                    Valor
                  </div>
                  <div className="w-full h-2/3 text-xl font-bold">
                    $ {data[mesSeleccionadoIndex].Subte}
                  </div>
                </div>
                <div className="absolute rounded-full w-20 h-20 right-5 top-[12%]">
                  <img
                    src="/assets/subte.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="w-[45%] bg-gray-800 rounded-l-full h-2/3 relative flex">
                <div className="w-1/3 h-full"></div>
                <div className="w-1/3 h-full text-white text-center">
                  <div className="w-full h-1/3 text-xs text-[#5f91ff] font-semibold flex items-center justify-center">
                    Valor
                  </div>
                  <div className="w-full h-2/3 text-xl font-bold">
                    $ {data[mesSeleccionadoIndex].Tren}
                  </div>
                </div>
                <div className="w-1/3 h-full text-white p-1">
                  <div className="w-full h-1/2">
                    <div className="w-full h-1/3 text-[10px] text-[#5f91ff] font-semibold flex items-center justify-center">
                      Variación Mensual
                    </div>
                    <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                      {calcularVariacionMensual(
                        data[mesSeleccionadoIndex].Tren,
                        data[
                          mesSeleccionadoIndex - 1 < 0
                            ? data.length - 1
                            : mesSeleccionadoIndex - 1
                        ].Tren
                      )}
                    </div>
                  </div>
                  <div className="w-full h-1/2">
                    {" "}
                    <div className="w-full h-1/3 text-[10px] text-[#5f91ff] font-semibold flex items-center justify-center">
                      Acumulada Anual
                    </div>
                    <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                      {variacionesAnuales[mesSeleccionadoIndex].Tren}%{" "}
                    </div>
                  </div>
                </div>

                <div className="absolute rounded-full w-16 h-16 left-5 top-[18%]">
                  <img
                    src="/assets/tren.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between h-1/2">
              <div className="w-[45%] bg-gray-800 rounded-r-full h-2/3 relative flex">
                <div className="w-1/3 h-full text-white p-1">
                  <div className="w-full h-1/2">
                    <div className="w-full h-1/3 text-[10px] text-[#ef7070] font-semibold flex items-center justify-center">
                      Variación Mensual
                    </div>
                    <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                      {calcularVariacionMensual(
                        data[mesSeleccionadoIndex].Colectivo,
                        data[
                          mesSeleccionadoIndex - 1 < 0
                            ? data.length - 1
                            : mesSeleccionadoIndex - 1
                        ].Colectivo
                      )}
                    </div>
                  </div>
                  <div className="w-full h-1/2">
                    {" "}
                    <div className="w-full h-1/3 text-[10px] text-[#ef7070] font-semibold flex items-center justify-center">
                      Acumulada Anual
                    </div>
                    <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                      {variacionesAnuales[mesSeleccionadoIndex].Colectivo}%{" "}
                    </div>
                  </div>
                </div>
                <div className="w-1/3 h-full text-white text-center">
                  <div className="w-full h-1/3 text-xs text-[#ef7070] font-semibold flex items-center justify-center">
                    Valor
                  </div>
                  <div className="w-full h-2/3 text-xl font-bold">
                    $ {data[mesSeleccionadoIndex].Colectivo}
                  </div>
                </div>
                <div className="absolute rounded-full w-20 h-20 right-5 top-[15%]">
                  <img
                    src="/assets/bondi.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              {oesteOnorte ? (
                <div className="w-[45%] bg-gray-800 rounded-l-full h-2/3 relative flex">
                  <div className="absolute h-8 w-24 flex items-center justify-evenly -top-8 right-2">
                    <p className="flex text-yellow-400 text-sm font-semibold items-start justify-center">
                      NORTE
                    </p>

                    <div className="rounded-full bg-yellow-200 flex items-center justify-center">
                      <RiArrowRightSLine
                        size={14}
                        className="cursor-pointer"
                        onClick={() => setOesteOnorte(!oesteOnorte)}
                      />
                    </div>
                  </div>
                  <div className="w-1/3 h-full"></div>
                  <div className="w-1/3 h-full text-white text-center">
                    <div className="w-full h-1/3 text-xs text-[#f9d900] font-semibold flex items-center justify-center">
                      Valor
                    </div>
                    <div className="w-full h-2/3 text-2xl font-bold">
                      $ {data[mesSeleccionadoIndex].PeajeNorte}
                    </div>
                  </div>
                  <div className="w-1/3 h-full text-white p-1">
                    <div className="w-full h-1/2">
                      <div className="w-full h-1/3 text-[10px] text-[#f9d900] font-semibold flex items-center justify-center">
                        Variación Mensual
                      </div>
                      <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                        {calcularVariacionMensual(
                          data[mesSeleccionadoIndex].PeajeNorte,
                          data[
                            mesSeleccionadoIndex - 1 < 0
                              ? data.length - 1
                              : mesSeleccionadoIndex - 1
                          ].PeajeNorte
                        )}
                      </div>
                    </div>
                    <div className="w-full h-1/2">
                      {" "}
                      <div className="w-full h-1/3 text-[10px] text-[#f9d900] font-semibold flex items-center justify-center">
                        Acumulada Anual
                      </div>
                      <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                        {variacionesAnuales[mesSeleccionadoIndex].PeajeNorte}%{" "}
                      </div>
                    </div>
                  </div>
                  <div className="absolute rounded-full w-16 h-16 left-5 top-[20%]">
                    <img
                      src="/assets/peajenorte.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-[45%] bg-gray-800 rounded-l-full h-2/3 relative flex">
                  <div className="absolute h-8 w-24 flex items-center justify-evenly -top-8 right-2">
                    <p className="flex text-[#feef6a] text-sm font-semibold items-start justify-center">
                      OESTE
                    </p>

                    <div className="rounded-full bg-yellow-400 flex items-center justify-center">
                      <RiArrowRightSLine
                        size={14}
                        className="cursor-pointer"
                        onClick={() => setOesteOnorte(!oesteOnorte)}
                      />
                    </div>
                  </div>
                  <div className="w-1/3 h-full"></div>
                  <div className="w-1/3 h-full text-white text-center">
                    <div className="w-full h-1/3 text-xs text-[#feef6a] font-semibold flex items-center justify-center">
                      Valor
                    </div>
                    <div className="w-full h-2/3 text-2xl font-bold">
                      $ {data[mesSeleccionadoIndex].PeajeOeste}
                    </div>
                  </div>
                  <div className="w-1/3 h-full text-white p-1">
                    <div className="w-full h-1/2">
                      <div className="w-full h-1/3 text-[10px] text-[#feef6a] font-semibold flex items-center justify-center">
                        Variación Mensual
                      </div>
                      <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                        {calcularVariacionMensual(
                          data[mesSeleccionadoIndex].PeajeOeste,
                          data[
                            mesSeleccionadoIndex - 1 < 0
                              ? data.length - 1
                              : mesSeleccionadoIndex - 1
                          ].PeajeOeste
                        )}
                      </div>
                    </div>
                    <div className="w-full h-1/2">
                      {" "}
                      <div className="w-full h-1/3 text-[10px] text-[#feef6a] font-semibold flex items-center justify-center">
                        Acumulada Anual
                      </div>
                      <div className="w-full h-2/3 text-xl font-bold flex items-center justify-center">
                        {variacionesAnuales[mesSeleccionadoIndex].PeajeOeste}%{" "}
                      </div>
                    </div>
                  </div>
                  <div className="absolute rounded-full w-16 h-16 left-5 top-[20%]">
                    <img
                      src="/assets/peajeoeste.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex items-center justify-between h-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
