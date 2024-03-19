import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const meses = ["diciembre", "enero", "febrero", "marzo"];

const canastaAlimentariaNacio = [
  { mes: "enero", valor: 285561 },
  { mes: "febrero", valor: 322851 },
];

const canastaTotalNacio = [
  { mes: "enero", valor: 596823 },
  { mes: "febrero", valor: 690902 },
];

const canastaAlimentariaCaba = [
  { mes: "enero", valor: 350564 },
  { mes: "febrero", valor: 402752 },
];

const canastaTotalCaba = [
  { mes: "enero", valor: 590042 },
  { mes: "febrero", valor: 684115 },
];

const smvm = [
  { mes: "diciembre", salario: 156000 },
  { mes: "enero", salario: 156000 },
  { mes: "febrero", salario: 180000 },
  { mes: "marzo", salario: 202800 },
];

export default function CanastaSalario() {
  const [mesSeleccionado, setMesSeleccionado] = useState("febrero");
  const [dataCanasta, setDataCanasta] = useState("nacional");

  const handleMesChange = (event) => {
    setMesSeleccionado(event.target.value);
  };

  return (
    <div className="h-full w-full flex">
      <div className="w-1/2 bg-gray-800 h-full relative">
        <div className="w-full h-1/5 text-white text-6xl font-bold p-2">
          SALARIO MINIMO <br /> VITAL Y MOVIL
        </div>
        <div className="absolute right-4 top-4 w-48 flex items-center justify-evenly">
          <button
            onClick={() => setDataCanasta("nacional")}
            className={`border rounded-xl text-xs p-3 bg-[#f57b6dff] ${
              dataCanasta === "nacional" ? "font-bold" : ""
            }`}
          >
            NACIONAL
          </button>
          <button
            onClick={() => setDataCanasta("caba")}
            className={`border rounded-xl text-xs p-3 bg-yellow-400 ${
              dataCanasta === "caba" ? "font-bold" : ""
            }`}
          >
            CABA
          </button>
        </div>
        <div className="w-full h-4/5">
          <div className="w-full h-full flex items-center flex flex-col justify-evenly">
            <div
              className={`w-full h-1/6 font-bold flex justify-evenly text-4xl drop-shadow-xl items-center ${
                dataCanasta === "nacional" ? "bg-[#f57b6dff]" : "bg-yellow-400"
              }`}
            >
              <h1>{mesSeleccionado.toUpperCase()}</h1>
              <p className="text-white text-6xl">-</p>
              <h1>
                $ {smvm.find((item) => item.mes === mesSeleccionado)?.salario}
              </h1>
            </div>
            <ResponsiveContainer width="95%" height="75%">
              <LineChart
                className="p-2 font-bold text-white"
                data={smvm}
                margin={{ top: 10, right: 0, left: 20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" tick={{ fill: "white" }} />
                <YAxis
                  tick={{ fill: "white" }}
                  interval={0}
                  domain={[0, "dataMax + 100000"]}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="salario"
                  stroke={dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="w-1/2  h-full">
        <div className=" w-full h-4/5">
          <div
            className={`w-full text-3xl items-center flex justify-center  relative`}
          >
            <select
              value={mesSeleccionado}
              onChange={handleMesChange}
              className={`text-2xl w-full h-full flex items-center justify-center appearance-none outline-none px-8 ${
                dataCanasta === "nacional" ? "bg-[#f57b6dff]" : "bg-yellow-400"
              }`}
            >
              {meses.map((mes, index) => (
                <option key={index} value={mes}>
                  {mes.toUpperCase()}
                </option>
              ))}
            </select>
            <MdKeyboardArrowDown className="absolute right-0 mr-4 text-white text-3xl pointer-events-none" />
          </div>
          <div className="h-3/4 w-full flex ">
            <div className="h-full w-1/2 flex flex-col">
              {" "}
              <ResponsiveContainer width="95%" height="95%">
                <LineChart
                  className="p-2 font-bold text-white"
                  data={
                    dataCanasta === "nacional"
                      ? canastaAlimentariaNacio
                      : canastaAlimentariaCaba
                  }
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" tick={{ fill: "#1f2937" }} />
                  <YAxis
                    tick={{ fill: "#1f2937" }}
                    interval={0}
                    domain={["auto", "auto"]}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="valor"
                    stroke={
                      dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"
                    }
                    strokeWidth={2}
                    label={{
                      fill: "1f2937",
                      fontSize: 12,
                      fontWeight: "bold",
                      position: "top",
                    }}
                    dot={{ fill: "#f57b6dff", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="w-full text-center text-white bg-gray-700 border-r border-white">
                CANASTA BASICA ALIMENTARIA{" "}
              </div>
            </div>
            <div className="h-full w-1/2 flex flex-col">
              {" "}
              <ResponsiveContainer width="95%" height="95%">
                <LineChart
                  className="p-2 font-bold text-white"
                  data={
                    dataCanasta === "nacional"
                      ? canastaTotalNacio
                      : canastaTotalCaba
                  }
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" tick={{ fill: "#1f2937" }} />
                  <YAxis
                    tick={{ fill: "#1f2937" }}
                    interval={0}
                    domain={["auto", "auto"]}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="valor"
                    stroke={
                      dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"
                    }
                    strokeWidth={2}
                    label={{
                      fill: "1f2937",
                      fontSize: 12,
                      fontWeight: "bold",
                      position: "top",
                    }}
                    dot={{ fill: "#f57b6dff", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="w-full text-center text-white bg-gray-700 border-l border-white">
                CANASTA BASICA TOTAL{" "}
              </div>
            </div>
          </div>
          <div
            className={`w-full h-1/6 font-bold flex flex-col justify-evenly text-4xl drop-shadow-xl items-center ${
              dataCanasta === "nacional" ? "bg-[#f57b6dff]" : "bg-yellow-400"
            }`}
          >
            <div className="h-2/3 w-full flex items-center justify-evenly">
              <div className="h-full w-1/2 flex items-center justify-center border-r border-white">
                $
                {dataCanasta === "nacional"
                  ? canastaAlimentariaNacio.find(
                      (item) => item.mes === mesSeleccionado
                    )?.valor
                  : canastaAlimentariaCaba.find(
                      (item) => item.mes === mesSeleccionado
                    )?.valor}
              </div>
              <div className="h-full w-1/2 flex items-center justify-center border-l border-white">
                $
                {dataCanasta === "nacional"
                  ? canastaTotalNacio.find(
                      (item) => item.mes === mesSeleccionado
                    )?.valor
                  : canastaTotalCaba.find(
                      (item) => item.mes === mesSeleccionado
                    )?.valor}
              </div>
            </div>
            <div className="h-1/3 w-full bg-gray-700 flex items-center justify-center text-sm text-white tracking-wider">
              {mesSeleccionado.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 text-gray-800 text-6xl font-bold p-2 text-right">
          CANASTA BASICA <br />
          (HOGAR 4 INTEGRANTES)
        </div>
      </div>
    </div>
  );
}
