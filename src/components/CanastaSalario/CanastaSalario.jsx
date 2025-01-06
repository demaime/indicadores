import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Line,
  ReferenceLine,
  LineChart,
} from "recharts";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaMinus, FaEllipsisH } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
];

const individualAlimentariaNacio = [
  { mes: "enero", valor: 92415 },
  { mes: "febrero", valor: 104483 },
  { mes: "marzo", valor: 115873 },
  { mes: "abril", valor: 120726 },
  { mes: "mayo", valor: 125235 },
  { mes: "junio", valor: 127288 },
  { mes: "julio", valor: 131294 },
  { mes: "agosto", valor: 136399 },
  { mes: "septiembre", valor: 138744 },
  { mes: "octubre", valor: 140654 },
  { mes: "noviembre", valor: 142149 },
];

const individualTotalNacio = [
  { mes: "enero", valor: 193147 },
  { mes: "febrero", valor: 223593 },
  { mes: "marzo", valor: 250286 },
  { mes: "abril", valor: 268012 },
  { mes: "mayo", valor: 275518 },
  { mes: "junio", valor: 282579 },
  { mes: "julio", valor: 291472 },
  { mes: "agosto", valor: 304170 },
  { mes: "septiembre", valor: 312175 },
  { mes: "octubre", valor: 319284 },
  { mes: "noviembre", valor: 324099 },
];

const individualAlimentariaCaba = [
  { mes: "enero", valor: 114939 },
  { mes: "febrero", valor: 132050 },
  { mes: "marzo", valor: 144996 },
  { mes: "abril", valor: 153173 },
  { mes: "mayo", valor: 159367 },
  { mes: "junio", valor: 162917 },
  { mes: "julio", valor: 171017 },
  { mes: "agosto", valor: 175899 },
  { mes: "septiembre", valor: 178748 },
  { mes: "octubre", valor: 180442 },
  { mes: "noviembre", valor: 188878 },
];

const individualTotalCaba = [
  { mes: "enero", valor: 194892 },
  { mes: "febrero", valor: 231638 },
  { mes: "marzo", valor: 261355 },
  { mes: "abril", valor: 288293 },
  { mes: "mayo", valor: 300990 },
  { mes: "junio", valor: 314801 },
  { mes: "julio", valor: 328596 },
  { mes: "agosto", valor: 342870 },
  { mes: "septiembre", valor: 353289 },
  { mes: "octubre", valor: 361868 },
  { mes: "noviembre", valor: 369010 },
];

const canastaAlimentariaNacio = [
  { mes: "enero", valor: 285561, variacion: 18.6, acumulada: 18.6 },
  { mes: "febrero", valor: 322851, variacion: 13.1, acumulada: 34.4 },
  { mes: "marzo", valor: 358049, variacion: 10.9, acumulada: 48.8 },
  { mes: "abril", valor: 373044, variacion: 4.2, acumulada: 55 },
  { mes: "mayo", valor: 386978, variacion: 3.7, acumulada: 60.8 },
  { mes: "junio", valor: 393319, variacion: 1.63, acumulada: 63.4 },
  { mes: "julio", valor: 405697, variacion: 3.14, acumulada: 68.6 },
  { mes: "agosto", valor: 421474, variacion: 3.9, acumulada: 75.1 },
  { mes: "septiembre", valor: 428720, variacion: 1.7, acumulada: 78.1 },
  { mes: "octubre", valor: 434620, variacion: 1.4, acumulada: 80.6 },
  { mes: "noviembre", valor: 439420, variacion: 1.1, acumulada: 82.6 },
];

const canastaTotalNacio = [
  { mes: "enero", valor: 596823, variacion: 20.4, acumulada: 20.4 },
  { mes: "febrero", valor: 690902, variacion: 15.8, acumulada: 39.4 },
  { mes: "marzo", valor: 773385, variacion: 11.94, acumulada: 56 },
  { mes: "abril", valor: 828158, variacion: 7.1, acumulada: 67 },
  { mes: "mayo", valor: 851351, variacion: 2.8, acumulada: 71.7 },
  { mes: "junio", valor: 873169, variacion: 2.56, acumulada: 76.1 },
  { mes: "julio", valor: 900648, variacion: 3.15, acumulada: 81.7 },
  { mes: "agosto", valor: 939887, variacion: 4.4, acumulada: 89.6 },
  { mes: "septiembre", valor: 964620, variacion: 2.6, acumulada: 94.6 },
  { mes: "octubre", valor: 986586, variacion: 2.3, acumulada: 99 },
  { mes: "noviembre", valor: 1001466, variacion: 1.5, acumulada: 102 },
];

const canastaAlimentariaCaba = [
  { mes: "enero", valor: 350564, variacion: 20.7, acumulada: 20.7 },
  { mes: "febrero", valor: 402752, variacion: 14.9, acumulada: 38.7 },
  { mes: "marzo", valor: 442239, variacion: 9.8, acumulada: 52.3 },
  { mes: "abril", valor: 467177, variacion: 5.63, acumulada: 60.9 },
  { mes: "mayo", valor: 486068, variacion: 4, acumulada: 67.4 },
  { mes: "junio", valor: 496898, variacion: 2.23, acumulada: 71.1 },
  { mes: "julio", valor: 521602, variacion: 4.41, acumulada: 79.6 },
  { mes: "agosto", valor: 536493, variacion: 2.9, acumulada: 84.7 },
  { mes: "septiembre", valor: 545183, variacion: 1.6, acumulada: 87.7 },
  { mes: "octubre", valor: 550350, variacion: 0.9, acumulada: 89.5 },
  { mes: "noviembre", valor: 551679, variacion: 0.2, acumulada: 90 },
];

const canastaTotalCaba = [
  { mes: "enero", valor: 590042, variacion: 19.3, acumulada: 19.3 },
  { mes: "febrero", valor: 684115, variacion: 15.9, acumulada: 38.3 },
  { mes: "marzo", valor: 766146, variacion: 11.99, acumulada: 54.8 },
  { mes: "abril", valor: 825809, variacion: 7.78, acumulada: 66.9 },
  { mes: "mayo", valor: 860100, variacion: 2.8, acumulada: 73.8 },
  { mes: "junio", valor: 890590, variacion: 3.54, acumulada: 80 },
  { mes: "julio", valor: 929845, variacion: 4.41, acumulada: 87.9 },
  { mes: "agosto", valor: 966228, variacion: 3.9, acumulada: 95.3 },
  { mes: "septiembre", valor: 993854, variacion: 2.9, acumulada: 100.9 },
  { mes: "octubre", valor: 1015908, variacion: 2.2, acumulada: 105.3 },
  { mes: "noviembre", valor: 1032246, variacion: 1.6, acumulada: 108.6 },
];

const smvm = [
  { mes: "enero", valor: 156000 },
  { mes: "febrero", valor: 180000 },
  { mes: "marzo", valor: 202800 },
  { mes: "abril", valor: 221252 },
  { mes: "mayo", valor: 234315 },
  { mes: "junio", valor: 234315 },
  { mes: "julio", valor: 254232 },
  { mes: "agosto", valor: 262433 },
  { mes: "septiembre", valor: 268057 },
  { mes: "septiembre", valor: 271571 },
  { mes: "noviembre", valor: 271571 },
];

const jubilacionSinBono = [
  { mes: "enero", valor: 165923 },
  { mes: "febrero", valor: 146575 },
  { mes: "marzo", valor: 167941 },
  { mes: "abril", valor: 196650 },
  { mes: "mayo", valor: 203071 },
  { mes: "junio", valor: 206931 },
  { mes: "julio", valor: 215622 },
  { mes: "agosto", valor: 225454 },
  { mes: "septiembre", valor: 234540 },
  { mes: "octubre", valor: 244321 },
  { mes: "noviembre", valor: 252799 },
];

const jubilacionConBono = [
  { mes: "enero", valor: 252249 },
  { mes: "febrero", valor: 222835 },
  { mes: "marzo", valor: 255380 },
  { mes: "abril", valor: 277017 },
  { mes: "mayo", valor: 277831 },
  { mes: "junio", valor: 276931 },
  { mes: "julio", valor: 285851 },
  { mes: "agosto", valor: 295454 },
  { mes: "septiembre", valor: 304540 },
  { mes: "octubre", valor: 314321 },
  { mes: "noviembre", valor: 322799 },
];

const contenidoTippy = {
  basica:
    "La Canasta Básica Alimentaria (CBA) se define como el conjunto de alimentos que satisfacen ciertos requerimientos nutricionales, y cuya estructura refleja el patrón de consumo de alimentos de la población de referencia. La población de referencia se identifica como aquel grupo de hogares cuyos consumos en alimentos cubren las necesidades alimentarias del hogar. Considerada “línea de indigencia”.",
  total:
    "La Canasta Básica Total (CBT), se obtiene mediante la ampliación de la CBA considerando los bienes y servicios no alimentarios (vestimenta, transporte, educación, salud, etcétera) consumidos por la población de referencia. Considerada “línea de pobreza.",
};

const tippyGraficos = (
  <div style={{ fontSize: "14px", textAlign: "justify", padding: "4px" }}>
    <ul>
      <li>
        <strong>Individual</strong>: Gráfico evolutivo de variables de ingresos
        individuales comparando las líneas de pobreza e indigencia con los
        ingresos de un salario mínimo o un jubilado.
      </li>
      <br />
      <li>
        <strong>Grupo familiar</strong>: Gráfico evolutivo de variables de
        ingresos de una familia tipo, con dos adultos que perciben el salario
        mínimo + 2 hijos en edad escolar y dos jubilados que perciben la mínima.
      </li>
    </ul>
  </div>
);

export default function CanastaSalario() {
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [dataCanasta, setDataCanasta] = useState("nacional");
  const [chartType, setChartType] = useState("individual");

  const handleMesChange = (event) => {
    setMesSeleccionado(event.target.value);
  };

  const formatNumber = (number) => {
    return `$${number.toLocaleString()}`;
  };

  const dataGrafico = meses.map((mes, index) => {
    if (chartType === "individual") {
      return {
        mes,
        "Canasta Alimentaria":
          dataCanasta === "nacional"
            ? individualAlimentariaNacio[index].valor
            : individualAlimentariaCaba[index].valor,
        "Canasta Total":
          dataCanasta === "nacional"
            ? individualTotalNacio[index].valor
            : individualTotalCaba[index].valor,
        "Salario Mínimo Vital y Móvil": smvm[index].valor,
        "Jubilación sin Bono": jubilacionSinBono[index].valor,
        "Jubilación con Bono": jubilacionConBono[index].valor,
      };
    } else {
      return {
        mes,
        "Canasta Alimentaria":
          dataCanasta === "nacional"
            ? canastaAlimentariaNacio[index].valor
            : canastaAlimentariaCaba[index].valor,
        "Canasta Total":
          dataCanasta === "nacional"
            ? canastaTotalNacio[index].valor
            : canastaTotalCaba[index].valor,
        "Salario Mínimo Vital y Móvil": smvm[index].valor * 2,
        "Jubilación sin Bono": jubilacionSinBono[index].valor * 2,
        "Jubilación con Bono": jubilacionConBono[index].valor * 2,
      };
    }
  });

  return (
    <div className="w-full h-full flex flex-col bg-gray-200">
      <div className="w-full flex items-center h-[5%]">
        <div className="relative w-full h-full flex">
          <div className="flex w-64 justify-evenly">
            <button
              onClick={() => setDataCanasta("nacional")}
              className={`border w-24 rounded text-xs p-3 bg-[#f57b6dff] w-full flex items-center justify-center ${
                dataCanasta === "nacional" ? "font-bold" : ""
              }`}
            >
              NACIONAL
            </button>
            <button
              onClick={() => setDataCanasta("caba")}
              className={`border w-24 rounded text-xs p-3 bg-yellow-400 w-full flex items-center justify-center ${
                dataCanasta === "caba" ? "font-bold" : ""
              }`}
            >
              CABA
            </button>
          </div>
          <select
            value={mesSeleccionado}
            onChange={handleMesChange}
            className={`text-lg w-full h-full rounded-lg font-semibold flex items-center justify-center appearance-none outline-none text-center p-1 ${
              dataCanasta === "nacional" ? "bg-pink-200" : "bg-yellow-200"
            }`}
          >
            {meses.map((mes, index) => (
              <option
                className={
                  dataCanasta === "nacional" ? "bg-pink-200" : "bg-yellow-200"
                }
                key={index}
                value={mes}
              >
                {mes.toUpperCase()}
              </option>
            ))}
          </select>
          <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800 text-2xl" />
        </div>
      </div>
      <div className="w-full h-[95%] flex">
        <div className="h-full w-1/2 bg-gray-200 flex flex-col">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="h-1/2">
              <h1 className="bg-gray-700 text-white px-2 w-full flex items-center justify-between">
                CANASTA BASICA ALIMENTARIA (HOGAR 4 INTEGRANTES)
                <Tippy content={contenidoTippy.basica} allowHTML="true">
                  <span className="mr-1 flex rounded-full bg-white font-black text-black items-center justify-center w-4 h-4 text-[10px]">
                    ?
                  </span>
                </Tippy>
              </h1>

              <div className="w-full h-full flex">
                <ResponsiveContainer width="50%" height="90%">
                  <BarChart
                    className="p-2 font-bold text-white"
                    layout="horizontal"
                    data={
                      dataCanasta === "nacional"
                        ? canastaAlimentariaNacio
                        : canastaAlimentariaCaba
                    }
                    margin={{ top: 20, right: 0, left: 20, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis
                      type="number"
                      domain={[0, 500000]}
                      tickFormatter={formatNumber}
                    />
                    <XAxis
                      dataKey="mes"
                      type="category"
                      tick={{
                        fill: "#1f2937",
                        fontSize: "10",
                      }}
                    />
                    <Tooltip formatter={formatNumber} />
                    <Bar
                      dataKey="valor"
                      fill={
                        dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"
                      }
                      label={({ index, x, y, width, value }) =>
                        index % 2 !== 0 ? (
                          <text
                            x={x + width / 2}
                            y={y - 5}
                            fill="#1f2937"
                            fontSize={10}
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {formatNumber(value)}
                          </text>
                        ) : null
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>

                <div className="w-1/2 h-full">
                  <div className="h-full w-full flex flex-col items-center justify-evenly">
                    <div className="w-2/3 text-xs h-1/5 bg-gray-700 text-white rounded flex flex-col items-center justify-evenly">
                      VALOR MENSUAL
                      <span className="text-3xl font-bold">
                        {dataCanasta === "nacional"
                          ? formatNumber(
                              canastaAlimentariaNacio.find(
                                (item) => item.mes === mesSeleccionado
                              )?.valor
                            )
                          : formatNumber(
                              canastaAlimentariaCaba.find(
                                (item) => item.mes === mesSeleccionado
                              )?.valor
                            )}
                      </span>
                    </div>
                    <div className="w-2/3 text-xs h-1/5 bg-gray-700 text-white rounded flex flex-col items-center justify-evenly">
                      VARIACION MENSUAL
                      <span className="text-3xl font-bold">
                        {dataCanasta === "nacional"
                          ? canastaAlimentariaNacio.find(
                              (item) => item.mes === mesSeleccionado
                            )?.variacion
                          : canastaAlimentariaCaba.find(
                              (item) => item.mes === mesSeleccionado
                            )?.variacion}
                        %
                      </span>
                    </div>
                    <div className="w-2/3 text-xs h-1/5 bg-gray-700 text-white rounded flex flex-col items-center justify-center">
                      VARIACION ACUMULADA
                      <span className="text-3xl font-bold">
                        {dataCanasta === "nacional"
                          ? canastaAlimentariaNacio.find(
                              (item) => item.mes === mesSeleccionado
                            )?.acumulada
                          : canastaAlimentariaCaba.find(
                              (item) => item.mes === mesSeleccionado
                            )?.acumulada}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1/2">
              <h1 className="bg-gray-400 text-black px-2 w-full flex items-center justify-between">
                CANASTA BASICA TOTAL (HOGAR 4 INTEGRANTES)
                <Tippy content={contenidoTippy.total} allowHTML="true">
                  <span className="mr-1 flex rounded-full bg-white font-black text-black items-center justify-center w-4 h-4 text-[10px]">
                    ?
                  </span>
                </Tippy>
              </h1>
              <div className="w-full h-full flex bg-gray-800">
                <ResponsiveContainer width="50%" height="90%">
                  <BarChart
                    className="p-2 font-bold text-white"
                    layout="horizontal"
                    data={
                      dataCanasta === "nacional"
                        ? canastaTotalNacio
                        : canastaTotalCaba
                    }
                    margin={{ top: 20, right: 0, left: 20, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis
                      type="number"
                      domain={[0, 900000]}
                      tickFormatter={formatNumber}
                      tick={{ fill: "white", fontSize: "10" }}
                    />
                    <XAxis
                      dataKey="mes"
                      type="category"
                      tick={{ fill: "white", fontSize: "10" }}
                    />
                    <Tooltip formatter={formatNumber} />
                    <Bar
                      dataKey="valor"
                      fill={
                        dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"
                      }
                      label={({ index, x, y, width, value }) =>
                        index % 2 !== 0 ? (
                          <text
                            x={x + width / 2}
                            y={y - 5}
                            fill="#ffffff"
                            fontSize={10}
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {formatNumber(value)}
                          </text>
                        ) : null
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
                <div className="w-1/2 h-full">
                  <div className="h-full w-full flex flex-col items-center justify-evenly">
                    <div className="w-2/3 text-xs h-1/5 bg-gray-400 rounded flex flex-col items-center justify-evenly">
                      VALOR MENSUAL
                      <span className="text-3xl font-bold">
                        {dataCanasta === "nacional"
                          ? formatNumber(
                              canastaTotalNacio.find(
                                (item) => item.mes === mesSeleccionado
                              )?.valor
                            )
                          : formatNumber(
                              canastaTotalCaba.find(
                                (item) => item.mes === mesSeleccionado
                              )?.valor
                            )}
                      </span>
                    </div>
                    <div className="w-2/3 text-xs h-1/5 bg-gray-400 rounded flex flex-col items-center justify-evenly">
                      VARIACION MENSUAL
                      <span className="text-3xl font-bold">
                        {dataCanasta === "nacional"
                          ? canastaTotalNacio.find(
                              (item) => item.mes === mesSeleccionado
                            )?.variacion
                          : canastaTotalCaba.find(
                              (item) => item.mes === mesSeleccionado
                            )?.variacion}
                        %
                      </span>
                    </div>
                    <div className="w-2/3 text-xs h-1/5 bg-gray-400 rounded flex flex-col items-center justify-center">
                      VARIACION ACUMULADA
                      <span className="text-3xl font-bold">
                        {dataCanasta === "nacional"
                          ? canastaTotalNacio.find(
                              (item) => item.mes === mesSeleccionado
                            )?.acumulada
                          : canastaTotalCaba.find(
                              (item) => item.mes === mesSeleccionado
                            )?.acumulada}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 bg-white flex flex-col items-center justify-evenly">
          <div className="w-1/2 h-[10%] flex items-center justify-evenly relative">
            <button
              onClick={() => setChartType("individual")}
              className={`w-32 h-8 px-2 text-xs rounded shadow shadow-black font-semibold hover:scale-105 ${
                chartType === "individual"
                  ? "bg-gray-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              INDIVIDUAL
            </button>
            <button
              onClick={() => setChartType("grupo")}
              className={`w-32 h-8 px-2 text-xs rounded shadow shadow-black font-semibold hover:scale-105 ${
                chartType === "grupo"
                  ? "bg-gray-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              GRUPO FAMILIAR
            </button>
            <Tippy content={tippyGraficos} allowHTML="true">
              <span className="absolute mr-1 flex rounded-full bg-gray-200 font-black text-black items-center justify-center w-4 h-4 text-[10px]">
                ?
              </span>
            </Tippy>
          </div>
          <ResponsiveContainer width="90%" height="75%">
            <LineChart
              data={dataGrafico}
              margin={{ top: 30, right: 20, left: 25, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis tickFormatter={formatNumber} />
              <Tooltip formatter={formatNumber} />
              <Line
                type="monotone"
                dataKey="Canasta Total"
                stroke={dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"}
                dot={{
                  stroke: dataCanasta === "nacional" ? "#f57b6dff" : "#facc15",
                  fill: dataCanasta === "nacional" ? "#f57b6dff" : "#facc15",
                }}
                strokeWidth={2}
                strokeDasharray="15 10"
              />
              <Line
                type="monotone"
                dataKey="Canasta Alimentaria"
                stroke={dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"}
                dot={{
                  stroke: dataCanasta === "nacional" ? "#f57b6dff" : "#facc15",
                  fill: dataCanasta === "nacional" ? "#f57b6dff" : "#facc15",
                }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Salario Mínimo Vital y Móvil"
                stroke="#8884d8"
                dot={{
                  stroke: "#8884d8",
                  fill: "#8884d8",
                }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Jubilación sin Bono"
                stroke="#50e82e"
                dot={{
                  stroke: "#50e82e",
                  fill: "#50e82e",
                }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Jubilación con Bono"
                stroke="#32a852"
                dot={{
                  stroke: "#32a852",
                  fill: "#32a852",
                }}
                strokeWidth={2}
              />
              <ReferenceLine
                style={{ opacity: 0.2 }}
                x={mesSeleccionado}
                stroke="gray"
                strokeWidth={18}
                // strokeDasharray="1 1"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="w-full h-[10%] bg-gray-200 border-t-2 border-gray-400 flex items-center justify-evenly text-[10px]">
            <div className="w-1/6 h-8 bg-white rounded border border-gray-400 flex items-center justify-evenly">
              <FaMinus className="text-xl text-[#8884d8]" />
              <p className="flex items-center justify-center">Salario MVM</p>
            </div>
            <div className="w-1/6 h-8 bg-white rounded border border-gray-400 flex items-center justify-evenly">
              <FaMinus className="text-xl text-[#32a852]" />
              <p className="flex items-center justify-center">
                Jubilación c/ Bono
              </p>
            </div>
            <div className="w-1/6 h-8 bg-white rounded border border-gray-400 flex items-center justify-evenly">
              <FaMinus className="text-xl text-[#50e82e]" />
              <p className="flex items-center justify-center">
                Jubilación s/ Bono
              </p>
            </div>
            <div className="w-1/6 h-8 bg-white rounded border border-gray-400 flex items-center justify-evenly">
              <FaMinus
                className={`text-xl ${
                  dataCanasta === "nacional"
                    ? "text-[#f57b6dff]"
                    : "text-[#facc15]"
                }`}
              />
              <p className="flex items-center justify-center">
                Canasta B. Alimentaria
              </p>
            </div>
            <div className="w-1/6 h-8 bg-white rounded border border-gray-400 flex items-center justify-evenly">
              <FaEllipsisH
                className={`text-xl ${
                  dataCanasta === "nacional"
                    ? "text-[#f57b6dff]"
                    : "text-[#facc15]"
                }`}
              />
              <p className="flex items-center justify-center">
                Canasta B. Total
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
