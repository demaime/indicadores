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

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"];

const canastaAlimentariaNacio = [
  { mes: "enero", valor: 285561, variacion: 18.6, acumulada: 18.6 },
  { mes: "febrero", valor: 322851, variacion: 13.1, acumulada: 34.4 },
  { mes: "marzo", valor: 358049, variacion: 10.9, acumulada: 48.8 },
  { mes: "abril", valor: 373044, variacion: 4.2, acumulada: 55 },
  { mes: "mayo", valor: 386978, variacion: 3.7, acumulada: 60.8 },
  { mes: "junio", valor: 393319, variacion: 1.63, acumulada: 63.4 },
  { mes: "julio", valor: 405697, variacion: 3.14, acumulada: 68.6 },
];

const canastaTotalNacio = [
  { mes: "enero", valor: 596823, variacion: 20.4, acumulada: 20.4 },
  { mes: "febrero", valor: 690902, variacion: 15.8, acumulada: 39.4 },
  { mes: "marzo", valor: 773385, variacion: 11.94, acumulada: 56 },
  { mes: "abril", valor: 828158, variacion: 7.1, acumulada: 67 },
  { mes: "mayo", valor: 851351, variacion: 2.8, acumulada: 71.7 },
  { mes: "junio", valor: 873169, variacion: 2.56, acumulada: 76.1 },
  { mes: "julio", valor: 900648, variacion: 3.15, acumulada: 81.7 },
];

const canastaAlimentariaCaba = [
  { mes: "enero", valor: 350564, variacion: 20.7, acumulada: 20.7 },
  { mes: "febrero", valor: 402752, variacion: 14.9, acumulada: 38.7 },
  { mes: "marzo", valor: 442239, variacion: 9.8, acumulada: 52.3 },
  { mes: "abril", valor: 467177, variacion: 5.63, acumulada: 67.2 },
  { mes: "mayo", valor: 486068, variacion: 4, acumulada: 73.8 },
  { mes: "junio", valor: 496898, variacion: 2.23, acumulada: 82.1 },
  { mes: "julio", valor: 521602, variacion: 4.41, acumulada: 95.2 },
];

const canastaTotalCaba = [
  { mes: "enero", valor: 590042, variacion: 19.3, acumulada: 19.3 },
  { mes: "febrero", valor: 684115, variacion: 15.9, acumulada: 38.3 },
  { mes: "marzo", valor: 766146, variacion: 11.99, acumulada: 54.9 },
  { mes: "abril", valor: 825809, variacion: 7.78, acumulada: 70.1 },
  { mes: "mayo", valor: 860100, variacion: 2.8, acumulada: 77.2 },
  { mes: "junio", valor: 890590, variacion: 3.54, acumulada: 85.7 },
  { mes: "julio", valor: 929845, variacion: 4.41, acumulada: 95.2 },
];

const smvm = [
  { mes: "enero", valor: 156000 },
  { mes: "febrero", valor: 180000 },
  { mes: "marzo", valor: 202800 },
  { mes: "abril", valor: 221252 },
  { mes: "mayo", valor: 234315 },
  { mes: "junio", valor: 234315 },
  { mes: "julio", valor: 254232 },
];

const jubilacionSinBono = [
  { mes: "enero", valor: 165923 },
  { mes: "febrero", valor: 146575 },
  { mes: "marzo", valor: 167941 },
  { mes: "abril", valor: 196650 },
  { mes: "mayo", valor: 203071 },
  { mes: "junio", valor: 206931 },
  { mes: "julio", valor: 215622 },
];

const jubilacionConBono = [
  { mes: "enero", valor: 252249 },
  { mes: "febrero", valor: 222835 },
  { mes: "marzo", valor: 255380 },
  { mes: "abril", valor: 277017 },
  { mes: "mayo", valor: 277831 },
  { mes: "junio", valor: 276931 },
  { mes: "julio", valor: 285622 },
];

const contenidoTippy = {
  basica:
    "La Canasta Básica Alimentaria (CBA) se define como el conjunto de alimentos que satisfacen ciertos requerimientos nutricionales, y cuya estructura refleja el patrón de consumo de alimentos de la población de referencia. La población de referencia se identifica como aquel grupo de hogares cuyos consumos en alimentos cubren las necesidades alimentarias del hogar. Considerada “línea de indigencia”.",
  total:
    "La Canasta Básica Total (CBT), se obtiene mediante la ampliación de la CBA considerando los bienes y servicios no alimentarios (vestimenta, transporte, educación, salud, etcétera) consumidos por la población de referencia. Considerada “línea de pobreza.",
};

export default function CanastaSalario() {
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [dataCanasta, setDataCanasta] = useState("nacional");

  const handleMesChange = (event) => {
    setMesSeleccionado(event.target.value);
  };

  const formatNumber = (number) => {
    return `$${number.toLocaleString()}`;
  };

  const dataGrafico = meses.map((mes, index) => ({
    mes,
    "Canasta Alimentaria":
      dataCanasta === "nacional"
        ? canastaAlimentariaNacio[index].valor
        : canastaAlimentariaCaba[index].valor,
    "Canasta Total":
      dataCanasta === "nacional"
        ? canastaTotalNacio[index].valor
        : canastaTotalCaba[index].valor,
    "Salario Mínimo Vital y Móvil": smvm[index].valor,
    "Jubilación sin Bono": jubilacionSinBono[index].valor,
    "Jubilación con Bono": jubilacionConBono[index].valor,
  }));

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
                <Tippy content={contenidoTippy.basica}>
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
                      label={{
                        fill: "1f2937",
                        fontSize: 10,
                        fontWeight: "bold",
                        position: "top",
                        formatter: formatNumber,
                      }}
                      dataKey="valor"
                      fill={
                        dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"
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
                <Tippy content={contenidoTippy.total}>
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
                      label={{
                        fill: "#ffffff",
                        fontSize: 10,
                        fontWeight: "bold",
                        position: "top",
                        formatter: formatNumber,
                      }}
                      dataKey="valor"
                      fill={
                        dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"
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
          <ResponsiveContainer width="90%" height="90%">
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
