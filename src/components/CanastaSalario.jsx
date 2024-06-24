import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { MdKeyboardArrowDown } from "react-icons/md";

const meses = ["enero", "febrero", "marzo", "abril", "mayo"];

const canastaAlimentariaNacio = [
  { mes: "enero", valor: 285561, variacion: 18.6, acumulada: 18.6 },
  { mes: "febrero", valor: 322851, variacion: 13.1, acumulada: 34.4 },
  { mes: "marzo", valor: 358049, variacion: 10.9, acumulada: 48.8 },
  { mes: "abril", valor: 373044, variacion: 4.2, acumulada: 55 },
  { mes: "mayo", valor: 386978, variacion: 3.7, acumulada: 60.8 },
];
const canastaTotalNacio = [
  { mes: "enero", valor: 596823, variacion: 20.4, acumulada: 20.4 },
  { mes: "febrero", valor: 690902, variacion: 15.8, acumulada: 39.4 },
  { mes: "marzo", valor: 773385, variacion: 11.94, acumulada: 56 },
  { mes: "abril", valor: 828158, variacion: 7.1, acumulada: 67 },
  { mes: "mayo", valor: 828158, variacion: 2.8, acumulada: 71.7 },
];

const canastaAlimentariaCaba = [
  { mes: "enero", valor: 350564, variacion: 20.7, acumulada: 20.7 },
  { mes: "febrero", valor: 402752, variacion: 14.9, acumulada: 38.7 },
  { mes: "marzo", valor: 442239, variacion: 9.8, acumulada: 52.3 },
  { mes: "abril", valor: 467177, variacion: 5.63, acumulada: 67.2 },
  { mes: "mayo", valor: 486068, variacion: 4, acumulada: 73.8 },
];

const canastaTotalCaba = [
  { mes: "enero", valor: 590042, variacion: 19.3, acumulada: 19.3 },
  { mes: "febrero", valor: 684115, variacion: 15.9, acumulada: 38.3 },
  { mes: "marzo", valor: 766146, variacion: 11.99, acumulada: 54.9 },
  { mes: "abril", valor: 825809, variacion: 7.78, acumulada: 70.1 },
  { mes: "mayo", valor: 860100, variacion: 2.8, acumulada: 77.2 },
];

const smvm = [
  { mes: "diciembre", salario: 156000 },
  { mes: "enero", salario: 156000 },
  { mes: "febrero", salario: 180000 },
  { mes: "marzo", salario: 202800 },
  { mes: "abril", salario: 221252 },
  { mes: "mayo", salario: 234315 },
];

export default function CanastaSalario() {
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [dataCanasta, setDataCanasta] = useState("nacional");

  const handleMesChange = (event) => {
    setMesSeleccionado(event.target.value);
  };

  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-200">
      <div className="w-full flex items-center h-[5%]">
        {" "}
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
              <h1 className="bg-gray-700 text-white px-2">
                CANASTA BASICA ALIMENTARIA (HOGAR 4 INTEGRANTES)
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
                      domain={[0, 500000]} // Usar xAxisDomainMaxTotal en lugar de xAxisDomainMaxAlimentaria
                      tickFormatter={formatNumber}
                    />
                    <XAxis
                      dataKey="mes"
                      type="category"
                      tick={{ fill: "#1f2937" }}
                    />
                    <Tooltip formatter={formatNumber} />
                    <Bar
                      label={{
                        fill: "1f2937",
                        fontSize: 8,
                        fontWeight: "bold",
                        position: "inside",
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
                        $
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
                          ? formatNumber(
                              canastaAlimentariaNacio.find(
                                (item) => item.mes === mesSeleccionado
                              )?.variacion
                            )
                          : formatNumber(
                              canastaAlimentariaCaba.find(
                                (item) => item.mes === mesSeleccionado
                              )?.variacion
                            )}
                        %
                      </span>
                    </div>
                    <div className="w-2/3 text-xs h-1/5 bg-gray-700 text-white rounded flex flex-col items-center justify-center">
                      VARIACION ACUMULADA
                      <span className="text-3xl font-bold">
                        {dataCanasta === "nacional"
                          ? formatNumber(
                              canastaAlimentariaNacio.find(
                                (item) => item.mes === mesSeleccionado
                              )?.acumulada
                            )
                          : formatNumber(
                              canastaAlimentariaCaba.find(
                                (item) => item.mes === mesSeleccionado
                              )?.acumulada
                            )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1/2">
              <h1 className="bg-gray-400 px-2">
                CANASTA BASICA TOTAL (HOGAR 4 INTEGRANTES)
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
                      tick={{ fill: "white" }}
                    />
                    <XAxis
                      dataKey="mes"
                      type="category"
                      tick={{ fill: "white" }}
                    />
                    <Tooltip formatter={formatNumber} />
                    <Bar
                      label={{
                        fill: "#1f2937",
                        fontSize: 8,
                        fontWeight: "bold",
                        position: "inside",
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
                        $
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
                          ? formatNumber(
                              canastaTotalNacio.find(
                                (item) => item.mes === mesSeleccionado
                              )?.variacion
                            )
                          : formatNumber(
                              canastaTotalCaba.find(
                                (item) => item.mes === mesSeleccionado
                              )?.variacion
                            )}
                        %
                      </span>
                    </div>
                    <div className="w-2/3 text-xs h-1/5 bg-gray-400 rounded flex flex-col items-center justify-center">
                      VARIACION ACUMULADA
                      <span className="text-3xl font-bold">
                        {dataCanasta === "nacional"
                          ? formatNumber(
                              canastaTotalNacio.find(
                                (item) => item.mes === mesSeleccionado
                              )?.acumulada
                            )
                          : formatNumber(
                              canastaTotalCaba.find(
                                (item) => item.mes === mesSeleccionado
                              )?.acumulada
                            )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 bg-white flex"></div>
      </div>
    </div>
  );
}
