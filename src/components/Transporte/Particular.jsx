import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Particular({ setPublicoOParticular }) {
  const dataPublico = {
    ENERO: {
      Nafta: { valor: 110, intermensual: 37.5, acumulada: 37.5 },
      Autos: { valor: 43.38, intermensual: 45.32, acumulada: 45.32 },
      Motos: { valor: 76.92, intermensual: 45.24, acumulada: 45.24 },
      PeajeNorte: { valor: 76.92, intermensual: 45.24, acumulada: 45.24 },
      PeajeOeste: { valor: 76.92, intermensual: 45.24, acumulada: 45.24 },
    },
    FEBRERO: {
      Nafta: { valor: 125, intermensual: 13.63, acumulada: 51.13 },
      Autos: { valor: 130, intermensual: 199.68, acumulada: 245 },
      Motos: { valor: 270, intermensual: 251.01, acumulada: 296.25 },
      PeajeNorte: { valor: 270, intermensual: 251.01, acumulada: 296.25 },
      PeajeOeste: { valor: 270, intermensual: 251.01, acumulada: 296.25 },
    },
    MARZO: {
      Nafta: { valor: 125, intermensual: 0, acumulada: 51.13 },
      Autos: { valor: 130, intermensual: 0, acumulada: 245 },
      Motos: { valor: 270, intermensual: 0, acumulada: 296.25 },
      PeajeNorte: { valor: 270, intermensual: 0, acumulada: 296.25 },
      PeajeOeste: { valor: 270, intermensual: 0, acumulada: 296.25 },
    },
    ABRIL: {
      Nafta: { valor: 125, intermensual: 0, acumulada: 51.13 },
      Autos: { valor: 130, intermensual: 0, acumulada: 245 },
      Motos: { valor: 270, intermensual: 0, acumulada: 296.25 },
      PeajeNorte: { valor: 270, intermensual: 0, acumulada: 296.25 },
      PeajeOeste: { valor: 270, intermensual: 0, acumulada: 296.25 },
    },
    MAYO: {
      Nafta: { valor: 574, intermensual: 359.2, acumulada: 410.3 },
      Autos: { valor: 200, intermensual: 53.8, acumulada: 298.8 },
      Motos: { valor: 270, intermensual: 0, acumulada: 296.25 },
      PeajeNorte: { valor: 270, intermensual: 0, acumulada: 296.25 },
      PeajeOeste: { valor: 270, intermensual: 0, acumulada: 296.25 },
    },
    JUNIO: {
      Nafta: { valor: 650, intermensual: 13.2, acumulada: 423.5 },
      Autos: { valor: 200, intermensual: 0, acumulada: 298.8 },
      Motos: { valor: 270, intermensual: 0, acumulada: 296.25 },
      PeajeNorte: { valor: 270, intermensual: 0, acumulada: 296.25 },
      PeajeOeste: { valor: 270, intermensual: 0, acumulada: 296.25 },
    },
    JULIO: {
      Nafta: { valor: 650, intermensual: 0, acumulada: 423.5 },
      Autos: { valor: 200, intermensual: 0, acumulada: 298.8 },
      Motos: { valor: 371.13, intermensual: 37.46, acumulada: 333.71 },
      PeajeNorte: { valor: 371.13, intermensual: 37.46, acumulada: 333.71 },
      PeajeOeste: { valor: 371.13, intermensual: 37.46, acumulada: 333.71 },
    },
  };

  const meses = Object.keys(dataPublico);
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );

  const handleNextMonth = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    if (currentIndex < meses.length - 1) {
      setMesSeleccionado(meses[currentIndex + 1]);
    }
  };

  const handlePreviousMonth = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    if (currentIndex > 0) {
      setMesSeleccionado(meses[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full h-full bg-green-300">
      <div className="w-full h-[5%] bg-gray-800 flex items-center justify-center relative px-4">
        <div className="w-1/3 h-full flex items-center justify-between">
          <button onClick={handlePreviousMonth}>
            <FaArrowLeft className="text-white" />
          </button>
          <span className="text-white text-lg">{mesSeleccionado}</span>
          <button onClick={handleNextMonth}>
            <FaArrowRight className="text-white" />
          </button>
        </div>
        <button
          className="rounded w-24 bg-blue-800 text-white absolute right-2 top-1"
          onClick={() => setPublicoOParticular(null)}
        >
          Volver
        </button>
        {/* #f9d900 peaje*/}
        {/* #f6893b nafta*/}
        {/* #e95faa patente*/}
      </div>
      <div className="h-[95%] bg-gray-500 w-full flex">
        <div className="h-full w-1/3 flex items-center justify-center">
          <div className="w-[90%] h-[90%] bg-gray-200 rounded relative shadow-lg shadow-gray-700">
            <div className="h-24 w-24 rounded-full bg-gray-800 absolute -top-6 -left-4 flex items-center justify-center">
              <img className="w-16 h-16" src="/assets/nafta.png" alt="" />
            </div>
          </div>
        </div>
        <div className="h-full w-2/3 flex flex-col items-center justify-evenly">
          <div className="w-[95%] h-[42.5%] bg-gray-200 rounded relative shadow-lg shadow-gray-700 flex">
            <div className="w-[8%] h-full"></div>
            <div className="w-[42%] h-full flex items-center justify-evenly">
              <div className="w-[45%] h-[95%] bg-[#f9d900] rounded"></div>
              <div className="w-[45%] h-[95%] bg-[#f7fc5d] rounded"></div>
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
              <div className="w-[95%] h-[95%] rounded bg-gray-800"></div>
            </div>
            <div className="h-24 w-24 rounded-full bg-gray-800 absolute -top-4 -left-6 flex items-center justify-center">
              <img className="w-14 h-14" src="/assets/peaje.png" alt="" />
            </div>
          </div>
          <div className="w-[95%] h-[42.5%] bg-gray-200 rounded relative shadow-lg shadow-gray-700 flex">
            <div className="w-[8%] h-full"></div>
            <div className="w-[42%] h-full flex items-center justify-evenly">
              <div className="w-[45%] h-[95%] bg-[#e95faa] rounded"></div>
              <div className="w-[45%] h-[95%] bg-[#f590eb] rounded"></div>
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
              <div className="w-[95%] h-[95%] rounded bg-gray-800"></div>
            </div>
            <div className="h-24 w-24 rounded-full bg-gray-800 absolute -top-4 -left-6 flex items-center justify-center">
              <img className="w-14 h-14" src="/assets/patente.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
