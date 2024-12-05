import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function TicketPromedio({ vista, setVista, mesSeleccionado }) {
  const totales = {
    ENERO: {
      total: { valor: 100105, interanual: 5.3, intermensual: -0.2 },
      gerentes: { valor: 11167, interanual: 3.2, intermensual: -0.3 },
      cajeros: { valor: 88938, interanual: 5.6, intermensual: -0.2 },
    },
    FEBRERO: {
      total: { valor: 99829, interanual: 5.3, intermensual: -0.4 },
      gerentes: { valor: 11181, interanual: 3, intermensual: -0.1 },
      cajeros: { valor: 88648, interanual: 5.6, intermensual: -0.5 },
    },
    MARZO: {
      total: { valor: 99861, interanual: 5.5, intermensual: 0 },
      gerentes: { valor: 10970, interanual: 0.9, intermensual: -1.2 },
      cajeros: { valor: 88891, interanual: 6.1, intermensual: 0.2 },
    },
    ABRIL: {
      total: { valor: 99257, interanual: 4.1, intermensual: -0.6 },
      gerentes: { valor: 10861, interanual: -0.6, intermensual: -1 },
      cajeros: { valor: 88396, interanual: 4.8, intermensual: -0.6 },
    },
    MAYO: {
      total: { valor: 98761, interanual: 3.1, intermensual: -0.5 },
      gerentes: { valor: 10931, interanual: 0, intermensual: -0.6 },
      cajeros: { valor: 87830, interanual: 3.5, intermensual: -0.6 },
    },
    JUNIO: {
      total: { valor: 98523, interanual: 2, intermensual: -0.2 },
      gerentes: { valor: 10892, interanual: -0.5, intermensual: -0.4 },
      cajeros: { valor: 87631, interanual: 2.3, intermensual: -0.2 },
    },
    JULIO: {
      total: { valor: 98628, interanual: 1.4, intermensual: 0.1 },
      gerentes: { valor: 10940, interanual: -0.3, intermensual: 0.4 },
      cajeros: { valor: 87688, interanual: 1.6, intermensual: 0.1 },
    },
    AGOSTO: {
      total: { valor: 99619, interanual: 1.8, intermensual: 1 },
      gerentes: { valor: 11058, interanual: -0.2, intermensual: 1.1 },
      cajeros: { valor: 88561, interanual: 2.1, intermensual: 1 },
    },
    SEPTIEMBRE: {
      total: { valor: 98519, interanual: 0.5, intermensual: -0.1 },
      gerentes: { valor: 10890, interanual: -2, intermensual: -0.4 },
      cajeros: { valor: 87269, interanual: 0.8, intermensual: 0.1 },
    },
  };

  const sueldos = {
    ENERO: {
      total: { valor: 748678, interanual: 295.3, intermensual: -2.6 },
      gerentes: { valor: 1445608, interanual: 259.4, intermensual: -1.2 },
      cajeros: { valor: 661172, interanual: 308, intermensual: -2.9 },
    },
    FEBRERO: {
      total: { valor: 908513, interanual: 318.8, intermensual: 20.3 },
      gerentes: { valor: 2030133, interanual: 329.1, intermensual: 39.9 },
      cajeros: { valor: 767046, interanual: 317.4, intermensual: 14.8 },
    },
    MARZO: {
      total: { valor: 854522, interanual: 242.9, intermensual: -6 },
      gerentes: { valor: 1822045, interanual: 209.8, intermensual: -10.6 },
      cajeros: { valor: 735120, interanual: 258.2, intermensual: -4.3 },
    },
    ABRIL: {
      total: { valor: 968744, interanual: 229.4, intermensual: 12.2 },
      gerentes: { valor: 2148692, interanual: 306.1, intermensual: 17.8 },
      cajeros: { valor: 823766, interanual: 212.4, intermensual: 10.6 },
    },
    MAYO: {
      total: { valor: 939333, interanual: 206.3, intermensual: -3 },
      gerentes: { valor: 2040570, interanual: 270.6, intermensual: -5 },
      cajeros: { valor: 802277, interanual: 191.5, intermensual: -2.6 },
    },
    JUNIO: {
      total: { valor: 1388639, interanual: 207.5, intermensual: 47.8 },
      gerentes: { valor: 2921451, interanual: 270.9, intermensual: 46.7 },
      cajeros: { valor: 1198120, interanual: 193.2, intermensual: 49.3 },
    },
    JULIO: {
      total: { valor: 1055789, interanual: 206.8, intermensual: -24.3 },
      gerentes: { valor: 2345568, interanual: 271.7, intermensual: -19.8 },
      cajeros: { valor: 894838, interanual: 190.9, intermensual: -25.6 },
    },
    AGOSTO: {
      total: { valor: 1078987, interanual: 184.3, intermensual: 2.9 },
      gerentes: { valor: 2630539, interanual: 229.1, intermensual: 12.1 },
      cajeros: { valor: 885255, interanual: 171.6, intermensual: -0.2 },
    },
    SEPTIEMBRE: {
      total: { valor: 1114924, interanual: 181.4, intermensual: 1.8 },
      gerentes: { valor: 2473016, interanual: 234.4, intermensual: -6.7 },
      cajeros: { valor: 946149, interanual: 168.5, intermensual: 4.9 },
    },
  };

  const costoLaboralTotal = {
    ENERO: {
      total: { valor: 94713244, interanual: 321.4, intermensual: -1.9 },
      sueldos: { valor: 74946385, interanual: 316.3, intermensual: -2.8 },
      contribuciones: { valor: 19766859, interanual: 341.6, intermensual: 1.5 },
    },
    FEBRERO: {
      total: { valor: 112716550, interanual: 337.3, intermensual: 17.9 },
      sueldos: { valor: 90695979, interanual: 341.1, intermensual: 19.8 },
      contribuciones: {
        valor: 22020570,
        interanual: 322.4,
        intermensual: 10.6,
      },
    },
    MARZO: {
      total: { valor: 106429328, interanual: 258.7, intermensual: -5.6 },
      sueldos: { valor: 85333374, interanual: 261.9, intermensual: -6 },
      contribuciones: {
        valor: 21095954,
        interanual: 246.4,
        intermensual: -4.3,
      },
    },
    ABRIL: {
      total: { valor: 120458101, interanual: 238.6, intermensual: 12.36 },
      sueldos: { valor: 96154606, interanual: 243, intermensual: 11.6 },
      contribuciones: {
        valor: 24303495,
        interanual: 222.2,
        intermensual: 15.1,
      },
    },
    MAYO: {
      total: { valor: 115308681, interanual: 208.3, intermensual: -4.3 },
      sueldos: { valor: 92769453, interanual: 215.9, intermensual: -3.5 },
      contribuciones: {
        valor: 22539228,
        interanual: 180.5,
        intermensual: -7.3,
      },
    },
    JUNIO: {
      total: { valor: 169162742, interanual: 204.4, intermensual: 46.7 },
      sueldos: { valor: 136812906, interanual: 213.6, intermensual: 47.5 },
      contribuciones: {
        valor: 32349836,
        interanual: 170.7,
        intermensual: 43.5,
      },
    },
    JULIO: {
      total: { valor: 129225755, interanual: 203.7, intermensual: -23.9 },
      sueldos: { valor: 104130338, interanual: 211.2, intermensual: -24.2 },
      contribuciones: {
        valor: 25095417,
        interanual: 176,
        intermensual: -22.8,
      },
    },
    AGOSTO: {
      total: { valor: 133293695, interanual: 183.4, intermensual: 3.8 },
      sueldos: { valor: 107487603, interanual: 189.5, intermensual: 3.9 },
      contribuciones: {
        valor: 25806092,
        interanual: 160.7,
        intermensual: 3.6,
      },
    },
    SEPTIEMBRE: {
      total: { valor: 135357947, interanual: 179.6, intermensual: 1 },
      sueldos: { valor: 109841222, interanual: 182.7, intermensual: 1.6 },
      contribuciones: {
        valor: 25516725,
        interanual: 166.9,
        intermensual: -1.5,
      },
    },
  };

  const costoLaboralGerentes = {
    ENERO: {
      total: { valor: 20186440, interanual: 270.2, intermensual: -1.2 },
      sueldos: { valor: 16143105, interanual: 271.1, intermensual: -1.5 },
      contribuciones: {
        valor: 4043335,
        interanual: 266.9,
        intermensual: -0.2,
      },
    },
    FEBRERO: {
      total: { valor: 28256905, interanual: 340, intermensual: 39.5 },
      sueldos: { valor: 22698913, interanual: 341.9, intermensual: 40.1 },
      contribuciones: {
        valor: 5557992,
        interanual: 332.4,
        intermensual: 10.6,
      },
    },
    MARZO: {
      total: { valor: 25037350, interanual: 210.6, intermensual: -11.2 },
      sueldos: { valor: 19987832, interanual: 212.7, intermensual: -11.7 },
      contribuciones: {
        valor: 5049518,
        interanual: 202.9,
        intermensual: -9,
      },
    },
    ABRIL: {
      total: { valor: 29298525, interanual: 301.4, intermensual: 17 },
      sueldos: { valor: 23336947, interanual: 303.8, intermensual: 16.7 },
      contribuciones: {
        valor: 5961578,
        interanual: 292.4,
        intermensual: 18.5,
      },
    },
    MAYO: {
      total: { valor: 27828648, interanual: 265.7, intermensual: -5 },
      sueldos: { valor: 22305472, interanual: 270.4, intermensual: -4.4 },
      contribuciones: {
        valor: 5523176,
        interanual: 247.9,
        intermensual: -7.4,
      },
    },
    JUNIO: {
      total: { valor: 39586132, interanual: 264.3, intermensual: 42.3 },
      sueldos: { valor: 31820441, interanual: 269, intermensual: 42.7 },
      contribuciones: {
        valor: 7768691,
        interanual: 246.2,
        intermensual: 40.7,
      },
    },
    JULIO: {
      total: { valor: 32153311, interanual: 267.2, intermensual: -18.9 },
      sueldos: { valor: 25663800, interanual: 270.6, intermensual: -19.5 },
      contribuciones: {
        valor: 6489511,
        interanual: 254.3,
        intermensual: -16.6,
      },
    },
    AGOSTO: {
      total: { valor: 36387747, interanual: 226.5, intermensual: 13.1 },
      sueldos: { valor: 29088506, interanual: 228.5, intermensual: 13.3 },
      contribuciones: {
        valor: 7299241,
        interanual: 219,
        intermensual: 12.5,
      },
    },
    SEPTIEMBRE: {
      total: { valor: 32952221, interanual: 221, intermensual: -9.1 },
      sueldos: { valor: 26931149, interanual: 227.8, intermensual: -7 },
      contribuciones: {
        valor: 6021072,
        interanual: 193.7,
        intermensual: -17.2,
      },
    },
  };

  const costoLaboralCajeros = {
    ENERO: {
      total: { valor: 74526804, interanual: 337.8, intermensual: -2.1 },
      sueldos: { valor: 58803280, interanual: 330.8, intermensual: -3.1 },
      contribuciones: {
        valor: 15723524,
        interanual: 366.1,
        intermensual: 1.9,
      },
    },
    FEBRERO: {
      total: { valor: 84459645, interanual: 336.4, intermensual: 12.1 },
      sueldos: { valor: 67997066, interanual: 340.8, intermensual: 14.2 },
      contribuciones: {
        valor: 16462579,
        interanual: 319.1,
        intermensual: 3.9,
      },
    },
    MARZO: {
      total: { valor: 91391978, interanual: 276.6, intermensual: -3.8 },
      sueldos: { valor: 65345542, interanual: 280.2, intermensual: -4.1 },
      contribuciones: {
        valor: 16046435,
        interanual: 262.8,
        intermensual: -2.7,
      },
    },
    ABRIL: {
      total: { valor: 91159576, interanual: 222.4, intermensual: 10.8 },
      sueldos: { valor: 72817659, interanual: 227.2, intermensual: 10 },
      contribuciones: {
        valor: 18341917,
        interanual: 204.5,
        intermensual: 14,
      },
    },
    MAYO: {
      total: { valor: 87480033, interanual: 193.6, intermensual: -4 },
      sueldos: { valor: 70463981, interanual: 201.8, intermensual: -3.2 },
      contribuciones: {
        valor: 17016052,
        interanual: 163.9,
        intermensual: -7.2,
      },
    },
    JUNIO: {
      total: { valor: 129573611, interanual: 189.8, intermensual: 49.1 },
      sueldos: { valor: 104992466, interanual: 200, intermensual: 49 },
      contribuciones: {
        valor: 24581145,
        interanual: 153.3,
        intermensual: 44.5,
      },
    },
    JULIO: {
      total: { valor: 97072444, interanual: 187.2, intermensual: -25.4 },
      sueldos: { valor: 78466538, interanual: 195.7, intermensual: -25.6 },
      contribuciones: {
        valor: 18605907,
        interanual: 156.2,
        intermensual: -24.7,
      },
    },
    AGOSTO: {
      total: { valor: 96905948, interanual: 170, intermensual: 0.7 },
      sueldos: { valor: 78399097, interanual: 177.3, intermensual: 0.8 },
      contribuciones: {
        valor: 18506851,
        interanual: 143.1,
        intermensual: 0.5,
      },
    },
    SEPTIEMBRE: {
      total: { valor: 102405726, interanual: 168.4, intermensual: 4.8 },
      sueldos: { valor: 82910073, interanual: 170.6, intermensual: 4.8 },
      contribuciones: {
        valor: 19495653,
        interanual: 159.6,
        intermensual: 4.6,
      },
    },
  };

  const dataGraficoTotales = [
    { name: "Gerentes", valor: totales[mesSeleccionado].gerentes.valor },
    { name: "Cajeros", valor: totales[mesSeleccionado].cajeros.valor },
  ];

  const dataGraficoCostosTotales = [
    {
      name: "Sueldos",
      valor: costoLaboralTotal[mesSeleccionado].sueldos.valor,
    },
    {
      name: "Contribuciones",
      valor: costoLaboralTotal[mesSeleccionado].contribuciones.valor,
    },
  ];

  const dataGraficoCostosGerentes = [
    {
      name: "Sueldos",
      valor: costoLaboralGerentes[mesSeleccionado].sueldos.valor,
    },
    {
      name: "Contribuciones",
      valor: costoLaboralGerentes[mesSeleccionado].contribuciones.valor,
    },
  ];

  const dataGraficoCostosCajeros = [
    {
      name: "Sueldos",
      valor: costoLaboralCajeros[mesSeleccionado].sueldos.valor,
    },
    {
      name: "Contribuciones",
      valor: costoLaboralCajeros[mesSeleccionado].contribuciones.valor,
    },
  ];

  const coloresGerenteVSCajero = ["#405D72", "#DD5746"];
  const coloresSueldoVSContribuciones = ["#557A46", "#EE9322"];

  return (
    <div className="w-full h-[95%]">
      <div className="relative w-full h-[5%] flex items-center justify-center text-center bg-gray-900 text-gray-200 text-lg font-bold tracking-wide">
        PERSONAL OCUPADO
        <button
          className="text-white bg-blue-900 rounded w-24 h-6 flex items-center justify-center absolute top-1 right-4 hover:bg-blue-600 border-black border-2 text-sm font-normal"
          onClick={() => setVista("general")}
        >
          Volver
        </button>
      </div>
      <div className="w-full h-[95%] flex">
        <div className="h-full w-1/2 ">
          <div className="w-full h-[60%] flex items-center justify-center relative">
            <div className="absolute text-xl font-semibold top-2 left-2">
              Cantidad de empleados
            </div>
            <ResponsiveContainer width={400} height={300}>
              <PieChart>
                <Pie
                  data={dataGraficoTotales}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  dataKey="valor"
                  label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
                >
                  {dataGraficoTotales.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        coloresGerenteVSCajero[
                          index % coloresGerenteVSCajero.length
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-[40%] h-full rounded-xl  flex flex-col justify-evenly">
              <div className="w-full h-1/3 bg-gray-300 rounded-xl text-[#DD5746] p-2 flex flex-col  items-center justify-evenly">
                <p className="w-full h-[25%] flex items-center justify-center text-xs text-center font-bold">
                  Cajeros, administrativos, repositores y otros
                </p>
                <p className="w-full h-[65%] flex items-center justify-center text-4xl font-bold">
                  {totales[mesSeleccionado].cajeros.valor.toLocaleString()}
                </p>
                <div className="w-full h-[10%] flex items-center justify-between text-xs">
                  <p>
                    <strong>
                      {totales[mesSeleccionado].cajeros.interanual}%
                    </strong>{" "}
                    interanual
                  </p>
                  <p>|</p>
                  <p>
                    <strong>
                      {totales[mesSeleccionado].cajeros.intermensual}%
                    </strong>{" "}
                    mensual
                  </p>
                </div>
              </div>
              <div className="w-full h-1/3 bg-gray-300 rounded-xl text-[#405D72] p-2 flex flex-col  items-center justify-evenly">
                <p className="w-full h-[25%] flex items-center justify-center text-xs text-center font-bold">
                  Gerentes, supervisores y otro personal jerárquico
                </p>
                <p className="w-full h-[65%] flex items-center justify-center text-4xl font-bold">
                  {totales[mesSeleccionado].gerentes.valor.toLocaleString()}
                </p>
                <div className="w-full h-[10%] flex items-center justify-between text-xs">
                  <p>
                    <strong>
                      {totales[mesSeleccionado].gerentes.interanual}%
                    </strong>{" "}
                    interanual
                  </p>
                  <p>|</p>
                  <p>
                    <strong>
                      {totales[mesSeleccionado].gerentes.intermensual}%
                    </strong>{" "}
                    mensual
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[40%] bg-gray-300 flex">
            <div className="w-1/4 h-full flex items-center justify-center text-xl text-center font-semibold">
              Sueldos y Salarios brutos
            </div>
            <div className="w-3/4 h-full flex flex-col items-center justify-evenly flex-col relative">
              <div className="w-2/3 flex items-center justify-evenly text-xs font-semibold absolute top-2 -right-1">
                <p>vs {mesSeleccionado} año anterior</p>
                <p>vs mes anterior</p>
              </div>
              <div className="w-full h-1/4 flex items-center justify-evenly">
                <div className="w-1/3 h-full rounded-lg bg-[#DD5746] text-white flex items-center justify-center text-2xl font-semibold">
                  $ {sueldos[mesSeleccionado].cajeros.valor.toLocaleString()}
                </div>
                <div className="w-1/4 h-full rounded-lg bg-[#DD5746] text-white flex items-center justify-center text-2xl font-semibold">
                  %{" "}
                  {sueldos[mesSeleccionado].cajeros.interanual.toLocaleString()}
                </div>
                <div className="w-1/4 h-full rounded-lg bg-[#DD5746] text-white flex items-center justify-center text-2xl font-semibold">
                  %{" "}
                  {sueldos[
                    mesSeleccionado
                  ].cajeros.intermensual.toLocaleString()}
                </div>
              </div>
              <div className="w-full h-1/4 flex items-center justify-evenly">
                <div className="w-1/3 h-full rounded-lg bg-[#405D72] text-white flex items-center justify-center text-2xl font-semibold">
                  $ {sueldos[mesSeleccionado].gerentes.valor.toLocaleString()}
                </div>
                <div className="w-1/4 h-full rounded-lg bg-[#405D72] text-white flex items-center justify-center text-2xl font-semibold">
                  %{" "}
                  {sueldos[
                    mesSeleccionado
                  ].gerentes.interanual.toLocaleString()}
                </div>
                <div className="w-1/4 h-full rounded-lg bg-[#405D72] text-white flex items-center justify-center text-2xl font-semibold">
                  %{" "}
                  {sueldos[
                    mesSeleccionado
                  ].gerentes.intermensual.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 ">
          <div className="w-full h-1/2 flex items-center justify-center bg-gray-300 relative">
            <div className="absolute text-xl font-semibold top-2 left-2">
              Costo Laboral
            </div>
            <ResponsiveContainer width={400} height={300}>
              <PieChart>
                <Pie
                  data={dataGraficoCostosTotales}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  dataKey="valor"
                  label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
                >
                  {dataGraficoCostosTotales.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        coloresSueldoVSContribuciones[
                          index % coloresSueldoVSContribuciones.length
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-[40%] h-full rounded-xl  flex flex-col justify-evenly">
              <div className="w-full h-1/3 bg-gray-200 rounded-xl text-[#557A46] p-2 flex flex-col  items-center justify-evenly">
                <p className="w-full h-[25%] flex items-center justify-center text-xs text-center font-bold">
                  Sueldos y salarios brutos{" "}
                </p>
                <p className="w-full h-[65%] flex items-center justify-center text-4xl font-bold">
                  ${" "}
                  {costoLaboralTotal[
                    mesSeleccionado
                  ].sueldos.valor.toLocaleString()}
                </p>
                <div className="w-full h-[10%] flex items-center justify-between text-xs">
                  <p>
                    <strong>
                      {costoLaboralTotal[mesSeleccionado].sueldos.interanual}%
                    </strong>{" "}
                    interanual
                  </p>
                  <p>|</p>
                  <p>
                    <strong>
                      {costoLaboralTotal[mesSeleccionado].sueldos.intermensual}%
                    </strong>{" "}
                    mensual
                  </p>
                </div>
              </div>
              <div className="w-full h-1/3 bg-gray-200 rounded-xl text-[#EE9322] p-2 flex flex-col  items-center justify-evenly">
                <p className="w-full h-[25%] flex items-center justify-center text-xs text-center font-bold">
                  Contribuciones patronales
                </p>
                <p className="w-full h-[65%] flex items-center justify-center text-4xl font-bold">
                  ${" "}
                  {costoLaboralTotal[
                    mesSeleccionado
                  ].contribuciones.valor.toLocaleString()}
                </p>
                <div className="w-full h-[10%] flex items-center justify-between text-xs">
                  <p>
                    <strong>
                      {
                        costoLaboralTotal[mesSeleccionado].contribuciones
                          .interanual
                      }
                      %
                    </strong>{" "}
                    interanual
                  </p>
                  <p>|</p>
                  <p>
                    <strong>
                      {
                        costoLaboralTotal[mesSeleccionado].contribuciones
                          .intermensual
                      }
                      %
                    </strong>{" "}
                    mensual
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 flex bg-gray-400">
            <div className="w-1/2 flex flex-col items-center justify-evenly">
              <div className="w-full h-1/4 flex items-center justify-center">
                <p className="w-1/3 bg-[#405D72] text-sm p-1 flex items-center justify-center rounded text-gray-200 font-semibold">
                  GERENTES
                </p>
              </div>
              <ResponsiveContainer height={150} width={300}>
                <PieChart>
                  <Pie
                    data={dataGraficoCostosGerentes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    dataKey="valor"
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      percent,
                      index,
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const radius =
                        innerRadius + (outerRadius - innerRadius) * 0.35;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                          x={x}
                          y={y}
                          fill="white"
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                          style={{ fontSize: "8px" }}
                        >
                          {`${(percent * 100).toFixed(2)}%`}
                        </text>
                      );
                    }}
                  >
                    {dataGraficoCostosGerentes.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          coloresSueldoVSContribuciones[
                            index % coloresSueldoVSContribuciones.length
                          ]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-full h-1/4 flex flex-col items-center justify-evenly">
                <div className="w-3/4 rounded-lg flex items-center justify-evenly text-center h-1/3 text-xs text-gray-900 font-semibold bg-[#557A46]">
                  <span>
                    {" "}
                    ${" "}
                    {costoLaboralGerentes[
                      mesSeleccionado
                    ].sueldos.valor.toLocaleString()}{" "}
                  </span>
                  <span>➖</span>
                  <span>
                    {" "}
                    {costoLaboralGerentes[
                      mesSeleccionado
                    ].sueldos.interanual.toLocaleString()}{" "}
                    % anual
                  </span>
                  <span>➖</span>
                  <span>
                    {" "}
                    {costoLaboralGerentes[
                      mesSeleccionado
                    ].sueldos.intermensual.toLocaleString()}{" "}
                    % mensual
                  </span>
                </div>
                <div className="w-3/4 rounded-lg flex items-center justify-evenly text-center h-1/3 text-xs text-gray-900 font-semibold bg-[#EE9322]">
                  <span>
                    {" "}
                    ${" "}
                    {costoLaboralGerentes[
                      mesSeleccionado
                    ].contribuciones.valor.toLocaleString()}{" "}
                  </span>
                  <span>➖</span>
                  <span>
                    {" "}
                    {costoLaboralGerentes[
                      mesSeleccionado
                    ].contribuciones.interanual.toLocaleString()}{" "}
                    % anual
                  </span>
                  <span>➖</span>
                  <span>
                    {" "}
                    {costoLaboralGerentes[
                      mesSeleccionado
                    ].contribuciones.intermensual.toLocaleString()}{" "}
                    % mensual
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-evenly">
              <div className="w-full h-1/4 flex items-center justify-center">
                <p className="w-1/3 bg-[#DD5746] text-sm p-1 flex items-center justify-center rounded text-gray-200 font-semibold">
                  CAJEROS
                </p>
              </div>
              <ResponsiveContainer height={150} width={300}>
                <PieChart>
                  <Pie
                    data={dataGraficoCostosCajeros}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    dataKey="valor"
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      percent,
                      index,
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const radius =
                        innerRadius + (outerRadius - innerRadius) * 0.35;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                          x={x}
                          y={y}
                          fill="white"
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                          style={{ fontSize: "8px" }}
                        >
                          {`${(percent * 100).toFixed(2)}%`}
                        </text>
                      );
                    }}
                  >
                    {dataGraficoCostosCajeros.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          coloresSueldoVSContribuciones[
                            index % coloresSueldoVSContribuciones.length
                          ]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-full h-1/4 flex flex-col items-center justify-evenly">
                <div className="w-3/4 rounded-lg flex items-center justify-evenly text-center h-1/3 text-xs text-gray-900 font-semibold bg-[#557A46]">
                  <span>
                    {" "}
                    ${" "}
                    {costoLaboralCajeros[
                      mesSeleccionado
                    ].sueldos.valor.toLocaleString()}{" "}
                  </span>
                  <span>➖</span>
                  <span>
                    {" "}
                    {costoLaboralCajeros[
                      mesSeleccionado
                    ].sueldos.interanual.toLocaleString()}{" "}
                    % anual
                  </span>
                  <span>➖</span>
                  <span>
                    {" "}
                    {costoLaboralCajeros[
                      mesSeleccionado
                    ].sueldos.intermensual.toLocaleString()}{" "}
                    % mensual
                  </span>
                </div>
                <div className="w-3/4 rounded-lg flex items-center justify-evenly text-center h-1/3 text-xs text-gray-900 font-semibold bg-[#EE9322]">
                  <span>
                    {" "}
                    ${" "}
                    {costoLaboralCajeros[
                      mesSeleccionado
                    ].contribuciones.valor.toLocaleString()}{" "}
                  </span>
                  <span>➖</span>
                  <span>
                    {" "}
                    {costoLaboralCajeros[
                      mesSeleccionado
                    ].contribuciones.interanual.toLocaleString()}{" "}
                    % anual
                  </span>
                  <span>➖</span>
                  <span>
                    {" "}
                    {costoLaboralCajeros[
                      mesSeleccionado
                    ].contribuciones.intermensual.toLocaleString()}{" "}
                    % mensual
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
