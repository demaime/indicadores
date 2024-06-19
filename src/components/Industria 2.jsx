import React, { useState, useMemo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function Industria() {
  const dataPyme = {
    enero: {
      intermensual: -9.1,
      acumulada: -9.1,
      interanual: -30,
      capacidad: 70.8,
    },
    febrero: {
      intermensual: -7.7,
      acumulada: -21.7,
      interanual: -9.9,
      capacidad: 70.9,
    },
    marzo: {
      intermensual: -3.4,
      acumulada: -19.1,
      interanual: -11.9,
      capacidad: 70,
    },
    abril: {
      intermensual: 3.1,
      acumulada: -19,
      interanual: -18.3,
      capacidad: 70.1,
    },
  };

  const aperturaIntermensualPyme = {
    enero: {
      "textiles e indumentaria": -2.3,
      "alimentos y bebidas": -8.7,
      "madera y muebles": -13.5,
      "papel e impresiones": -3,
      "quimicos y plasticos": -11.8,
      "metal y maquinaria": -13.5,
    },
    febrero: {
      "textiles e indumentaria": -2.4,
      "alimentos y bebidas": -1.1,
      "madera y muebles": -3,
      "papel e impresiones": -4.8,
      "quimicos y plasticos": -6.2,
      "metal y maquinaria": -4.9,
    },
    marzo: {
      "textiles e indumentaria": -0.5,
      "alimentos y bebidas": -3.6,
      "madera y muebles": -4.4,
      "papel e impresiones": -5,
      "quimicos y plasticos": -4.4,
      "metal y maquinaria": -4.8,
    },
    abril: {
      "textiles e indumentaria": 2.6,
      "alimentos y bebidas": 0.4,
      "madera y muebles": 6,
      "papel e impresiones": 0.2,
      "quimicos y plasticos": 3.9,
      "metal y maquinaria": 4,
    },
  };

  const aperturaInteranualPyme = {
    enero: {
      "textiles e indumentaria": -18.2,
      "alimentos y bebidas": -22,
      "madera y muebles": -30.6,
      "papel e impresiones": -41.7,
      "quimicos y plasticos": -35.6,
      "metal y maquinaria": -34.8,
    },
    febrero: {
      "textiles e indumentaria": 10.5,
      "alimentos y bebidas": -0.3,
      "madera y muebles": -10,
      "papel e impresiones": -24.6,
      "quimicos y plasticos": -23.1,
      "metal y maquinaria": -15.2,
    },
    marzo: {
      "textiles e indumentaria": 10.9,
      "alimentos y bebidas": -5.6,
      "madera y muebles": -11.9,
      "papel e impresiones": -27.4,
      "quimicos y plasticos": -20.7,
      "metal y maquinaria": -16.8,
    },
    abril: {
      "textiles e indumentaria": -0.2,
      "alimentos y bebidas": -13.7,
      "madera y muebles": -15.7,
      "papel e impresiones": -32.3,
      "quimicos y plasticos": -21.6,
      "metal y maquinaria": -23.7,
    },
  };

  const aperturaAcumuladaPyme = {
    enero: {
      "textiles e indumentaria": -2.3,
      "alimentos y bebidas": -8.7,
      "madera y muebles": -13.5,
      "papel e impresiones": -3,
      "quimicos y plasticos": -11.8,
      "metal y maquinaria": -13.5,
    },
    febrero: {
      "textiles e indumentaria": -1.3,
      "alimentos y bebidas": -14.6,
      "madera y muebles": -24.6,
      "papel e impresiones": -26,
      "quimicos y plasticos": -31.2,
      "metal y maquinaria": -27.9,
    },
    marzo: {
      "textiles e indumentaria": 2.3,
      "alimentos y bebidas": -14.2,
      "madera y muebles": -20.1,
      "papel e impresiones": -23.7,
      "quimicos y plasticos": -28.7,
      "metal y maquinaria": -24.5,
    },
    abril: {
      "textiles e indumentaria": -0.1,
      "alimentos y bebidas": -15,
      "madera y muebles": -19.2,
      "papel e impresiones": -23.4,
      "quimicos y plasticos": -27.3,
      "metal y maquinaria": -23.8,
    },
  };

  const capacidadInstaladaPyme = {
    "enero 2023": {
      "Textiles e indumentaria": 72.5,
      "Alimentos y bebidas": 80.1,
      "Madera y muebles": 72.4,
      "Papel e impresiones": 77.5,
      "Químicos y plásticos": 68.7,
      "Metal, maquinaria y equipo, y material de transporte": 67.5,
      GENERAL: 72.5,
    },
    "febrero 2023": {
      "Textiles e indumentaria": 71.7,
      "Alimentos y bebidas": 73.5,
      "Madera y muebles": 75,
      "Papel e impresiones": 73.7,
      "Químicos y plásticos": 68.9,
      "Metal, maquinaria y equipo, y material de transporte": 69.9,
      GENERAL: 71.7,
    },
    "marzo 2023": {
      "Textiles e indumentaria": 73.3,
      "Alimentos y bebidas": 76.7,
      "Madera y muebles": 74.2,
      "Papel e impresiones": 81.4,
      "Químicos y plásticos": 69.9,
      "Metal, maquinaria y equipo, y material de transporte": 69.9,
      GENERAL: 73.3,
    },
    "abril 2023": {
      "Textiles e indumentaria": 73.2,
      "Alimentos y bebidas": 73.6,
      "Madera y muebles": 73.9,
      "Papel e impresiones": 76.4,
      "Químicos y plásticos": 72.8,
      "Metal, maquinaria y equipo, y material de transporte": 71.3,
      GENERAL: 73.2,
    },
    "mayo 2023": {
      "Textiles e indumentaria": 73.6,
      "Alimentos y bebidas": 74.2,
      "Madera y muebles": 71.7,
      "Papel e impresiones": 82.4,
      "Químicos y plásticos": 70,
      "Metal, maquinaria y equipo, y material de transporte": 71.3,
      GENERAL: 73.6,
    },
    "junio 2023": {
      "Textiles e indumentaria": 72.5,
      "Alimentos y bebidas": 72.9,
      "Madera y muebles": 75.3,
      "Papel e impresiones": 80.5,
      "Químicos y plásticos": 68.1,
      "Metal, maquinaria y equipo, y material de transporte": 70.5,
      GENERAL: 72.5,
    },
    "julio 2023": {
      "Textiles e indumentaria": 71.9,
      "Alimentos y bebidas": 74.3,
      "Madera y muebles": 75.5,
      "Papel e impresiones": 77.5,
      "Químicos y plásticos": 65.8,
      "Metal, maquinaria y equipo, y material de transporte": 69.9,
      GENERAL: 71.9,
    },
    "agosto 2023": {
      "Textiles e indumentaria": 73.1,
      "Alimentos y bebidas": 71.6,
      "Madera y muebles": 76.5,
      "Papel e impresiones": 80.7,
      "Químicos y plásticos": 69.6,
      "Metal, maquinaria y equipo, y material de transporte": 71.7,
      GENERAL: 73.1,
    },
    "septiembre 2023": {
      "Textiles e indumentaria": 73,
      "Alimentos y bebidas": 70.9,
      "Madera y muebles": 76.7,
      "Papel e impresiones": 78.9,
      "Químicos y plásticos": 72.1,
      "Metal, maquinaria y equipo, y material de transporte": 70.9,
      GENERAL: 73,
    },
    "octubre 2023": {
      "Textiles e indumentaria": 71.8,
      "Alimentos y bebidas": 71.3,
      "Madera y muebles": 73.3,
      "Papel e impresiones": 80.5,
      "Químicos y plásticos": 69.9,
      "Metal, maquinaria y equipo, y material de transporte": 70,
      GENERAL: 71.8,
    },
    "noviembre 2023": {
      "Textiles e indumentaria": 73.3,
      "Alimentos y bebidas": 72.7,
      "Madera y muebles": 76.3,
      "Papel e impresiones": 76.7,
      "Químicos y plásticos": 72,
      "Metal, maquinaria y equipo, y material de transporte": 71.8,
      GENERAL: 73.3,
    },
    "diciembre 2023": {
      "Textiles e indumentaria": 73.1,
      "Alimentos y bebidas": 75.8,
      "Madera y muebles": 71.6,
      "Papel e impresiones": 74.5,
      "Químicos y plásticos": 70.8,
      "Metal, maquinaria y equipo, y material de transporte": 70.8,
      GENERAL: 73.1,
    },
    ENERO: {
      "Textiles e indumentaria": 68.2,
      "Alimentos y bebidas": 71.9,
      "Madera y muebles": 70.2,
      "Papel e impresiones": 76.3,
      "Químicos y plásticos": 69.9,
      "Metal, maquinaria y equipo, y material de transporte": 67,
      GENERAL: 70.8,
    },
    FEBRERO: {
      "Textiles e indumentaria": 72.6,
      "Alimentos y bebidas": 73.3,
      "Madera y muebles": 72.6,
      "Papel e impresiones": 77.9,
      "Químicos y plásticos": 65.6,
      "Metal, maquinaria y equipo, y material de transporte": 66.6,
      GENERAL: 70.9,
    },
    MARZO: {
      "Textiles e indumentaria": 71,
      "Alimentos y bebidas": 73.1,
      "Madera y muebles": 70.3,
      "Papel e impresiones": 76.8,
      "Químicos y plásticos": 67.4,
      "Metal, maquinaria y equipo, y material de transporte": 67.1,
      GENERAL: 70,
    },
    ABRIL: {
      "Textiles e indumentaria": 70.8,
      "Alimentos y bebidas": 73.3,
      "Madera y muebles": 70.3,
      "Papel e impresiones": 76.8,
      "Químicos y plásticos": 67.4,
      "Metal, maquinaria y equipo, y material de transporte": 67.1,
      GENERAL: 70.1,
    },
  };

  const colors = {
    "textiles e indumentaria": "#8884d8",
    "alimentos y bebidas": "#f261da",
    "madera y muebles": "#ffc658",
    "papel e impresiones": "#ff8042",
    "quimicos y plasticos": "#8dd1e1",
    "metal y maquinaria": "#a4de6c",
  };

  const evolutivoPymeIntermensual = Object.keys(aperturaIntermensualPyme).map(
    (month) => ({
      month,
      ...aperturaIntermensualPyme[month],
    })
  );

  const charPymedata = Object.keys(capacidadInstaladaPyme).map((mes) => ({
    mes,
    "Textiles e indumentaria":
      capacidadInstaladaPyme[mes]["Textiles e indumentaria"],
    "Alimentos y bebidas": capacidadInstaladaPyme[mes]["Alimentos y bebidas"],
    "Madera y muebles": capacidadInstaladaPyme[mes]["Madera y muebles"],
    "Papel e impresiones": capacidadInstaladaPyme[mes]["Papel e impresiones"],
    "Químicos y plásticos": capacidadInstaladaPyme[mes]["Químicos y plásticos"],
    "Metal, maquinaria y equipo, y material de transporte":
      capacidadInstaladaPyme[mes][
        "Metal, maquinaria y equipo, y material de transporte"
      ],
    GENERAL: capacidadInstaladaPyme[mes]["GENERAL"],
  }));

  return (
    <div className="w-full h-full">
      <div className="w-full h-[5%] bg-gray-600 text-white flex justify-center items-center relative"></div>
      <div className="w-full h-[95%]">
        <div className="w-full h-[10%] flex">
          <div className="w-1/2 h-full bg-gray-200 border-b-2 border-gray-500 flex items-center justify-evenly font-semibold text-xs text-white"></div>
          <div className="w-1/2 h-full bg-gray-900 border-b-2 border-gray-400 flex items-center justify-evenly pl-2">
            {Object.keys(aperturaIntermensualPyme["enero"]).map(
              (categoria, index) => (
                <div
                  key={index}
                  className="w-28 h-8 rounded-full flex items-center justify-end relative"
                  style={{ backgroundColor: colors[categoria] }}
                >
                  <div className="w-10 h-10 rounded-full absolute -top-1 -left-2 rounded full bg-white flex items-center justify-center">
                    <img
                      className="w-2/3 h-2/3 "
                      src={`/assets/${categoria.split(" ")[0]}.png`}
                      alt=""
                    />
                  </div>
                  <span className=" font-semibold text-[10px] pr-2">
                    {categoria.split(" ")[0].toUpperCase()}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="w-full h-[90%] flex">
          <div className="h-full w-1/2 bg-gray-200 flex items-center justify-start"></div>
          <div className="h-full w-1/2 bg-gray-900 flex items-center justify-start">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={charPymedata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis domain={[50, 100]} />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="Textiles e indumentaria"
                  stroke="#8884d8"
                />
                <Line
                  type="monotone"
                  dataKey="Alimentos y bebidas"
                  stroke="#82ca9d"
                />
                <Line
                  type="monotone"
                  dataKey="Madera y muebles"
                  stroke="#ffc658"
                />
                <Line
                  type="monotone"
                  dataKey="Papel e impresiones"
                  stroke="#ff7300"
                />
                <Line
                  type="monotone"
                  dataKey="Químicos y plásticos"
                  stroke="#00C49F"
                />
                <Line
                  type="monotone"
                  dataKey="Metal, maquinaria y equipo, y material de transporte"
                  stroke="#FFBB28"
                />
                <Line type="monotone" dataKey="GENERAL" stroke="#0088FE" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
