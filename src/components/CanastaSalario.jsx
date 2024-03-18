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

const meses = ["diciembre", "enero", "febrero", "marzo" ];

const canastaAlimentariaNacio = {enero: 285561, febrero: 322851};
const canastaTotalNacio = {enero: 596823, febrero: 690902};
const canastaAlimentariaCaba = {enero: 350564, febrero: 402752};
const canastaTotalCaba = {enero: 590042, febrero: 684115};
const smvm = [
  { mes: "diciembre", salario: 156000 },
  { mes: "enero", salario: 156000 },
  { mes: "febrero", salario: 180000 },
  {mes: "marzo", salario: 202800}
];

export default function CanastaSalario() {
  const [mesSeleccionado, setMesSeleccionado] = useState("febrero");
  const [dataCanasta, setDataCanasta] = useState("nacional")

  const handleMesChange = (event) => {
    setMesSeleccionado(event.target.value);
  };

  return (
    <div className="h-full w-full flex">
      <div className="w-1/2 bg-gray-800 h-full relative">
        <div className="w-full h-1/5 text-white text-6xl font-bold p-6">SALARIO MINIMO <br/> VITAL Y MOVIL</div>
        <div className="absolute right-4 top-4 w-48 flex items-center justify-evenly">
          <button onClick={()=> setDataCanasta("nacional")}className=   {`border rounded-xl text-xs p-3 bg-[#f57b6dff] ${dataCanasta === "nacional" ? "font-bold" : ""}`}>NACIONAL</button>
          <button onClick={()=> setDataCanasta("caba")}className=
          {`border rounded-xl text-xs p-3 bg-yellow-400 ${dataCanasta === "caba" ? "font-bold" : ""}`}
          
          >CABA</button>
        </div>
        <div className="w-full h-4/5"> 
        <div className={`w-full h-1/5 font-bold flex justify-evenly text-4xl drop-shadow-xl items-center ${dataCanasta === "nacional" ? "bg-[#f57b6dff]" : "bg-yellow-400"}`}>
          <h1>{mesSeleccionado.toUpperCase()}</h1>
          <p className="text-white text-6xl">-</p>
          <h1>$ {smvm.find(item => item.mes === mesSeleccionado)?.salario}</h1>

          
        </div>
        <div className="w-full h-4/5 flex items-center">
        <ResponsiveContainer width="95%" height="75%">
            <LineChart
              className="p-2 font-bold text-white"
              data={smvm}
              margin={{ top: 10, right: 0, left: 20, bottom: 0 }} 
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} interval={0} domain={[0, "dataMax + 100000"]} />
              <Tooltip />
              <Line type="monotone" dataKey="salario" stroke={dataCanasta === "nacional" ? "#f57b6dff" : "#facc15"}strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
      </div>
      <div className="w-1/2  h-full">
      <div className=" w-full h-4/5"> 
      <div className={`w-full h-12 text-3xl items-center flex justify-center  relative`}>
        <select value={mesSeleccionado} onChange={handleMesChange} className={`text-2xl w-full h-full flex items-center justify-center appearance-none outline-none px-8 ${dataCanasta === "nacional" ? "bg-[#f57b6dff]" : "bg-yellow-400"}`}>
          {meses.map((mes, index) => (
            <option key={index} value={mes}>{mes.toUpperCase()}</option>
          ))}
        </select>
        <MdKeyboardArrowDown className="absolute right-0 mr-4 text-white text-3xl pointer-events-none" />
      </div>
      </div>
        <div className="w-full h-1/5 text-gray-800 text-6xl font-bold p-6 text-right">
          CANASTA BASICA <br/>(HOGAR 4 INTEGRANTES)
        </div>
        
      </div>
    </div>
  );
}